import React, { createContext, useContext, useState } from "react"
import { englishTexts, portugueseTexts } from "../utils/textLanguages"
import { portugueseLinks, englishLinks } from "../components/MenuLinks/content"

export const internacionalizationContextDefaultValues = {
  language: "pt-BR",
  toggleLanguage: () => null,
  texts: portugueseTexts,
}

const InternacionalizationContext = createContext(
  internacionalizationContextDefaultValues
)

export default function InternacionalizationProvider({ children }) {
  const portugueseLanguage = "pt-BR"
  const englishLanguage = "en-US"

  const initialStateLanguage =
    window.localStorage.getItem("language") ?? portugueseLanguage

  const [language, setLanguage] = useState(initialStateLanguage)
  const toggleLanguage = languageString => {
    window.localStorage.setItem("language", languageString)
    setLanguage(languageString)
  }
  const isPortuguese = language === portugueseLanguage
  const isEnglish = language === englishLanguage

  const translatedTexts = isPortuguese ? portugueseTexts : englishTexts

  const translatedLinks = isPortuguese ? portugueseLinks : englishLinks

  return (
    <InternacionalizationContext.Provider
      value={{
        language,
        toggleLanguage,
        translatedTexts,
        translatedLinks,
        portugueseLanguage,
        englishLanguage,
        isPortuguese,
        isEnglish,
      }}
    >
      {children}
    </InternacionalizationContext.Provider>
  )
}

const useInternacionalization = () => useContext(InternacionalizationContext)

export { InternacionalizationProvider, useInternacionalization }
