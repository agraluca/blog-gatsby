import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"

import InternacionalizationProvider from "../../hooks/useInternacionalization"

import GlobalStyles from "../../styles/global"

import * as S from "./styled"

const Layout = ({ children }) => {
  return (
    <InternacionalizationProvider>
      <S.LayoutWrapper>
        <GlobalStyles />
        <TransitionPortal level="top">
          <Sidebar />
        </TransitionPortal>
        <S.LayoutMain>{children}</S.LayoutMain>
        <TransitionPortal level="top">
          <MenuBar />
        </TransitionPortal>
      </S.LayoutWrapper>
    </InternacionalizationProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
