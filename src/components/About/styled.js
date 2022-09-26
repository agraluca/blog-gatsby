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
  margin: 2.4rem auto 1rem;
  font-weight: 800;
  letter-spacing: 0.069rem;
  line-height: 1.4;

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
  margin: 2.4rem auto;
  font-weight: 800;
  letter-spacing: 0.069rem;
  line-height: 1.4;

  ${media.lessThan("large")`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  `}
`

export const AboutSubSubtitle = styled.h4`
  font-size: 1.4rem;
  padding: 0 1.4rem;
  margin: 2.4rem auto 1rem;
  font-weight: 800;
  letter-spacing: 0.069rem;
  line-height: 1.4;

  ${media.lessThan("large")`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  `}
`

export const AboutSubSubtitleCentered = styled.h4`
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  padding: 0 1.4rem;
  margin: 3rem auto 3rem;
  font-weight: 800;
  letter-spacing: 0.069rem;
  line-height: 1.4;

  ${media.lessThan("large")`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  `}
`

export const AboutParagraph = styled.p`
  margin: 0 auto 1.6rem;
  max-width: 70rem;
  color: var(--postColor);
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.7;
  letter-spacing: 0.069rem;
  padding: 0 1.4rem;

  ${media.lessThan("large")`
    padding: 0 1rem;
    word-break: break-word;
    max-width: 100%;
  `}
`
export const AboutList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  list-style: disc;
  padding-left: 3.5rem;
  margin: 0 auto 1.6rem;
  line-height: 1.7;
  letter-spacing: 0.069rem;
  font-weight: 300;
  font-size: 1.25rem;
`
export const AboutItems = styled.li``
