import styled, { css } from "styled-components"

export const Button = styled.button`
  ${({ isActive }) => css`
    background: transparent;
    border: none;
    border: 1px solid var(--borders);
    cursor: pointer;
    filter: ${isActive ? "none" : "grayscale(100%)"};
    animation: 0.2s all ease-in;

    &:hover {
      opacity: 0.8;
    }
  `}
`

export const LanguageSwitchWrapper = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;

  ${Button}:first-child {
    border-right: 0px;
    border-radius: 0.2rem 0 0 0.2rem;
  }

  ${Button}:last-child {
    border-radius: 0 0.2rem 0.2rem 0;
  }
`
