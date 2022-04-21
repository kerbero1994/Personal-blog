import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Color from "color"

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  LogoIcon: {
    width: 45,
    height: 45,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
      borderRadius: "20%",
      boxShadow: `0 6px 12px 0 ${Color("#fff")
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  },
}))

const LogoList = [
  {
    url: "https://www.w3schools.com/css/",
    Icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    alt: "css",
  },
  {
    url: "https://www.docker.com/",
    Icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
    alt: "docker",
  },
  {
    url: "https://expressjs.com",
    Icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    alt: "express",
  },
  {
    url: "https://firebase.google.com/",
    Icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    alt: "firebase",
  },
  {
    url: "https://www.gatsbyjs.com/",
    Icon: "https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg",
    alt: "GatsbyJs",
  },
  {
    url: "https://git-scm.com/",
    Icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    alt: "Git",
  },
  {
    url: "https://graphql.org",
    Icon: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
    alt: "graphql",
  },
  {
    url: "https://www.w3.org/html/",
    Icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    alt: "html5",
  },
  {
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    Icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    alt: "javascript",
  },
  {
    url: "https://www.linux.org/",
    Icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
    alt: "linux",
  },
  {
    url: "https://nodejs.org",
    Icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    alt: "nodejs",
  },
  {
    url: "https://www.postgresql.org",
    Icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
    alt: "postgresql",
  },
  {
    url: "https://reactjs.org/",
    Icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    alt: "React",
  },
  {
    url: "https://reactnative.dev/",
    Icon: "https://reactnative.dev/img/header_logo.svg",
    alt: "reactnative",
  },
  {
    url: "https://redux.js.org",
    Icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    alt: "redux",
  },
  {
    url: "https://www.typescriptlang.org/",
    Icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    alt: "typescript",
  },
]

export default function OutlinedCard() {
  const styles = useStyles()
  return (
    <Card
      sx={{
        background: "rgb(102,0,255)",
        backgroundImage:
          "radial-gradient(circle, rgba(102,0,255,1) 8%, rgba(0,17,34,1) 94%)",
        minWidth: 275,
        minHeight: "100%",
        borderRadius: "16px",
      }}
      variant="outlined"
    >
      <CardContent>
        <Typography
          sx={{ width: "100%", fontSize: 24 }}
          gutterBottom
          color="white"
          align="center"
        >
          working hard to learn more
        </Typography>
        <Typography variant="h5" component="div">
          <p align="left">
            {LogoList.map(Logo => {
              return (
                <a
                  href={Logo.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ margin: 4 }}
                >
                  <img
                    src={Logo.Icon}
                    alt={Logo.alt}
                    className={styles.LogoIcon}
                  />
                </a>
              )
            })}
          </p>
        </Typography>
      </CardContent>
    </Card>
  )
}
