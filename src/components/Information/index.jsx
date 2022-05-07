import React from "react"
import Grid from "@mui/material/Grid"
import "./css/index.css"

export const SkillsArea = React.memo(function SkillsArea() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={"PrincipalBackground"}
    >
      <Grid
        xs={6}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <div className={"TitleSkills"}>
          <h3 className={"PrincipalTitle"}>About Me</h3>
        </div>
        <p>
          Hello, I'm Eduardo, a front end developer looking for new challenges
          and opportunities, I currently work as a consultant and freelancer for
          multiple organizations throughout Mexico, mainly versed in web
          technologies and the creation of hybrid applications for Android and
          iOS systems.
        </p>
      </Grid>
      <Grid
        xs={6}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {" "}
        <div className={"TitleSkills"}>
          <h3 className={"PrincipalTitle"}>Resent Works</h3>
        </div>
        <p>
          Consultant and developer for the largest union of the metal-mechanical
          industry in Mexico{" "}
          <a href={"https://sitimm.org"} style={{ textDecoration: "none" }}>
            "SITIMM"
          </a>{" "}
          working mainly on the digitalization of internal processes, as well as
          the launch of its platform for user management, multimedia content
          management and the premiere of its applications. android for internal
          control and sending of information and reports
        </p>
      </Grid>
    </Grid>
  )
})

export default SkillsArea
