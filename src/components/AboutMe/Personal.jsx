import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { SocialProvider, SocialLink } from "@mui-treasury/components/socialLink"
import { useRoundSocialLinkStyles } from "@mui-treasury/styles/socialLink/round"

const card = (
  <React.Fragment>
    <CardContent>
      <Typography
        sx={{ fontSize: 24, fontWeight: 700 }}
        gutterBottom
        color="white"
        align="center"
      >
        FrontEnd Developer Movil Developer UX/UI
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="white">
        Hello, I'm Eduardo, a front end developer looking for new challenges and
        opportunities, I currently work as a consultant and freelancer for
        multiple organizations throughout Mexico, mainly versed in web
        technologies and the creation of hybrid applications for Android and iOS
        systems.
        <br />
        {
          "<The most important thing for a design is the balance between time and utility>"
        }
        <br />
      </Typography>
    </CardContent>
    <CardActions
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
      }}
    >
      <SocialProvider useStyles={useRoundSocialLinkStyles}>
        <SocialLink brand={"Envelope"} href={"mailto:eduglezzvl@gmail.com"} />
        <SocialLink brand={"Twitter"} href={"https://twitter.com/Eduglezzvl"} />
        <SocialLink
          brand={"Instagram"}
          href={"https://www.instagram.com/edu.glez.zvl/"}
        />
        <SocialLink
          brand={"LinkedIn"}
          href={"https://www.linkedin.com/in/eduglezzvl94/"}
        />
        <SocialLink
          brand={"GithubCircle"}
          href={"https://github.com/kerbero1994"}
        />
      </SocialProvider>
    </CardActions>
  </React.Fragment>
)

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(102,0,255,1) 8%, rgba(0,17,34,1) 44%)",
          height: "100%",
          borderRadius: "16px",
        }}
        variant="outlined"
      >
        {card}
      </Card>
    </Box>
  )
}
