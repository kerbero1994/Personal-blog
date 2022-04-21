import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import BonusElement from "./BonusInfoElement"
export default function OutlinedCard({ resources }) {
  return (
    <Box sx={{ minWidth: 275, padding: 1 }}>
      <Card
        style={{
          minHeight: "100%",
          borderRadius: "16px",
          maxHeight: "295px",
          overflowY: "auto",
          overflowX: "hide",
          padding: 1,
          background: "rgb(102,0,255)",
          backgroundImage:
            "radial-gradient(circle, rgba(102,0,255,1) 8%, rgba(0,17,34,1) 58%)",
        }}
      >
        <CardContent>
          <Typography
            //sx={{ fontSize: 14 }}
            gutterBottom
            align="center"
            variant="h6"
            color="white"
          >
            Toolbox
          </Typography>
          {resources &&
            resources.length > 0 &&
            resources.map(resource => {
              return <BonusElement info={resource} />
            })}
        </CardContent>
      </Card>
    </Box>
  )
}
