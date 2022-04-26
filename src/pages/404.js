import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { makeStyles } from "@material-ui/core/styles"
import "../styles/404.css"

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  img: {
    maxWidth: "100vw",
    maxHeight: "100vh",
  },
  container: {
    position: "relative",
  },
  center: {
    position: "absolute",
    top: "50%",
    left: "30%",
    transform: "translate(-50%, -50%)",
    fontSize: "18px",
  },
  Title: {
    fontFamily: "Press Start 2P, cursive",
    color: "white",
  },
}))
const NotFoundPage = ({ data, location }) => {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <StaticImage
        className={styles.img}
        layout="fixed"
        formats={["auto", "webp", "avif", "jpg"]}
        src="../images/404.jpg"
        quality={95}
        alt="Profile picture"
      />
      <div className={styles.center}>
        <h1
          className={styles.Title}
          style={{ fontFamily: "Press Start 2P, cursive" }}
        >
          Lost Signal
        </h1>
        <h1 className={styles.Title}>404 Not Found</h1>
      </div>
    </div>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
