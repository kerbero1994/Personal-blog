import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import SendIcon from "@mui/icons-material/Send"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"

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
    minHeight: "300px",
    backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
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
    width: "60%",
    margin: "8px",
  },
}))

export const ContactCompose = React.memo(function ContactCompose() {
  const styles = useStyles()

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={styles.Container}
    >
      <Grid item xs={4} sx={{ marginBottom: "16px" }}>
        <div className={styles.titleArea}>
          <h2 className={styles.titleText}>Get in touch</h2>
        </div>
        <div className={styles.EmailArea}>
          <TextField
            label="E-mail"
            defaultValue=" "
            className={styles.TextField}
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
          />
        </div>

        <div className={styles.titleArea}>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </div>
      </Grid>
    </Grid>
  )
})

export default ContactCompose
