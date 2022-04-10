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
  },
}))

export const HeroArea = React.memo(function HeroArea({ Background, Logo }) {
  //console.log("Back", Background)
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
        xs={4}
        justifyContent="center"
        alignItems="center"
        container
        direction="column"
      >
        <h2 className={styles.title}>Frontend Developer</h2>
        <h2 className={styles.title}> </h2>
        <h2 className={styles.title}>Movil Developer</h2>
        <h4 className={styles.Subtitle}>
          Specializing in custom theme development. If you're a business seeking
          a web presence or are looking to hire, contact me here.
        </h4>
        <Button variant="contained" size="large" className={styles.CTA}>
          Get Started
        </Button>
      </Grid>
    </Grid>
  )
})

export default HeroArea
