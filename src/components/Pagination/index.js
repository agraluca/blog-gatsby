import React from "react"
import propTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import * as S from "./styled"

function Pagination({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) {
  return (
    <S.PaginationWrapper>
      {!isFirst && (
        <AniLink
          to={prevPage}
          swipe
          direction="left"
          duration={0.6}
          hex="#16202c"
        >
          ⟵ página anterior
        </AniLink>
      )}
      <p>
        {currentPage} de {numPages}
      </p>
      {!isLast && (
        <AniLink
          to={nextPage}
          swipe
          direction="right"
          duration={0.6}
          hex="#16202c"
        >
          próxima pagina ⟶
        </AniLink>
      )}
    </S.PaginationWrapper>
  )
}

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination
