import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@mui/material"
import NavBar from "../NavBar"
import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"
import { orange } from "@mui/material/colors"
const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  BGSection: {
    padding: "0",
    margin: "0",
    width: "80%",
    height: "70vh",
    maxWidth: "20vw",
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
}))

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[500],
  "&:hover": {
    backgroundColor: orange[700],
  },
  width: "35%",
  borderRadius: "35px",
  marginTop: "16px",
  display: "block",
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
        <ColorButton variant="contained" size="large">
          Get Started
        </ColorButton>
      </Grid>
    </Grid>
  )
})

export default HeroArea
