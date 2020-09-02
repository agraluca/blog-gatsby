import styled from "styled-components"
import media from "styled-media-query"

export const AboutWrapper = styled.header`
  color: var(--postColor);
  margin: auto;
  max-width: 70rem;
  padding: 5rem 5rem 0;

  ${media.lessThan("large")`
    padding: 3rem 0 0;
    max-width: 100%;
  `}
`

export const AboutTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;

  ${media.lessThan("large")`
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
  `}
`

export const AboutSubtitle = styled.h2`
  font-size: 2rem;
  font-weight: 200;
  padding: 0 1.4rem;

  ${media.lessThan("large")`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  `}
`

export const AboutParagraph = styled.p`
  font-size: 1.1rem;
  font-weight: 100;
  padding: 0 1.4rem;

  ${media.lessThan("large")`
    padding: 0 1rem;
  `}
`
