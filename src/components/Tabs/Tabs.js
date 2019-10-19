import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import SendingItems from "../TabComponents/Item";
import LocationDetails from "../TabComponents/Location";
import Confirmation from "../TabComponents/Confirmation";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3} style={{ backgroundColor: "#F1F9FF" }}>
        {children}
      </Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
      style={
        props.selected
          ? {
              backgroundColor: "#F1F9FF",
              color: "#2699FB",
              fontFamily: "roboto",
              fontWeight: "bold",
              fontSize: 18
            }
          : {}
      }
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
    // backgroundColor: theme.palette.background.paper
  },
  appBar: {
    marginTop: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  tab: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#5FADC1"
  }
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // console.log(value);

  return (
    <div className={classes.root}>
      <Typography
        variant="h2"
        style={{
          fontSize: 40,
          marginTop: 20,
          color: "white",
          fontFamily: "roboto",
          fontWeight: "bold"
        }}
      >
        Consignment #123456789
      </Typography>
      <AppBar position="static" className={classes.appBar}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          indicatorColor="primary"
          className={classes.tab}
        >
          <LinkTab label="Item To Send" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Pick Up Details" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Delivery Details" href="/spam" {...a11yProps(2)} />
          <LinkTab label="Confirmation" href="/spam" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SendingItems />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LocationDetails pickup />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LocationDetails delivery />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Confirmation />
      </TabPanel>
    </div>
  );
}
