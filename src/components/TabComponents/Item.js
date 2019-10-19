import React, { useState } from "react";
import MaterialUIForm from "react-material-ui-form";

import CustomText from "../UI/TextField";
import RadioButtonsGroup from "../UI/RadioButton";
import DropZone from "../UI/DropZone";
import CustomButton from "../UI/Button";

import { Grid, Container, Typography, MenuItem } from "@material-ui/core";

import ItemTable from "../UI/Table";

import SaveIcon from "@material-ui/icons/Save";
import Cancel from "@material-ui/icons/Cancel";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";

import columns from "../../data/TableHead";
import data from "../../data/ItemData";
import { items, commodities } from "../../data/itemSelectData";

import useStyles from "./ItemStyles";

const tableTitle = (
  <Typography
    style={{
      fontSize: 18,
      fontFamily: "roboto",
      color: "#186358",
      fontWeight: "bold"
    }}
  >
    CART
  </Typography>
);

const SendingItems = props => {
  const classes = useStyles();

  const [values, setValues] = useState({
    countItem: "",
    items: "",
    commodities: "",
    charge: "",
    length: "",
    width: "",
    height: "",
    volume: "",
    weight: "",
    description: ""
  });

  const handleChange = name => event => {
    if (name === "items" || name === "commodities" || name === "description") {
      setValues({ ...values, [name]: event.target.value });
    } else {
      setValues({ ...values, [name]: event });
    }
  };

  const handleSubmit = data => {
    console.log(data);
  };
  return (
    <Container>
      <MaterialUIForm onSubmit={handleSubmit}>
        <Grid container className={classes.gridContainer}>
          <Grid item xs className={classes.gridItems}>
            <CustomText
              label="No of Items"
              placeholder="Select Number of Items"
              type="number"
              value={values.countItem}
              onChange={handleChange("countItem")}
              name="countItems"
              id="outlined-countItem"
              variant="outlined"
              margin="dense"
              min={0}
              // max={100}
            />
            <CustomText
              select
              id="outlined-item-select"
              label="Items"
              margin="dense"
              variant="outlined"
              value={values.items}
              onChange={handleChange("items")}
              helperText="Select your items"
            >
              {items.map(option => (
                <MenuItem key={option.id} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </CustomText>

            <CustomText
              label="Commodities"
              id="outlined-commodities-select"
              value={values.commodities}
              onChange={handleChange("commodities")}
              helperText="Select your commodities"
              optionalLabel="Optional"
              margin="dense"
              variant="outlined"
              select
            >
              {commodities.map(option => (
                <MenuItem key={option.id} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </CustomText>

            <CustomText
              label="Chargeable"
              placeholder="Enter the amount"
              type="text"
              value={values.charge}
              onChange={handleChange("charge")}
              name="charge"
              id="outlined-charge"
              variant="outlined"
              margin="dense"
              inputAdorment="$"
            />

            <div className={classes.radio}>
              <Typography
                style={{
                  color: "#2699FB",
                  fontWeight: "bold",
                  marginRight: 70
                }}
              >
                Is this a dangerous good?
              </Typography>
              <RadioButtonsGroup />
            </div>

            <div style={{ width: 400, marginTop: 30, marginBottom: 30 }}>
              <Typography style={{ color: "#2699FB", fontWeight: "bold" }}>
                Documents
              </Typography>
              <DropZone />
            </div>
          </Grid>

          <Grid item xs className={classes.gridItems}>
            <CustomText
              label="Length"
              placeholder="Enter the length of the product"
              type="number"
              value={values.length}
              onChange={handleChange("length")}
              name="length"
              id="outlined-length"
              variant="outlined"
              margin="dense"
              min={0}
              inputAdorment="cm"
            />
            <CustomText
              label="Width"
              placeholder="Enter the Width of the product"
              type="number"
              value={values.width}
              onChange={handleChange("width")}
              name="width"
              id="outlined-width"
              variant="outlined"
              margin="dense"
              min={0}
              inputAdorment="cm"
            />

            <CustomText
              label="Height"
              placeholder="Enter the Height of the product"
              type="number"
              value={values.height}
              onChange={handleChange("height")}
              name="height"
              id="outlined-heigth"
              variant="outlined"
              margin="dense"
              min={0}
              inputAdorment="cm"
            />

            <CustomText
              label="Volume"
              placeholder="Auto Generated Volume"
              type="text"
              value={values.volume}
              onChange={handleChange("volume")}
              name="volume"
              id="outlined-volume"
              variant="outlined"
              margin="dense"
              inputAdorment="m3"
            />

            <CustomText
              label="Weight"
              placeholder="Enter the weight of the product"
              type="number"
              value={values.weight}
              onChange={handleChange("weight")}
              name="weight"
              id="outlined-weight"
              variant="outlined"
              margin="dense"
              min={0}
              step={0.01}
              inputAdorment="kg"
            />

            <CustomText
              id="outlined-textarea"
              label="Description"
              margin="dense"
              type="text"
              value={values.description}
              onChange={handleChange("description")}
              variant="outlined"
              placeholder="Enter the description within 200 Charachters"
              multiline
              rows={11}
            />
          </Grid>
        </Grid>

        <div className={classes.buttonGroup}>
          <CustomButton buttonStyle={classes.buttonCancel}>
            <Cancel className={classes.icon} />
          </CustomButton>
          <CustomButton buttonStyle={classes.buttonAdd}>
            <AddShoppingCart className={classes.icon} />
          </CustomButton>
          <CustomButton buttonStyle={classes.buttonSave}>
            <SaveIcon className={classes.icon} />
          </CustomButton>
        </div>
      </MaterialUIForm>

      <div>
        <ItemTable title={tableTitle} data={data} columns={columns} />
      </div>
    </Container>
  );
};

export default SendingItems;
