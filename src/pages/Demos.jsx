import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/OnPagesLayout"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  //const resources = data.resources.edges
  return <Layout location={location} title={siteTitle}></Layout>
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    Demos: allFile(
      filter: { sourceInstanceName: { eq: "demos" } }
      sort: {
        fields: [childrenMarkdownRemark___frontmatter___date]
        order: DESC
      }
    ) {
      edges {
        node {
          id
          childMarkdownRemark {
            frontmatter {
              date
              description
              layout
              thumbnail
              title
            }
          }
        }
      }
    }
  }
`
