import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActionArea from "@material-ui/core/CardActionArea"
import Grid from "@mui/material/Grid"
import Color from "color"
import Typography from "@material-ui/core/Typography"
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree"
import Tooltip from "@mui/material/Tooltip"

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card: ({ color }) => ({
    //minWidth: 256,
    width: "100%",
    borderRadius: 16,
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: "1rem 1.5rem 1.5rem",
    }
  },
  title: {
    //fontFamily: "Keania One",
    fontSize: "18px",
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  subtitle: {
    fontFamily: "Montserrat",
    color: "#fff",
    opacity: 0.87,
    marginTop: "2rem",
    fontWeight: 500,
    fontSize: 14,
  },
}))

export const BlogCardDemo = React.forwardRef(function BlogCard({
  title,
  img,
  years,
  color,
}) {
  const classes = useStyles({ color: `${color}` })
  const mediaStyles = useFourThreeCardMediaStyles()
  return (
    <Grid sx={{ padding: "6px", width: "100%", margin: 0 }}>
      <Tooltip title={""} placement="bottom">
        <CardActionArea className={classes.actionArea}>
          <Card className={classes.card}>
            <CardMedia classes={mediaStyles} image={img} />
            <CardContent className={classes.content}>
              <Typography className={classes.title} variant={"h4"}>
                {title}
              </Typography>
              <Typography className={classes.subtitle}>{years}</Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Tooltip>
    </Grid>
  )
})

export default BlogCardDemo
