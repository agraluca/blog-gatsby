import React from "react"

import { useInternacionalization } from "../../hooks/useInternacionalization"

import * as S from "./styled"

export default function LanguageSwitchWrapper() {
  const {
    portugueseLanguage,
    englishLanguage,
    toggleLanguage,
    isPortuguese,
    isEnglish,
  } = useInternacionalization()
  return (
    <S.LanguageSwitchWrapper>
      <S.Button
        isActive={isPortuguese}
        onClick={() => toggleLanguage(portugueseLanguage)}
      >
        <span role="img" aria-label={portugueseLanguage}>
          🇧🇷
        </span>
      </S.Button>
      <S.Button
        isActive={isEnglish}
        onClick={() => toggleLanguage(englishLanguage)}
      >
        <span role="img" aria-label={englishLanguage}>
          🇺🇸
        </span>
      </S.Button>
    </S.LanguageSwitchWrapper>
  )
}
