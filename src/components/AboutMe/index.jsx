import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@mui/material/Grid"
import CardPersonal from "./CardPersonal"
import CardExperience from "./CardExperience"
import Personal from "./Personal"
import LastAdventure from "./LastAdventure"
import WorkInProgress from "./WorkInProgress"
import BonusInfo from "./BonusInfo"

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  BGSection: {
    padding: "2%",
    transition: "2s",
    width: "100%",
    //height: "50vh",
    backgroundPosition: "top",
    backgroundSize: "cover",
    "&:hover": {
      backgroundPosition: "bottom center",
      color: "#fff",
      textDecoration: "none",
    },
  },
  NameContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  NameH: {
    color: "#e2ebf0",
  },
}))

export const AboutMeArea = React.memo(function AboutMeArea({
  Background,
  Profile,
  resources,
}) {
  const styles = useStyles()

  return (
    <Grid
      container
      direction="row"
      justifyContent="start"
      alignItems="center"
      className={styles.BGSection}
      style={{ backgroundImage: `url(${Background})` }}
    >
      <Grid
        container
        xs={12}
        direction="row"
        justifyContent="start"
        alignItems="center"
        spacing={1}
        style={{ marginBottom: "16px" }}
      >
        <Grid item xs={2}>
          <CardPersonal Profile={Profile} />
        </Grid>
        <Grid item xs={5}>
          <Personal />
        </Grid>
        <Grid item xs={5}>
          <LastAdventure />
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        direction="row"
        justifyContent="start"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={6}>
          <CardExperience />
        </Grid>
        <Grid
          item
          xs={6}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={6}>
            <WorkInProgress />
          </Grid>
          <Grid item xs={6}>
            <BonusInfo resources={resources} />
          </Grid>
        </Grid>
      </Grid>
      <div className={styles.NameContainer}>
        <h2 className={styles.NameH}>Eduardo Gonzalez Zavala</h2>
      </div>
    </Grid>
  )
})

export default AboutMeArea
