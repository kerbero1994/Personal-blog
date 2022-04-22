import React from "react"
import cx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import TextInfoContent from "@mui-treasury/components/content/textInfo"
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog"
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over"
import { Link } from "gatsby"
import Grid from "@mui/material/Grid"
import moment from "moment"

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    maxWidth: "28vw",
    marginLeft: "auto",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2),
    },
  },
  media: {
    width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: "48%",
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    position: "relative",
    [breakpoints.up("md")]: {
      width: "100%",
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: "translateX(-8px)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      //backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
}))

export const BlogCardDemo = React.forwardRef(function BlogCard({ info }, ref) {
  const styles = useStyles()
  const blog = info.node.childMarkdownRemark
  const { button: buttonStyles, ...contentStyles } =
    useBlogTextInfoContentStyles()
  const shadowStyles = useOverShadowStyles()
  return (
    <Grid item xs={4} sx={{ marginBottom: "16px" }} ref={ref}>
      <Card className={cx(styles.root, shadowStyles.root)}>
        <CardMedia
          className={styles.media}
          image={blog.frontmatter.thumbnail}
        />
        <CardContent>
          <TextInfoContent
            classes={contentStyles}
            overline={moment(blog.frontmatter.date).format("lll")}
            heading={blog.frontmatter.title}
            body={blog.excerpt}
          />
          <Link to={blog.fields.slug}>
            <Button className={buttonStyles}>Read more</Button>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  )
})

export default BlogCardDemo
