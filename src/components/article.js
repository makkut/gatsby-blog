import React from "react"

const Article = ({
  content: {
    title,
    text,
    banner: {
      file: { url },
    },
  },
}) => (
  <div>
    <h2>{title}</h2>
    <img src={url} alt={title} />
    <p>{text.text}</p>
  </div>
)

export default Article
