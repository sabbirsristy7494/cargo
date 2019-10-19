import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { red, blue } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const RedRadio = withStyles({
  root: {
    color: red[400],
    "&$checked": {
      color: red[600]
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

const BlueRadio = withStyles({
  root: {
    color: blue[400],
    "&$checked": {
      color: blue[600]
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState("no");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="good-info"
          name="dangerousGood"
          value={value}
          onChange={handleChange}
        >
          <span>
            <FormControlLabel
              style={{ color: "#c7163c" }}
              value="yes"
              control={<RedRadio />}
              label="Yes"
              labelPlacement="start"
            />
            <FormControlLabel
              style={{ color: "#2699FB" }}
              value="no"
              control={<BlueRadio />}
              label="No"
              labelPlacement="start"
            />
          </span>
        </RadioGroup>
      </FormControl>
    </div>
  );
}
