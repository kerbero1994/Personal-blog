import * as React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import WorkIcon from "@mui/icons-material/Work"
import Tooltip from "@mui/material/Tooltip"
import { StaticQuery, graphql } from "gatsby"
import BookIcon from "@mui/icons-material/Book"
import CollectionsIcon from "@mui/icons-material/Collections"
import HomeIcon from "@mui/icons-material/Home"
import { Link } from "gatsby"
import "@fontsource/ibm-plex-serif"

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  AppBar: {
    color: "white",
  },
  ToolBar: {
    marginLeft: "20%",
    marginRight: "20%",
  },
  Title: {
    color: "white",
    fontFamily: "IBM Plex Serif",
    fontWeight: "700",
    textAlign: "center",
  },
  Menu: { flexDirection: "row-reverse" },
  Logo: {
    maxWidth: "100%",
    maxHeight: "65px",
    borderRadius: "100%",
  },
  MenuElement: {
    textDecoration: "none",
    color: "#000",
    display: "flex",
    justifyContent: "center",
  },
  IconClass: {
    color: "white !important",
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.5)",
    },
  },
}))

export default function HideAppBar(props) {
  const styles = useStyles()
  const pages = [
    {
      name: "Resources",
      icon: <CollectionsIcon className={styles.IconClass} />,
      url: "/Resources",
    },
    {
      name: "Demos",
      icon: <WorkIcon className={styles.IconClass} />,
      url: "/Demos",
    },
    {
      name: "Blog",
      icon: <BookIcon className={styles.IconClass} />,
      url: "/Blogs",
    },
    {
      name: "Home",
      icon: <HomeIcon className={styles.IconClass} />,
      url: "/",
    },
  ]
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <StaticQuery
      query={graphql`
        query Header {
          site {
            siteMetadata {
              title
            }
          }
          Logo: file(relativePath: { eq: "profile-pic.png" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
            extension
            publicURL
          }
          BackgroundNavBar: file(relativePath: { eq: "NavBar.svg" }) {
            extension
            publicURL
          }
        }
      `}
      render={data => (
        <React.Fragment>
          {console.log("NavQuery", data)}
          <CssBaseline />
          <AppBar
            style={{
              backgroundImage: `url(${data.BackgroundNavBar.publicURL})`,
            }}
          >
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                  className={styles.Title}
                >
                  <Link to={"/"} className={styles.MenuElement}>
                    <img
                      src={data.Logo.publicURL}
                      alt="Logo"
                      className={styles.Logo}
                    ></img>{" "}
                  </Link>
                </Typography>

                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {pages.map(page => (
                      <Link to={page.url} className={styles.MenuElement}>
                        <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                          <Typography textAlign="center">
                            {page.name}
                          </Typography>
                        </MenuItem>
                      </Link>
                    ))}
                  </Menu>
                </Box>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                >
                  <Link to={"/"} className={styles.MenuElement}>
                    <img
                      src={data.Logo.publicURL}
                      alt="Logo1"
                      className={styles.Logo}
                    ></img>{" "}
                  </Link>
                </Typography>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    flexDirection: "row-reverse",
                  }}
                >
                  {pages.map(page => {
                    return (
                      <Link to={page.url} className={styles.MenuElement}>
                        <Tooltip title={page.name} placement="bottom">
                          <Button
                            key={page.name}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: "white" }}
                            href={`#${page.name}`}
                          >
                            {page.icon}
                          </Button>
                        </Tooltip>
                      </Link>
                    )
                  })}
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </React.Fragment>
      )}
    />
  )
}
