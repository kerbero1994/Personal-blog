import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { SocialProvider, SocialLink } from "@mui-treasury/components/socialLink"
import { useRoundSocialLinkStyles } from "@mui-treasury/styles/socialLink/round"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@mui/material/Paper"
const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  Bio: {
    width: "30%",
    padding: "8px",
    marginLeft: "8px",
  },
  Social: {
    width: "100%",
    display: "flex",
    alignContent: "flex-end",
    justifyContent: "flex-end",
  },
  Img: {
    float: "left",
    borderRadius: "100%",
    margin: "4px",
  },
}))

const Bio = () => {
  const styles = useStyles()
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author

  return (
    <Paper elevation={3} className={styles.Bio}>
      <StaticImage
        className={styles.Img}
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={90}
        height={90}
        quality={95}
        alt="Profile picture"
      />
      <p>
        <strong>{author.name}</strong> {author?.summary || null}
      </p>
      <div className={styles.Social}>
        <SocialProvider useStyles={useRoundSocialLinkStyles}>
          <SocialLink brand={"Envelope"} href={"mailto:eduglezzvl@gmail.com"} />
          <SocialLink
            brand={"Twitter"}
            href={"https://twitter.com/Eduglezzvl"}
          />
          <SocialLink
            brand={"Instagram"}
            href={"https://www.instagram.com/edu.glez.zvl/"}
          />
          <SocialLink
            brand={"LinkedIn"}
            href={"https://www.linkedin.com/in/eduglezzvl94/"}
          />
          <SocialLink
            brand={"GithubCircle"}
            href={"https://github.com/kerbero1994"}
          />
          <SocialLink
            brand={"GithubCircle"}
            href={"https://gitlab.com/kerbero1994"}
          />
        </SocialProvider>
      </div>
    </Paper>
  )
}

export default Bio
