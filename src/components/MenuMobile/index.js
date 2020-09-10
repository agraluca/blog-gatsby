import React from "react"
import * as S from "./styled"
import GlobalStyles from "../../styles/global"

function MenuMobile() {
  return (
    <S.MenuMobileWrapper>
      <GlobalStyles />
      <S.MenuMobileLinksList>
        <S.MenuMobileLinksLink to="/">
          <S.MenuMobileLinksItem>Home</S.MenuMobileLinksItem>
        </S.MenuMobileLinksLink>
        <S.MenuMobileLinksLink to="/about">
          <S.MenuMobileLinksItem>Sobre</S.MenuMobileLinksItem>
        </S.MenuMobileLinksLink>
      </S.MenuMobileLinksList>
    </S.MenuMobileWrapper>
  )
}

export default MenuMobile
