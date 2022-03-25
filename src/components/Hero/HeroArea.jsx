import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography } from "@mui/material"
import Menu from "./Menu"
const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  BGSection: {
    padding: "0",
    margin: "0",
    width: "100%",
    height: "60vh",
    backgroundImage:
      "url(https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Berchtesgaden_Desktop_1920x1080.jpg)",
  },
  PrincipalText: {
    color: "white",
    fontFamily: "IBM Plex Serif",
    fontWeight: "700",
    textAlign: "center",
    fontSize: "60px",
  },
}))

export const HeroArea = React.memo(function HeroArea({ posts }) {
  const styles = useStyles()

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={styles.BGSection}
      xs={12}
    >
      <Grid item xs={6}>
        <h1 className={styles.PrincipalText}>FrontEnd Developer</h1>
        <Typography
          align="center"
          gutterBottom
          variant="h4"
          className={styles.PrincipalText}
        >
          "I have passion for the details, I strive to make the design of every
          user experiences como to life.""
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Menu />
      </Grid>
    </Grid>
  )
})

export default HeroArea
