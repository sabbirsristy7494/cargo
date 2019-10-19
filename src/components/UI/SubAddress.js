import React from "react";

import CustomSubText from "./SubTextField";

import { Grid, Container, Typography, MenuItem } from "@material-ui/core";

const SubAddressText = props => {
  const { label1, label2, label3, name1, name2, name3, id1, id2, id3 } = props;

  return (
    <Grid
      style={{
        display: "flex",
        flexDirection: "row",
        // justifyContent: "space-around",
        paddingLeft: 35
      }}
    >
      <CustomSubText
        label={label1}
        placeholder=""
        type="text"
        // value={values.countItem}
        // onChange={handleChange("countItem")}
        name={name1}
        id={id1}
        variant="outlined"
        margin="dense"
      />

      <CustomSubText
        label={label2}
        placeholder=""
        type="text"
        // value={values.countItem}
        // onChange={handleChange("countItem")}
        name={name2}
        id={id2}
        variant="outlined"
        margin="dense"
      />

      <CustomSubText
        label={label3}
        placeholder=""
        type="text"
        // value={values.countItem}
        // onChange={handleChange("countItem")}
        name={name3}
        id={id3}
        variant="outlined"
        margin="dense"
      />
    </Grid>
  );
};

export default SubAddressText;
