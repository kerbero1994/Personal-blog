import * as React from "react"
import Box from "@mui/material/Box"
import { GatsbyImage } from "gatsby-plugin-image"

export default function OutlinedCard({ Profile }) {
  const profileurl = Profile.srcWebp
  return (
    <Box sx={{ minWidth: 275 }}>
      <GatsbyImage
        src={profileurl}
        alt="Profile pic"
        placeholder="blurred"
        layout="fixed"
        width={200}
        height={200}
      />
      <img
        src={profileurl}
        alt="express"
        width="250"
        height="230"
        style={{ borderRadius: "99%" }}
      />
    </Box>
  )
}
