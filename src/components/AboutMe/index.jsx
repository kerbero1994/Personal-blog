import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@mui/material/Grid"
import CardPersonal from "./CardPersonal"
import CardExperience from "./CardExperience"
import Personal from "./Personal"
import LastAdventure from "./LastAdventure"
import WorkInProgress from "./WorkInProgress"
import BonusInfo from "./BonusInfo"
import "./css/index.css"

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
    [breakpoints.down("sm")]: {
      fontSize: "24px",
    },
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
      className={"PrincipalBackground"}
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
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={2}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <CardPersonal Profile={Profile} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={9}
          lg={9}
          xl={5}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Personal />
        </Grid>
        <Grid
          item
          xs={0}
          sm={0}
          md={3}
          lg={3}
          xl={0}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ display: { xl: "none" } }}
        ></Grid>
        <Grid item xs={12} sm={12} md={9} lg={9} xl={5}>
          <LastAdventure />
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={12} sm={12} md={9} lg={9} xl={6}>
          <CardExperience />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={6}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <WorkInProgress />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
