import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/OnPagesLayout"
import Seo from "../components/seo"
import CardResource from "../components/AboutMe/BonusInfoElement"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@mui/material/Grid"

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  PrincipalContainer: {
    width: "100%",
  },
}))
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const Demos = data.Demos.edges
  const styles = useStyles()
  const Footer = data.BackgroundFooter.publicURL
  console.log(data)

  if (Demos.length === 0) {
    return (
      <Layout location={location} title={siteTitle} FooterImg={Footer}>
        <Seo title="All resource" />
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
        {Demos.map(demo => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
              <CardResource info={demo} />
            </Grid>
          )
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
              color
              Url
              Resume
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
