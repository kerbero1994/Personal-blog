import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

export default function OutlinedCard({ title, img, years, color, gradiente }) {
  return (
    <Box sx={{ minWidth: "100%", minHeight: 275 }}>
      <Card
        style={{
          backgroundColor: `${color}`,
          backgroundImage: `${gradiente}`,
          height: "275px",
          borderRadius: "16px",
        }}
        variant="outlined"
        img={img}
        years={years}
      >
        <React.Fragment>
          <CardContent>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <p style={{ color: "white" }}>{title}</p>
            </div>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  )
}
