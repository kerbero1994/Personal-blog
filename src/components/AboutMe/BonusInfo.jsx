import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import BonusElement from "./BonusInfoElement"
export default function OutlinedCard({ resources }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        style={{
          background: "transparent",
          minHeight: "100%",
          borderRadius: "16px",
          maxHeight: "295px",
          overflowY: "auto",
          overflowX: "hide",
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Free resources
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
