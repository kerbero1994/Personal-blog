import * as React from "react"
import Footer from "./Contact/Compose"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  Global: {
    maxWidth: "100%",
    backgroundColor: "#e2ebf0",
  },
}))

const Layout = ({ children }) => {
  const styles = useStyles()
  return (
    <div className={styles.Global}>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
