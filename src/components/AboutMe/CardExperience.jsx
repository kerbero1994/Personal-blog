import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import CardExp from "./Experience"

const card = (
  <Grid
    container
    direction="row"
    justifyContent="start"
    alignItems="center"
    spacing={1}
  >
    <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
      <CardExp
        title={"React"}
        img={
          "https://blog.desafiolatam.com/wp-content/uploads/2019/04/react-galaxia.png"
        }
        years={"5 years"}
        color={"rgb(25,33,69)"}
        gradiente={
          "radial-gradient(circle, rgba(25,33,69,1) 14%, rgba(21,27,59,1) 84%)"
        }
      />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
      <CardExp
        title={"React Native"}
        years={"3 years"}
        color={"#2E4EBF"}
        img={
          "https://s3.ap-southeast-1.amazonaws.com/arrowhitech.com/wp-content/uploads/2021/09/23022436/b_How-to-Deploy-a-React-Native-App-for-iOS-and-Android-.png"
        }
        gradiente={"linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)"}
      />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
      <CardExp
        title={"Redux"}
        color={"#764ABD"}
        gradiente={
          "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)"
        }
        img={
          "https://wunnle.com/static/60c3ccf040c3de42b695c6683e2b19cf/aabac/social.jpg"
        }
        years={"3 years"}
      />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
      <CardExp
        title={"Gatsby"}
        color={"#40126F"}
        gradiente={"linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)"}
        img={
          "https://images.ctfassets.net/23aumh6u8s0i/1vxNyK4RaOzRrc5ELJ8rqo/ec2a9b9dab9fb851db2794d80fe0f92d/gatsbyjs"
        }
        years={"3 years"}
      />
    </Grid>
  </Grid>
)

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275, padding: 0, background: "transparent" }}>
      <div
        style={{
          backgroundImage: "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)",
          height: "100%",
          borderRadius: "16px",
          padding: "0px",
          background: "transparent",
        }}
      >
        {card}
      </div>
    </Box>
  )
}
