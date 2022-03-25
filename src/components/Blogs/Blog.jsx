import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@mui/material/Grid"
import CardBlog from "./CardBlog"

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  BGSection: {
    //backgroundImage: "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
    padding: "2%",
    // background:
    // "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
    //backgroundBlendMode: "multiply,multiply",
    //backgroundImage: "linear-gradient(to right, #434343 0%, black 100%)",
    backgroundImage: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
    //backgroundImage: "linear-gradient(120deg, #f6d365 0%, #fda085 80%)",
  },
}))

export const BlogsArea = React.memo(function BlogsArea({ posts }) {
  const styles = useStyles()

  return (
    <Grid
      container
      direction="row"
      justifyContent="start"
      alignItems="center"
      className={styles.BGSection}
    >
      {posts.map(post => {
        return <CardBlog info={post} />
      })}
    </Grid>
  )
})

export default BlogsArea
