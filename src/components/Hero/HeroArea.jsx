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
import Slide from "@mui/material/Slide"

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
  const [About, setAbout] = React.useState(false)
  const [Hello, setHello] = React.useState(true)
  const containerRef = React.useRef(null)

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
      ref={containerRef}
    >
      <NavBar Logo={Logo} />

      <Grid
        item
        container
        sx={12}
        sm={6}
        md={4}
        justifyContent="center"
        alignItems="center"
      >
        <StaticImage
          src="../../images/profile-pic.png"
          alt="ProfilePic"
          width={450}
          height={450}
          placeholder="blurred"
          quality={100}
          className="HeroImg"
        />
      </Grid>
      <Grid
        item
        sx={12}
        sm={6}
        md={4}
        justifyContent="center"
        alignItems="center"
        container
        direction="column"
        ref={containerRef}
      >
        {Hello && (
          <Slide direction="up" in={Hello}>
            <div ref={containerRef}>
              <h2 className="HeroTitle">Hello, I'm Eduardo</h2>
              <h4 className="SubTitle">
                Ready to meet someone in 10 min? look around and search,
                discover something new or just pass by anyway you're welcome.
              </h4>
            </div>
          </Slide>
        )}
        {About && (
          <Slide direction="up" in={About}>
            <div ref={containerRef}>
              <h2 className="HeroTitle">About Me</h2>
              <h4 className="SubTitle">
                Hello, I'm Eduardo, a front end developer looking for new
                challenges and opportunities, I currently work as a consultant
                and freelancer for multiple organizations throughout Mexico,
                mainly versed in web technologies and the creation of hybrid
                applications for Android and iOS systems.
              </h4>
            </div>
          </Slide>
        )}
        {Hello && (
          <Button
            variant="contained"
            size="large"
            className={styles.CTA}
            onClick={() => {
              setHello(!Hello)
              setAbout(!About)
            }}
          >
            {Hello ? "About Me" : "Hello"}
          </Button>
        )}
        {!Hello && About && (
          <Button
            variant="contained"
            size="large"
            className={styles.CTA}
            href="#Skills"
          >
            My skills ?
          </Button>
        )}
      </Grid>
      <Grid
        item
        container
        xs={0}
        sm={0}
        md={1}
        alignItems="center"
        justifyContent="end"
        sx={{
          display: { xs: "none", sm: "inline" },
        }}
      >
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
    </Grid>
  )
})

export default HeroArea
