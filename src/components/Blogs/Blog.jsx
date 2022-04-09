import React, { useState, useRef } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@mui/material/Grid"
import CardBlog from "./CardBlog"
import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"
import Collapse from "@mui/material/Collapse"

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  BGSection: {
    //backgroundImage: "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
    padding: "2%",
    transition: "2s",
    // background:
    // "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
    //backgroundBlendMode: "multiply,multiply",
    //backgroundImage: "linear-gradient(to right, #434343 0%, black 100%)",
    //backgroundImage: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
    //backgroundImage: "linear-gradient(120deg, #f6d365 0%, #fda085 80%)",
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
}))
const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundImage:
    "linear-gradient(to right, #FF8008 0%, #FFC837  51%, #FF8008  100%)",
  "&:hover": {
    backgroundPosition: "right center",
    color: "#fff",
    textDecoration: "none",
  },
  width: "35%",
  borderRadius: "35px",
  bottom: "-55px",
  display: "block",
  transition: "0.5s",
  backgroundSize: "200% auto",
}))

export const BlogsArea = React.memo(function BlogsArea({ posts }) {
  const styles = useStyles()
  const Init = posts.slice(0, 3)
  const Rest = posts.slice(3, posts.length)
  console.log(posts.slice(2, -1))
  const [Fade, setFade] = useState(false)
  const [CollapseState, setCollapseState] = useState(false)
  const containerRef = useRef(null)

  const Asing = () => {
    setCollapseState(true)
  }
  return (
    <Grid
      container
      direction="row"
      justifyContent="start"
      alignItems="center"
      className={styles.BGSection}
      ref={containerRef}
    >
      {Init.map(post => {
        return <CardBlog info={post} />
      })}

      <Collapse in={CollapseState} className={styles.Full}>
        {Rest.map(post => {
          return <CardBlog info={post} />
        })}
      </Collapse>

      <div className={styles.ButtonDiv}>
        <ColorButton
          variant="contained"
          size="large"
          onClick={() => {
            setFade(true)
            setTimeout(Asing, 400)
          }}
          className={Fade ? styles.buttonFadeOut : styles.button}
        >
          Show More
        </ColorButton>
      </div>
    </Grid>
  )
})

export default BlogsArea
