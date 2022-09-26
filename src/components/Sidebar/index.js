import React from "react"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"
import LanguageSwitch from "../LanguageSwitch"

import * as S from "./styled"

function Sidebar() {
  return (
    <S.SidebarWrapper>
      <Profile />
      <LanguageSwitch />
      <SocialLinks />
      <MenuLinks />
    </S.SidebarWrapper>
  )
}

export default Sidebar
