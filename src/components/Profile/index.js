import React from "react"

import Avatar from "../Avatar"

import { useStaticQuery, graphql } from "gatsby"

import getThemeColor from "../../utils/getThemeColor"

import { useInternacionalization } from "../../hooks/useInternacionalization"

import * as S from "./styled"

const Profile = () => {
  const { translatedTexts } = useInternacionalization()
  const {
    site: {
      siteMetadata: { title, position },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        to="/"
        swipe
        direction="left"
        duration={0.6}
        bg={getThemeColor()}
      >
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>
        {translatedTexts.profile.description}
      </S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
