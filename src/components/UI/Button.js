import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";

// const useStyles = makeStyles(theme => ({
//   // button: {
//   //   marginLeft: 30
//   // }
// }));

const CustomButton = props => {
  return (
    <Button variant="contained" size="large" className={props.buttonStyle}>
      {props.children}
    </Button>
  );
};

export default CustomButton;
