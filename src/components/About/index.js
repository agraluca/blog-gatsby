import React from "react"
import * as S from "./styled"
import SocialLinks from "../SocialLinks2"

function About() {
  return (
    <S.AboutWrapper>
      <S.AboutTitle>Sobre mim</S.AboutTitle>
      <S.AboutSubtitle>Olá, eu me chamo Luca Matheus Agra.</S.AboutSubtitle>
      <S.AboutParagraph>
        Sou estudante de engenheria de computação na UFBA. Sou apaixonado pela
        área de desenvolvimento e segurança da informação... Na parte de
        desenvolvimento eu gosto mais da parte relacionada ao front-end. Criei
        esse blog no intuito de falar de assuntos relacionados a área de
        tecnologia, com o objetivo de aprender e passar esse conhecimento
        adiante!
      </S.AboutParagraph>
      <S.AboutSubSubtitle>
        Tecnologias que utilizo atualmente:
      </S.AboutSubSubtitle>
      <S.AboutList>
        <S.AboutItems>React.JS</S.AboutItems>
        <S.AboutItems>Node.JS</S.AboutItems>
        <S.AboutItems>Gatsby</S.AboutItems>
        <S.AboutItems>GraphQL</S.AboutItems>
      </S.AboutList>

      <S.AboutSubSubtitleCentered>
        Onde me encontrar:
      </S.AboutSubSubtitleCentered>
      <SocialLinks />
    </S.AboutWrapper>
  )
}

export default About
