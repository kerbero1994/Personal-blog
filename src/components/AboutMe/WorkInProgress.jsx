import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        working hard to learn more
      </Typography>
      <Typography variant="h5" component="div">
        <p align="left">
          <a
            href="https://www.w3schools.com/css/"
            target="_blank"
            rel="noreferrer"
            style={{ margin: 4 }}
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css3"
              width="50"
              height="50"
            />
          </a>
          <a
            href="https://www.docker.com/"
            target="_blank"
            rel="noreferrer"
            style={{ margin: 4 }}
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
              alt="docker"
              width="50"
              height="50"
            />
          </a>
          <a
            href="https://expressjs.com"
            target="_blank"
            rel="noreferrer"
            style={{ margin: 4 }}
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt="express"
              width="50"
              height="50"
            />
          </a>
          <a
            href="https://firebase.google.com/"
            target="_blank"
            rel="noreferrer"
            style={{ margin: 4 }}
          >
            <img
              src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
              alt="firebase"
              width="50"
              height="50"
            />
          </a>
          <a
            href="https://www.gatsbyjs.com/"
            target="_blank"
            rel="noreferrer"
            style={{ margin: 4 }}
          >
            <img
              src="https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg"
              alt="gatsby"
              width="50"
              height="50"
            />
          </a>
          <a
            href="https://git-scm.com/"
            target="_blank"
            rel="noreferrer"
            style={{ margin: 4 }}
          >
            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              width="50"
              height="50"
            />
          </a>
          <a
            href="https://graphql.org"
            target="_blank"
            rel="noreferrer"
            style={{ margin: 4 }}
          >
            <img
              src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
              alt="graphql"
              width="50"
              height="50"
            />
          </a>
          <a
            href="https://www.w3.org/html/"
            target="_blank"
            rel="noreferrer"
            style={{ margin: 4 }}
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="html5"
              width="50"
              height="50"
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
            style={{ margin: 4 }}
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="50"
              height="50"
            />
          </a>
          <a
            href="https://www.linux.org/"
            target="_blank"
            rel="noreferrer"
            style={{ margin: 4 }}
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
              alt="linux"
              width="50"
              height="50"
            />
          </a>
          <a
            href="https://nodejs.org"
            target="_blank"
            rel="noreferrer"
            style={{ margin: 4 }}
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width="50"
              height="50"
            />
          </a>
          <a
            href="https://www.postgresql.org"
            target="_blank"
            rel="noreferrer"
            style={{ margin: 4 }}
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
              alt="postgresql"
              width="50"
              height="50"
            />
          </a>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
            style={{ margin: 4 }}
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width="50"
              height="50"
            />
          </a>
          <a
            href="https://reactnative.dev/"
            target="_blank"
            rel="noreferrer"
            style={{ margin: 4 }}
          >
            <img
              src="https://reactnative.dev/img/header_logo.svg"
              alt="reactnative"
              width="50"
              height="50"
            />
          </a>
          <a
            href="https://redux.js.org"
            target="_blank"
            rel="noreferrer"
            style={{ margin: 4 }}
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
              alt="redux"
              width="50"
              height="50"
            />
          </a>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
            style={{ margin: 4 }}
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="typescript"
              width="50"
              height="50"
            />
          </a>
        </p>
      </Typography>
    </CardContent>
  </React.Fragment>
)

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        style={{
          //backgroundImage: "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)",
          background: "transparent",
          minHeight: "100%",
          borderRadius: "16px",
        }}
        variant="outlined"
      >
        {card}
      </Card>
    </Box>
  )
}
