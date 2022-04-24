import * as React from "react"
import Footer from "./Contact/Compose"
import { makeStyles } from "@material-ui/core/styles"
import NavBar from "./NavBarOutSide"
const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  Global: {
    maxWidth: "100%",
    backgroundColor: "#e2ebf0",
  },
  Body: {
    paddingTop: 75,
  },
}))

const Layout = ({ children }) => {
  const styles = useStyles()
  return (
    <div className={styles.Global}>
      <NavBar />
      <main className={styles.Body}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
