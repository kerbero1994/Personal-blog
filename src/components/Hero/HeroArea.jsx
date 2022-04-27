import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@mui/material"
import NavBar from "../NavBar"
import Button from "@mui/material/Button"
const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  BGSection: {
    padding: "0",
    margin: "0",
    width: "100%",
    height: "70vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "0 0 60% 60%/0 0 15% 15%",
    content: "",
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
}))

export const HeroArea = React.memo(function HeroArea({ Background, Logo }) {
  const styles = useStyles()

  return (
    <Grid
      className={styles.BGSection}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      xs={12}
      style={{ backgroundImage: `url(${Background})` }}
    >
      <NavBar Logo={Logo} />
      <Grid
        item
        xs={8}
        sm={4}
        justifyContent="center"
        alignItems="center"
        container
        direction="column"
      >
        <h2 className={styles.title}>HELLO!</h2>
        <h4 className={styles.Subtitle}>
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
