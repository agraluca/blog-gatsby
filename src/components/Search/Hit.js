import React from "react"
import PostItem from "../PostItem"

function Hit({ hit }) {
  return (
    <PostItem
      slug={hit.fields.slug}
      title={hit.title}
      background={hit.background}
      date={hit.date}
      description={hit.description}
      category={hit.category}
    />
  )
}

export default Hit
