import * as React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import Slide from "@mui/material/Slide"
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
import BookIcon from "@mui/icons-material/Book"
import PersonSearchIcon from "@mui/icons-material/PersonSearch"
import EmailIcon from "@mui/icons-material/Email"
import WorkIcon from "@mui/icons-material/Work"
import Tooltip from "@mui/material/Tooltip"
import { StaticImage } from "gatsby-plugin-image"

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  AppBar: {
    background: "transparent",
    color: "white",
    [breakpoints.down("sm")]: {
      maxWidth: "100% ! important",
    },
  },
  ToolBar: {
    marginLeft: "20%",
    marginRight: "20%",
    [breakpoints.down("sm")]: {
      maxWidth: "100% ! important",
    },
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
  },
  Force: {
    backgroundColor: "transparent",
  },
}))

function HideOnScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function HideAppBar(props) {
  const pages = [
    { name: "About me", icon: <PersonSearchIcon sx={{ color: "white" }} /> },
    { name: "Contact", icon: <EmailIcon sx={{ color: "white" }} /> },
    { name: "Demos", icon: <WorkIcon sx={{ color: "white" }} /> },
    { name: "Blog", icon: <BookIcon sx={{ color: "white" }} /> },
  ]
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const styles = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          color="transparent"
          className={styles.Force}
          sx={{ backgroundColor: "transparent" }}
        >
          <Container
            maxWidth="xl"
            sx={{ backgroundColor: "transparent" }}
            className={styles.Force}
          >
            <Toolbar
              disableGutters
              sx={{ backgroundColor: "transparent" }}
              className={styles.Force}
            >
              <Typography
                variant="h6"
                noWrap
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                className={styles.Title}
              >
                <StaticImage
                  src="../images/Logo1.png"
                  alt="ProfilePic"
                  width={50}
                  height={50}
                  placeholder="blurred"
                  quality={40}
                />
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
                  <MenuIcon sx={{ color: "white" }} />
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
                    <MenuItem key={page.name}>
                      <Button
                        key={page.name}
                        onClick={handleCloseNavMenu}
                        href={`#${page.name}`}
                      >
                        {page.name}
                      </Button>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                <StaticImage
                  src="../images/Logo1.png"
                  alt="Logo"
                  width={45}
                  height={45}
                  placeholder="blurred"
                  quality={40}
                />
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
                  )
                })}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  )
}
