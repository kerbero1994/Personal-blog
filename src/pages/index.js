import * as React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogSection from "../components/Blogs/Blog"
import Hero from "../components/Hero/HeroArea"
import Contact from "../components/Contact/Compose"
import Demos from "../components/Resources/Resources"
import AboutMe from "../components/AboutMe"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.blogs.edges
  const resources = data.resources.edges
  const DemosInfo = data.demos.edges
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
      <section id="About me">
        <AboutMe
          Background={data.AboutMe.publicURL}
          Profile={data.profilePic.childImageSharp.fluid}
          resources={resources}
        />
      </section>
      <section id="Blog">
        <BlogSection posts={posts} />
      </section>
      <section id="Demos">
        <Demos resources={DemosInfo} />
      </section>
      <section id="Contact">
        <Contact />
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
    profilePic: file(relativePath: { eq: "profile-pic.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
      extension
      publicURL
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
    AboutMe: file(relativePath: { eq: "AboutMe4.svg" }) {
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
              color
              Url
              Resume
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
