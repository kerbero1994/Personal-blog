import * as React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogSection from "../components/Blogs/Blog"
import Hero from "../components/Hero/HeroArea"
import Contact from "../components/Contact/Compose"
import Resources from "../components/Resources/Resources"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.blogs.edges
  //console.log(data)

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>Something strange happened, no blogs enable</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Helmet>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>
      <Hero Background={data.Background.publicURL} Logo={data.Logo.publicURL} />
      <section id="Blog">
        <BlogSection posts={posts} />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      <section id="Resources">
        <Resources />
      </section>
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
    Background: file(relativePath: { eq: "purple.svg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
      extension
      publicURL
    }
    Logo: file(relativePath: { eq: "Logo1.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
      extension
      publicURL
    }
    demos: allFile(
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
            }
          }
        }
      }
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
