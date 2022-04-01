import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@mui/material"
import NavBar from "../NavBar"
const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  BGSection: {
    padding: "0",
    margin: "0",
    width: "80%",
    height: "60vh",
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
    maxWidth: "100%",
    maxHeight: "200px",
  },
}))

export const HeroArea = React.memo(function HeroArea({ Background }) {
  console.log("Back", Background)
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
      <NavBar />
      <Grid
        item
        xs={4}
        justifyContent="center"
        alignItems="center"
        container
      ></Grid>
    </Grid>
  )
})

export default HeroArea
