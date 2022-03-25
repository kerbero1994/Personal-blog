import React from "react"
import Box from "@material-ui/core/Box"
import ListItem from "@material-ui/core/ListItem"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  PrincipalText: {
    color: "white",
    fontFamily: "IBM Plex Serif",
    fontWeight: "700",
    textAlign: "center",
    fontSize: "60px",
  },
}))
const GatsbyListItemStyle = () => {
  const styles = useStyles()
  return (
    <Box minWidth={240}>
      <ListItem classes={styles}>Default Item</ListItem>
      <ListItem classes={styles} button>
        Button Item
      </ListItem>
      <ListItem classes={styles} button selected>
        Selected Item
      </ListItem>
    </Box>
  )
}

export default GatsbyListItemStyle
