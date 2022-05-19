import React from "react"
import Grid from "@mui/material/Grid"
import "./css/index.css"
import { useStaticQuery, graphql } from "gatsby"
import Card from "./SkillCard"

export const SkillsArea = React.memo(function SkillsArea() {
  const data = useStaticQuery(graphql`
    query Skills {
      SkillsList: allFile(
        filter: { sourceInstanceName: { eq: "skills" } }
        sort: {
          fields: [childrenMarkdownRemark___frontmatter___date]
          order: DESC
        }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                Url
                Resume
                date
                Icon
                MainSkill
                title
                color
              }
            }
          }
        }
      }
    }
  `)
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
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={"HERO55Background"}
      sx={{
        paddingTop: { xs: "32px", sm: "32px" },
      }}
    >
      <Grid
        xs={12}
        sm={12}
        md={6}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <div className={"TitleSkills"}>
          <h4 className={"SkillsTitle"}>Core skills</h4>
        </div>
        {data.SkillsList?.edges &&
          data.SkillsList?.edges.length > 0 &&
          data.SkillsList?.edges.map(Skill => {
            return (
              <Grid item sx={4}>
                <Card Element={Skill} />
              </Grid>
            )
          })}
      </Grid>
      <Grid
        xs={0}
        sm={12}
        md={6}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={"SkillsContainer"}
      >
        <div className={"TitleSkills"}>
          <h4 className={"SkillsTitle"}>All skills</h4>
        </div>
        {LogoList.map(Logo => {
          return (
            <Grid
              sx={{
                background: "rgba( 255, 255, 255, 0.3 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 20px )",
                borderRadius: "10px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
                margin: "4px",
                padding: "4px",
                transition: "all 0.9s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <a
                href={Logo.url}
                target="_blank"
                rel="noreferrer"
                style={{ margin: 4 }}
              >
                <img
                  src={Logo.Icon}
                  alt={Logo.alt}
                  width={90}
                  height={90}
                  className={"SecondarySkills"}
                />
              </a>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
})

export default SkillsArea
