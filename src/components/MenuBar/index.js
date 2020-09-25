import React, { useState, useEffect } from "react"

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { LightBulb as Light } from "@styled-icons/octicons/LightBulb"
import { Grid } from "@styled-icons/boxicons-solid/Grid"
import { ThList as List } from "@styled-icons/typicons/ThList"
import { Menu } from "@styled-icons/entypo/Menu"
import getThemeColor from "../../utils/getThemeColor"
import FavIcon from "../../../static/assets/img/favicon.svg"

import * as S from "./styled"

function MenuBar() {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)
  const [screenSize, setScreenSize] = useState(window.innerWidth)

  const isDarkMode = theme === "dark"
  const isListMode = display === "list"

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)
    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  function handleGoTop() {
    window.scroll({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    function getScreenSize() {
      const newWidth = window.innerWidth
      setScreenSize(newWidth)
    }
    window.addEventListener("resize", getScreenSize)
    return () => window.removeEventListener("resize", getScreenSize)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          swipe
          direction="left"
          duration={0.6}
          bg={getThemeColor()}
          to="/"
          title="Voltar para Home"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>

        <S.MenuBarLink
          swipe
          direction="right"
          duration={0.6}
          bg={getThemeColor()}
          to="/search"
          title="Pesquisar"
        >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>

      {screenSize <= 1170 && (
        <S.MenuBarGroup>
          <S.MenuBarLink
            to="/menuMobile"
            title="Abrir Menu"
            activeClassName="active"
            paintDrip
            duration={0.6}
            hex={getThemeColor()}
          >
            <S.MenuBarItem>
              <Menu />
            </S.MenuBarItem>
          </S.MenuBarLink>
        </S.MenuBarGroup>
      )}
      {screenSize > 1170 && (
        <S.MenuBarGroup>
          <S.MenuBarItem className="no-pointer">
            <img src={FavIcon} alt="Logomarca" />
          </S.MenuBarItem>
        </S.MenuBarGroup>
      )}

      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
          className="display"
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }}
          className={theme}
        >
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o topo" onClick={handleGoTop}>
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
