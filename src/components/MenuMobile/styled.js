import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuMobileWrapper = styled.main`
  display: grid;
  place-items: center;
  height: 80vh;

  background-color: var(--background);
`

export const MenuMobileLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`

export const MenuMobileLinksItem = styled.li`
  padding: 0.5rem 0;
  .active {
    color: var(--highlight);
  }
`

export const MenuMobileLinksLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--highlight);
  }
`
