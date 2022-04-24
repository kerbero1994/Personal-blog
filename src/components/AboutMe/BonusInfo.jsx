import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import BonusElement from "./BonusInfoElement"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import Button from "@mui/material/Button"
const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  CTA: {
    color: "white",
    marginTop: "16px !important",
    backgroundImage:
      "linear-gradient(to right, #FF8008 0%, #FFC837  51%, #FF8008  100%)",
    "&:hover": {
      backgroundPosition: "right center",
      color: "#fff",
      textDecoration: "none",
    },
    width: "100%",
    borderRadius: "10px !important",
    display: "block",
    transition: "1s  !important",
    backgroundSize: "200% auto",
  },
}))
export default function OutlinedCard({ resources }) {
  const styles = useStyles()
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
          {/*
         <Typography
            sx={{ fontSize: 24, fontWeight: 700 }}
            align="center"
            variant="h6"
            color="white"
          >
            Toolbox
          </Typography>
         */}
          {resources &&
            resources.length > 0 &&
            resources.map(resource => {
              return <BonusElement info={resource} />
            })}
          <Link to="/Resources">
            <Button variant="contained" size="large" className={styles.CTA}>
              let's see all
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Box>
  )
}
