import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./css/ProfilePic.css"

export default function OutlinedCard({ Profile }) {
  return (
    <StaticImage
      src="../../images/profile-pic.png"
      alt="ProfilePic"
      width={250}
      height={250}
      placeholder="blurred"
      quality={40}
      className="Picture"
    />
  )
}
