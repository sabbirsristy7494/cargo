import React from "react";

import { TextField, makeStyles, InputLabel } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  textField: {
    width: "100px",
    marginBottom: "30px",
    backgroundColor: "#FFFFFF",
    marginRight: 30
  },
  notchedOutline: {
    borderWidth: "2px",
    borderColor: "#BCE0FD !important"
  },
  inputlabel: {
    color: "#2699FB",
    fontWeight: "regular",
    fontSize: 14
  }
}));

export default function SubText(props) {
  const {
    label,
    type,
    name,
    id,
    variant,
    margin,
    autoComplete,
    value,
    onChange,
    width,
    height
  } = props;

  const classes = useStyles();

  return (
    <div>
      <InputLabel className={classes.inputlabel}>{label}</InputLabel>
      <TextField
        InputProps={{
          classes: {
            notchedOutline: classes.notchedOutline
          }
        }}
        className={classes.textField}
        id={id}
        margin={margin}
        variant={variant}
        type={type}
        name={name}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        style={{ width: width, height: height }}
      />
    </div>
  );
}
