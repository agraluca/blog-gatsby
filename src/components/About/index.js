import React from "react"

import SocialLinks from "../SocialLinks2"

import { useInternacionalization } from "../../hooks/useInternacionalization"

import { skills } from "./skills"

import * as S from "./styled"

function About() {
  const { translatedTexts } = useInternacionalization()
  return (
    <S.AboutWrapper>
      <S.AboutTitle>{translatedTexts.about.title}</S.AboutTitle>
      <S.AboutSubtitle>{translatedTexts.about.subtitle}</S.AboutSubtitle>
      <S.AboutParagraph>{translatedTexts.about.paragraph}</S.AboutParagraph>
      <S.AboutSubSubtitle>
        {translatedTexts.about.subSubtitle}
      </S.AboutSubSubtitle>
      <S.AboutList>
        {skills.map(skill => (
          <S.AboutItems key={skill}>{skill}</S.AboutItems>
        ))}
      </S.AboutList>

      <S.AboutSubSubtitleCentered>
        {translatedTexts.about.socialLinksTitle}
      </S.AboutSubSubtitleCentered>
      <SocialLinks />
    </S.AboutWrapper>
  )
}

export default About
