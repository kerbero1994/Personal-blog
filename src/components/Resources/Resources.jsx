import React, { useRef } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@mui/material/Grid"
import CardResources from "./CardResources"
//import { styled } from "@mui/material/styles"
//import Button from "@mui/material/Button"

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  BGSection: {
    padding: "2%",
    transition: "2s",
    backgroundImage: "linear-gradient(to top, #09203f 0%, #537895 100%);",
    borderRadius: "60% 60% 60% 60% /15% 15% 0 0",
  },
  ButtonDiv: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  buttonFadeOut: {
    visibility: "hidden",
    opacity: "0",
    transition: "visibility 0s 2s, opacity 2s linear",
  },
  Full: {
    width: "100%",
  },
  button: {
    color: "white",
    backgroundImage:
      "linear-gradient(to right, #FF8008 0%, #FFC837  51%, #FF8008  100%)",
    "&:hover": {
      backgroundPosition: "right center",
      color: "#fff",
      textDecoration: "none",
    },
    width: "35%",
    borderRadius: "35px !important",
    bottom: "-55px",
    display: "block",
    transition: "0.5s !important",
    backgroundSize: "200% auto",
  },
  Arrow: {
    color: "white",
    marginTop: "16px !important",
    backgroundImage:
      "linear-gradient(to right, #FF8008 0%, #FFC837  51%, #FF8008  100%)",
    "&:hover": {
      backgroundPosition: "right center",
      color: "#fff",
      textDecoration: "none",
    },
    width: "45%",
    height: "20vh",
    borderRadius: "35px !important",
    display: "block",
    transition: "1s  !important",
    backgroundSize: "200% auto",
    clipPath: "polygon(100% 55%, 54% 100%, 0 55%, 0 0, 51% 51%, 100% 0)",
  },
}))

export const BlogsArea = React.memo(function BlogsArea({ resources }) {
  let array = []
  for (let i = 0; i < resources.length; i += 4) {
    array.push(resources.slice(i, i + 4))
  }
  console.log(array)
  const styles = useStyles()
  let Init = array.length > 1 ? array[0] : []
  const containerRef = useRef(null)
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={styles.BGSection}
      ref={containerRef}
    >
      {Init.map(Resource => {
        return <CardResources info={Resource} />
      })}
      {/*<div>
        <Button variant="contained" size="large" className={styles.Arrow}>
          {""}
        </Button>
      </div>*/}
    </Grid>
  )
})

export default BlogsArea
