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
    resources: allFile(
      filter: { sourceInstanceName: { eq: "resources" } }
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
              color
              Url
              Resume
            }
          }
        }
      }
    }
  }
`
