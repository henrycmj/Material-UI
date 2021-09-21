import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Notes() {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  // ERROR STATES
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false)
    setDetailsError(false)

    if(title === ''){setTitleError(true)}
    if(details === ''){setDetailsError(true)}

    if (title && details) {
      console.log(title, details);
    }
  };

  return (
    <Container>
      <Typography variant="h6" component="h2" color="textPrimary" gutterBottom>
        Create a New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          color="secondary"
          label="Note Title"
          variant="outlined"
          fullWidth
          required
          className={classes.field}
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          color="secondary"
          label="Details"
          variant="outlined"
          fullWidth
          required
          className={classes.field}
          multiline
          rows={4}
          error={detailsError}
        />

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          GutterBottom
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
