import React from "react"
import * as S from "./styled"
import getThemeColor from "../../utils/getThemeColor"

import links from "./content"

function MenuLinks() {
  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>
        {links.map((link, i) => {
          return (
            <S.MenuLinksItem key={i}>
              <S.MenuLinksLink
                to={link.url}
                activeClassName="active"
                paintDrip
                duration={0.6}
                hex={getThemeColor()}
              >
                {link.label}
              </S.MenuLinksLink>
            </S.MenuLinksItem>
          )
        })}
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  )
}

export default MenuLinks
