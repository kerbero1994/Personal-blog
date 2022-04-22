import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/OnPagesLayout"
import Seo from "../components/seo"
import CardBlog from "../components/Blogs/CardBlog"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@mui/material/Grid"

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  PrincipalContainer: {
    width: "100%",
  },
}))
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.blogs.edges
  const styles = useStyles()
  const Footer = data.BackgroundFooter.publicURL
  console.log(data)

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle} FooterImg={Footer}>
        <Seo title="All posts" />
        <p>Something strange happened, no blogs enable</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Grid
        container
        direction="row"
        justifyContent="start"
        alignItems="center"
        className={styles.Secondary}
      >
        {posts.map(post => {
          return <CardBlog info={post} />
        })}
      </Grid>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    BackgroundFooter: file(relativePath: { eq: "Footer.svg" }) {
      extension
      publicURL
    }
    blogs: allFile(
      filter: { sourceInstanceName: { eq: "blog" } }
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
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  }
`
