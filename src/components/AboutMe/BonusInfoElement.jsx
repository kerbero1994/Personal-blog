import React from "react"
import Avatar from "@material-ui/core/Avatar"
import { Row, Column, Item } from "@mui-treasury/components/flex"
import {
  Info,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
} from "@mui-treasury/components/info"
import { useDynamicAvatarStyles } from "@mui-treasury/styles/avatar/dynamic"
import { useD01InfoStyles } from "@mui-treasury/styles/info/d01"
import { makeStyles } from "@material-ui/core/styles"
import Color from "color"
import moment from "moment"
const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: "0.2s",
    marginBottom: 2,
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card: ({ color }) => ({
    //minWidth: 256,
    width: "100%",
    backgroundColor: color,
    padding: "1rem 1.5rem 1.5rem",
    borderRadius: 16,
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
}))
export default React.memo(function DarkRapListItem({ info }) {
  const resource = info.node.childMarkdownRemark
  console.log(info)
  const classes = useStyles({ color: `${resource.frontmatter.color}` })
  const avatarStyles = useDynamicAvatarStyles({ size: 70 })
  return (
    <Column gap={2} className={classes.actionArea}>
      <a
        href={resource.frontmatter.Url}
        style={{ cursor: "pointer", textDecoration: "none" }}
      >
        <Row className={classes.card}>
          <Item>
            <Avatar
              variant={"rounded"}
              classes={avatarStyles}
              src={resource.frontmatter.thumbnail}
            />
          </Item>
          <Info useStyles={useD01InfoStyles}>
            <InfoCaption>
              {moment(resource.frontmatter.date).format("lll")}
            </InfoCaption>
            <InfoTitle>{resource.frontmatter.title}</InfoTitle>
            <InfoSubtitle>{resource.frontmatter.Resume}</InfoSubtitle>
          </Info>
        </Row>
      </a>
    </Column>
  )
})
