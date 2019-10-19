import React, { useState } from "react";
import { Grid, Container, Typography, MenuItem } from "@material-ui/core";
import Home from "@material-ui/icons/Home";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/dist/style.css";

import CustomText from "../UI/TextField";
import RadioButtonsGroup from "../UI/RadioButton";
import CustomButton from "../UI/Button";
import SubAddressText from "../UI/SubAddress";
import Map from "../UI/Map";

import SaveIcon from "@material-ui/icons/Save";
import Cancel from "@material-ui/icons/Cancel";

import { countries } from "../../data/itemSelectData";

import useStyles from "./ItemStyles";

const LocationDetails = props => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container className={classes.gridContainer}>
        <Grid item xs className={classes.gridItems}>
          <CustomText
            label="Name"
            placeholder="Enter a name"
            type="text"
            // value={values.countItem}
            // onChange={handleChange("countItem")}
            name="pickupName"
            id="outlined-pickupName"
            variant="outlined"
            margin="dense"
          />

          <CustomText
            select
            id="outlined-country-select"
            label="Country"
            margin="dense"
            variant="outlined"
            // value={values.items}
            // onChange={handleChange("items")}
            helperText="Select your country"
          >
            {countries.map(option => (
              <MenuItem key={option.id} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </CustomText>

          <CustomText
            label="Address"
            placeholder="Enter Your Address"
            type="text"
            // value={values.charge}
            // onChange={handleChange("charge")}
            name="charge"
            id="outlined-charge"
            variant="outlined"
            margin="dense"
            inputAdorment={<Home color="action" />}
          />

          <SubAddressText
            label1="Lot/Unit"
            label2="Road"
            label3="Road Type"
            name1="lot"
            name2="road"
            name3="road_type"
            id1="outlined-lot"
            id2="outlined-road"
            id3="outlined-road-type"
          />

          <SubAddressText
            label1="Suburb"
            label2="State"
            label3="Post"
            name1="suburb"
            name2="state"
            name3="post"
            id1="outlined-suburb"
            id2="outlined-state"
            id3="outlined-post"
          />

          <div>
            <CustomButton buttonStyle={classes.buttonSave}>
              <Typography
                style={{ color: "white", fontSize: 12, fontWeight: "bold" }}
              >
                Save Address
              </Typography>
            </CustomButton>
          </div>

          <div
            style={{
              width: 400,
              marginTop: 30,
              marginBottom: 30
            }}
          >
            <PhoneInput
              defaultCountry={"us"}
              inputExtraProps={{
                name: "phone",
                required: true,
                autoFocus: true
              }}
            />
          </div>

          <div style={{ marginBottom: 25 }}>
            <CustomText
              label="Email"
              placeholder="Enter an email"
              type="email"
              // value={values.countItem}
              // onChange={handleChange("countItem")}
              name="pickupEmail"
              id="outlined-pickupEmail"
              variant="outlined"
              margin="dense"
            />
          </div>
        </Grid>

        <Grid item xs className={classes.gridItems}>
          <CustomText
            label={props.pickup ? "Ready On" : "Estimated Delivery"}
            type="datetime-local"
            // value={values.countItem}
            // onChange={handleChange("countItem")}
            name="pickupName"
            id="datetime-local"
            variant="outlined"
            margin="dense"
          />

          <div className={classes.timeGrid}>
            <CustomText
              label="Open Time"
              id="open_time"
              type="time"
              width={200}
              margin="dense"
              variant="outlined"
            />
            <CustomText
              label="Closing Time"
              id="close_time"
              type="time"
              width={200}
              margin="dense"
              variant="outlined"
            />
          </div>

          <CustomText
            id="outlined-textarea"
            label="Special Instruction"
            margin="dense"
            type="text"
            // value={values.description}
            // onChange={handleChange("description")}
            variant="outlined"
            placeholder="Enter the instruction within 200 Charachters"
            multiline
            rows={9}
          />

          <div className={classes.radio}>
            <Typography
              style={{
                color: "#2699FB",
                fontWeight: "bold",
                marginRight: 60
              }}
            >
              Do you need forklift onsite?
            </Typography>
            <RadioButtonsGroup />
          </div>

          <div style={{ width: "400px", height: "210px", marginTop: 30 }}>
            <Map
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={<div style={{ height: "100%" }} />}
              mapElement={<div style={{ height: "100%" }} />}
            />
          </div>
        </Grid>
      </Grid>
      <div className={classes.buttonGroup}>
        <CustomButton buttonStyle={classes.buttonCancel}>
          <Cancel className={classes.icon} />
        </CustomButton>
        <CustomButton buttonStyle={classes.buttonSave}>
          <SaveIcon className={classes.icon} />
        </CustomButton>
      </div>
    </Container>
  );
};

export default LocationDetails;
