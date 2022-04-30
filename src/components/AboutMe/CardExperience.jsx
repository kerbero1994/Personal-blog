import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import CardExp from "./Experience"
import { useStaticQuery, graphql } from "gatsby"

export default function OutlinedCard() {
  const data = useStaticQuery(graphql`
    query {
      Gatsby: file(relativePath: { eq: "Gatsby.png" }) {
        publicURL
      }
      React: file(relativePath: { eq: "React.png" }) {
        publicURL
      }
      Redux: file(relativePath: { eq: "Redux.jpg" }) {
        publicURL
      }
      Native: file(relativePath: { eq: "Native.png" }) {
        publicURL
      }
    }
  `)
  const exp = [
    {
      title: "React",
      img: `${data.React.publicURL}`,
      years: "5 years",
      color: "rgb(25,33,69)",
      gradiente:
        "radial-gradient(circle, rgba(25,33,69,1) 14%, rgba(21,27,59,1) 84%)",
    },
    {
      title: "React Native",
      img: `${data.Native.publicURL}`,
      years: "3 years",
      color: "#2E4EBF",
      gradiente: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
    },
    {
      title: "Redux",
      img: `${data.Redux.publicURL}`,
      years: "3 years",
      color: "#764ABD",
      gradiente:
        "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
    },
    {
      title: "Gatsbyjs",
      img: `${data.Gatsby.publicURL}`,
      years: "3 years",
      color: "#662C9B",
      gradiente: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
    },
  ]

  return (
    <Box sx={{ minWidth: 275, padding: 0, background: "transparent" }}>
      <div
        style={{
          backgroundImage: "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)",
          height: "100%",
          borderRadius: "16px",
          padding: "0px",
          background: "transparent",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="start"
          alignItems="center"
          spacing={1}
        >
          {exp.map(item => {
            return (
              <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                <CardExp
                  title={item.title}
                  color={item.color}
                  gradiente={item.gradiente}
                  img={item.img}
                  years={item.years}
                />
              </Grid>
            )
          })}
        </Grid>
      </div>
    </Box>
  )
}
