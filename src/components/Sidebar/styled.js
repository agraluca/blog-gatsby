import styled from "styled-components"
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  display: flex;
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  flex-direction: column;
  height: 100vh;
  position: fixed;
  text-align: center;
  width: 20rem;
  padding: 1rem 0;

  ${media.lessThan("large")`
   align-items: flex-start;
   height: auto;
   padding: 1rem 2rem;
   width: 100%;
  `}
`
