import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Article from "../components/article"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        {
          allContentfulArticle {
            edges {
              node {
                id
                createdAt
                title
                text {
                  text
                }
                banner {
                  file {
                    url
                  }
                }
              }
            }
          }
        }
      `}
      render={({ allContentfulArticle: { edges } }) =>
        edges.map(({ node }) => <Article key={node.id} content={node} />)
      }
    />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
