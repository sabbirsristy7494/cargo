import React, { useState } from "react";
import { Grid, Container, Typography, MenuItem } from "@material-ui/core";
import {} from "jsbarcode";

import DropZone from "../UI/DropZone";
import CustomText from "../UI/TextField";
import CustomButton from "../UI/Button";

import SaveIcon from "@material-ui/icons/Save";
import Cancel from "@material-ui/icons/Cancel";
import Submit from "@material-ui/icons/Done";

import { services } from "../../data/itemSelectData";

import useStyles from "./ItemStyles";

const options = {
  width: 2,
  height: 100,
  format: "CODE128",
  displayValue: true,
  fontOptions: "",
  font: "monospace",
  textAlign: "center",
  textPosition: "bottom",
  textMargin: 2,
  fontSize: 20,
  background: "#ffffff",
  lineColor: "#000000",
  margin: 10,
  marginTop: undefined,
  marginBottom: undefined,
  marginLeft: undefined,
  marginRight: undefined
};

const LocationDetails = props => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container className={classes.gridContainer}>
        <Grid item xs className={classes.gridItems}>
          <CustomText
            label="Consignment ID"
            placeholder="System Generated"
            type="text"
            // value={values.countItem}
            // onChange={handleChange("countItem")}
            name="consignment"
            id="outlined-consignmentId"
            variant="outlined"
            margin="dense"
            disable
          />

          <CustomText
            label="Reference ID"
            placeholder="Enter Reference ID"
            type="text"
            // value={values.countItem}
            // onChange={handleChange("countItem")}
            name="reference"
            id="outlined-referenceId"
            variant="outlined"
            margin="dense"
          />

          <CustomText
            select
            id="outlined-service-select"
            label="Service Type"
            margin="dense"
            variant="outlined"
            // value={values.items}
            // onChange={handleChange("items")}
            helperText="Select your country"
          >
            {services.map(option => (
              <MenuItem key={option.id} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </CustomText>

          <div style={{ width: 400 }}>
            <Typography style={{ color: "#2699FB", fontWeight: "bold" }}>
              Documents
            </Typography>
            <DropZone />
          </div>
        </Grid>
        <Grid item xs className={classes.gridItems}>
          <div style={{ marginTop: 20 }}>
            <CustomText
              label="Barcode"
              placeholder="Barcode"
              type="text"
              // value={values.countItem}
              // onChange={handleChange("countItem")}
              name="connote"
              id="outlined-connote"
              variant="outlined"
              margin="dense"
              multiline
              rows={7}
            />
          </div>
          <CustomText
            label="Connote"
            placeholder="System Generated"
            type="text"
            // value={values.countItem}
            // onChange={handleChange("countItem")}
            name="connote"
            id="outlined-connote"
            variant="outlined"
            margin="dense"
            disable
          />

          <CustomText
            label="Consignment Date"
            type="datetime-local"
            // value={values.countItem}
            // onChange={handleChange("countItem")}
            name="pickupName"
            id="datetime-local"
            variant="outlined"
            margin="dense"
          />

          <CustomText
            label="URL"
            placeholder="Enter url"
            type="url"
            // value={values.countItem}
            // onChange={handleChange("countItem")}
            name="url"
            id="outlined-url"
            variant="outlined"
            margin="dense"
          />

          <CustomText
            label="Confirmation Email"
            placeholder="Enter the confirmation email"
            type="email"
            // value={values.countItem}
            // onChange={handleChange("countItem")}
            name="url"
            id="outlined-url"
            variant="outlined"
            margin="dense"
          />
        </Grid>
      </Grid>
      <div className={classes.buttonGroup}>
        <CustomButton buttonStyle={classes.buttonCancel}>
          <Cancel className={classes.icon} />
        </CustomButton>
        <CustomButton buttonStyle={classes.buttonSave}>
          <SaveIcon className={classes.icon} />
        </CustomButton>
        <CustomButton buttonStyle={classes.buttonSubmit}>
          <Submit className={classes.icon} />
        </CustomButton>
      </div>
    </Container>
  );
};

export default LocationDetails;
