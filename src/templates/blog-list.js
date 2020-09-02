import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"
import Pagination from "../components/Pagination"
import * as S from "../components/ListWrapper/styled"

function BlogList(props) {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? `/` : `/pages/${currentPage - 1}`
  const nextPage =
    currentPage + 1 === numPages
      ? `/pages/${numPages}`
      : `/pages/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Home" />
      <S.ListWrapper>
        {postList.map(
          ({
            node: {
              frontmatter: { background, category, date, description, title },
              timeToRead,
              fields: { slug },
            },
          }) => (
            <PostItem
              key={slug}
              slug={slug}
              background={background}
              category={category}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
            />
          )
        )}
      </S.ListWrapper>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query PostLists($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          timeToRead
          wordCount {
            words
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogList
