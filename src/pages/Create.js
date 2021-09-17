import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
// import { AcUnitOutlinedIcon } from "@mui/icons-material/Icons";

export default function Notes() {
  return (
    <Container>
      <Typography variant="h6" component="h2" color="textPrimary" gutterBottom>
        Create a New Note
      </Typography>

      <Button
        type="submit"
        color="secondary"
        variant="contained"
        GutterBottom
        onClick={() => console.log("You clicked This Button")}
      >
        Submit
      </Button>

      {/* ICONS */}
      <div>
        {/* <AcUnitOutlinedIcon /> */}
        <Button>Hello</Button>
      </div>
    </Container>
  );
}
