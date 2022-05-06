import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@mui/material"
import NavBar from "../NavBar"
import Button from "@mui/material/Button"
import { StaticImage } from "gatsby-plugin-image"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import GitHubIcon from "@mui/icons-material/GitHub"
import "./Hero.css"
const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  BGSection: {
    [breakpoints.down("sm")]: {
      height: "90vh",
      borderRadius: "100% 0% 100% 0% / 26% 100% 0% 74% ",
    },
  },
  PrincipalText: {
    color: "white",
    fontFamily: "IBM Plex Serif",
    fontWeight: "700",
    textAlign: "center",
    fontSize: "60px",
  },
  title: {
    color: "white",
    fontFamily: "open sans,sans-serif",
    fontWeight: "700",
    textAlign: "center",
    margin: "0",
    MarginBottom: "20px",
    lineHeight: "1.3",
    fontSize: "40px",
    textTransform: "uppercase",
  },
  Subtitle: {
    color: "white",
    fontFamily: "open sans,sans-serif",
    fontWeight: "700",
    textAlign: "center",
    margin: "0",
  },
  CTA: {
    color: "white",
    marginTop: "16px !important",
    backgroundImage:
      "linear-gradient(to right, #FF8008 0%, #FFC837  51%, #FF8008  100%)",
    "&:hover": {
      backgroundPosition: "right center",
      color: "#fff",
      textDecoration: "none",
    },
    width: "35%",
    borderRadius: "35px !important",
    display: "block",
    transition: "1s  !important",
    backgroundSize: "200% auto",
    [breakpoints.down("lg")]: {
      width: "45%",
      borderRadius: "25px !important",
    },
    [breakpoints.down("md")]: {
      width: "65%",
      borderRadius: "25px !important",
    },
    [breakpoints.down("sm")]: {
      width: "100%",
      borderRadius: "25px !important",
    },
  },
  Icons: {
    color: "white",
  },
}))

export const HeroArea = React.memo(function HeroArea({ Background, Logo }) {
  const styles = useStyles()

  let ListOfIcons = [
    {
      Element: <TwitterIcon className={styles.Icons} fontSize="large" />,
      link: "https://twitter.com/Eduglezzvl",
    },
    {
      Element: <InstagramIcon className={styles.Icons} fontSize="large" />,
      link: "https://www.instagram.com/edu.glez.zvl/",
    },
    {
      Element: <LinkedInIcon className={styles.Icons} fontSize="large" />,
      link: "https://www.linkedin.com/in/eduglezzvl94/",
    },
    {
      Element: <EmailIcon className={styles.Icons} fontSize="large" />,
      link: "mailto:eduglezzvl@gmail.com",
    },
    {
      Element: <GitHubIcon className={styles.Icons} fontSize="large" />,
      link: "https://github.com/kerbero1994",
    },
    {
      Element: <GitHubIcon className={styles.Icons} fontSize="large" />,
      link: "https://gitlab.com/kerbero1994",
    },
  ]
  return (
    <Grid
      className={(styles.BGSection, "Background")}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      xs={12}
    >
      <NavBar Logo={Logo} />
      <Grid item container sm={1}>
        <aside>
          <nav>
            <ul style={{ listStyle: "none" }}>
              {ListOfIcons.map(icon => {
                return (
                  <li className="MenuElement">
                    <a href={icon.link}>{icon.Element}</a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </aside>
      </Grid>

      <Grid item container sm={4}>
        <StaticImage
          src="../../images/profile-pic.png"
          alt="ProfilePic"
          width={450}
          height={450}
          placeholder="blurred"
          quality={40}
          className="HeroImg"
        />
      </Grid>
      <Grid
        item
        xs={8}
        sm={4}
        justifyContent="center"
        alignItems="center"
        container
        direction="column"
      >
        <h2 className="HeroTitle">Hello, I'm Eduardo</h2>
        <h4 className="SubTitle">
          Ready to meet someone in 10 min? look around and search, discover
          something new or just pass by anyway you're welcome.
        </h4>
        <Button
          variant="contained"
          size="large"
          className={styles.CTA}
          href={`#About me`}
        >
          Get Started
        </Button>
      </Grid>
    </Grid>
  )
})

export default HeroArea
