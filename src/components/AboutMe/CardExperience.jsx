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
    <Grid item xs={3}>
      <CardExp
        title={"React"}
        color={"rgb(97,218,251)"}
        gradiente={
          "radial-gradient(circle, rgba(97,218,251,1) 54%, rgba(97,157,251,1) 100%)"
        }
      />
    </Grid>
    <Grid item xs={3}>
      <CardExp
        title={"React Native"}
        color={"white"}
        gradiente={"linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)"}
      />
    </Grid>
    <Grid item xs={3}>
      <CardExp
        title={"Redux"}
        color={"#white"}
        gradiente={
          "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)"
        }
      />
    </Grid>
    <Grid item xs={3}>
      <CardExp
        title={"Gatsby"}
        color={"#white"}
        gradiente={"linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)"}
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
