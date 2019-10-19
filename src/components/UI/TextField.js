import React from "react";

import {
  TextField,
  makeStyles,
  InputLabel,
  InputAdornment
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  textField: {
    width: "400px",
    marginBottom: "30px",
    backgroundColor: "#FFFFFF"
  },
  notchedOutline: {
    borderWidth: "2px",
    borderColor: "#BCE0FD !important"
    // borderRadius: "10px"
  },
  inputlabel: {
    color: "#2699FB",
    fontWeight: "bold"
  }
}));

export default function Text(props) {
  const {
    label,
    placeholder,
    type,
    name,
    id,
    variant,
    margin,
    autoComplete,
    value,
    onChange,
    width,
    height,
    disable,
    min,
    max,
    select,
    optionalLabel,
    inputAdorment,
    multiline,
    step,
    rows
  } = props;

  // const helper = (
  //   <Typography style={{ fontWeight: "400", fontSize: 12 }}>
  //     {helperText}
  //   </Typography>
  // );
  const classes = useStyles();

  let inputField;

  if (select) {
    inputField = (
      <TextField
        InputProps={{
          classes: {
            notchedOutline: classes.notchedOutline
          }
        }}
        select
        placeholder={placeholder}
        className={classes.textField}
        id={id}
        margin={margin}
        variant={variant}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={{ width: width, height: height }}
        // helperText={helper}
      >
        {props.children}
      </TextField>
    );
  } else if (multiline) {
    inputField = (
      <TextField
        InputProps={{
          classes: {
            notchedOutline: classes.notchedOutline
          }
        }}
        multiline
        placeholder={placeholder}
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
        rows={rows}
        // helperText={helper}
      />
    );
  } else {
    inputField = (
      <TextField
        InputProps={{
          classes: {
            notchedOutline: classes.notchedOutline
          },
          inputProps: {
            min: min,
            max: max,
            step: step
          },
          endAdornment: (
            <InputAdornment position="end">{inputAdorment}</InputAdornment>
          )
        }}
        placeholder={placeholder}
        className={classes.textField}
        id={id}
        margin={margin}
        variant={variant}
        type={type}
        name={name}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        disabled={disable}
        style={{ width: width, height: height }}
      />
    );
  }

  return (
    <div>
      <InputLabel className={classes.inputlabel}>
        {label}{" "}
        <span style={{ fontWeight: "400" }}>
          {optionalLabel ? `(${optionalLabel})` : null}
        </span>
      </InputLabel>
      {inputField}
    </div>
  );
}
