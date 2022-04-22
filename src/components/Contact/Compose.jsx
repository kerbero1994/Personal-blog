import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import SendIcon from "@mui/icons-material/Send"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import { useForm, ValidationError } from "@formspree/react"
import { StaticQuery, graphql } from "gatsby"

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  titleArea: {
    width: "100%",
    minHeight: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  Container: {
    width: "100%",
    //minHeight: "200px",
    padding: 2,
    backgroundPosition: "center",
  },
  TextArea: {
    width: "100%",
  },
  TextAreaContainer: {
    marginTop: "8px",
  },
  EmailArea: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  TextField: {
    width: "80%",
    margin: "8px",
    color: "white",
  },
  CTA: {
    color: "white",
    marginTop: "16px !important",
    backgroundImage:
      "linear-gradient(to right, #FF8008 0%, #FFC837  51%, #FF8008  100%)",
    "&:hover": {
      backgroundPosition: "right center",
      color: "#fff",
      textDecoration: "none",
    },
    width: "35%",
    borderRadius: "35px !important",
    display: "block",
    transition: "1s  !important",
    backgroundSize: "200% auto",
    fontWeight: 700,
  },
  titleText: {
    color: "white",
  },
}))

export const ContactCompose = React.memo(function ContactCompose() {
  const styles = useStyles()
  const [state, handleSubmit] = useForm("myyonrdn")
  if (state.succeeded) {
    return (
      <p>
        Thank you for your interest as soon as possible I will answer your
        message
      </p>
    )
  }
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              title
            }
          }
          BackgroundFooter: file(relativePath: { eq: "Footer.svg" }) {
            extension
            publicURL
          }
        }
      `}
      render={data => (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={styles.Container}
          style={{ backgroundImage: `url(${data.BackgroundFooter.publicURL})` }}
        >
          <Grid item xs={4} sx={{ marginBottom: "16px" }}></Grid>
          <Grid item xs={4} sx={{ marginBottom: "16px" }}></Grid>
          <Grid item xs={4} sx={{ marginBottom: "16px" }}>
            <form onSubmit={handleSubmit} className={styles.FormContainer}>
              <div className={styles.titleArea}>
                <h2 className={styles.titleText}>Quick E-mail</h2>
              </div>
              <div className={styles.EmailArea}>
                <TextField
                  label="E-mail"
                  defaultValue=" "
                  id="email"
                  type="email"
                  name="email"
                  className={styles.TextField}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className={styles.TextAreaContainer}>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  //value={val}
                  //onChange={handleChange}
                  variant="outlined"
                  className={styles.TextArea}
                  id="message"
                  name="message"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <div className={styles.titleArea}>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  type="submit"
                  size="large"
                  className={styles.CTA}
                  disabled={state.submitting}
                >
                  Send
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
      )}
    />
  )
})

export default ContactCompose
