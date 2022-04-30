import * as React from "react"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  img: {
    [breakpoints.down("lg")]: {
      width: "220px",
      height: "220px",
    },
    [breakpoints.down("sm")]: {
      width: "250px",
      height: "250px",
    },
  },
}))

export default function OutlinedCard({ Profile }) {
  const profileurl = Profile.srcWebp
  const styles = useStyles()
  return (
    <img
      src={profileurl}
      alt="ProfilePic"
      className={styles.img}
      style={{ width: "250px", height: "250px", borderRadius: "100%" }}
    />
  )
}
