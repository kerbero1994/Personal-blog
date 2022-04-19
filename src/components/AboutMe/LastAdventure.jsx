import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 24 }} gutterBottom>
        Resent Works
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Consultant and developer for the largest union of the metal-mechanical
        industry in Mexico{" "}
        <a href={"https://sitimm.org"} style={{ textDecoration: "none" }}>
          "SITIMM"
        </a>{" "}
        working mainly on the digitalization of internal processes, as well as
        the launch of its platform for user management, multimedia content
        management and the premiere of its applications. android for internal
        control and sending of information and reports
      </Typography>
      <br />
      <br />
    </CardContent>
    <CardActions>
      {
        //<Button size="small">Go to see it !</Button>
      }
    </CardActions>
  </React.Fragment>
)

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        style={{
          backgroundImage:
            "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)",
          height: "100%",
          borderRadius: "16px",
        }}
        variant="outlined"
      >
        {card}
      </Card>
    </Box>
  )
}
