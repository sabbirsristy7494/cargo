import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  CssBaseline
} from "@material-ui/core";
import logo from "./logo.svg";

import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  title: {
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  logo: {
    marginTop: 10,
    marginBottom: 10,
    width: 264,
    height: 70,
    [theme.breakpoints.down("lg")]: {
      width: 150,
      height: 70
    }
  },
  menuItem: {
    marginRight: theme.spacing(2),
    fontSize: 18,
    fontFamily: "roboto",
    fontWeight: "regular"
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Typography className={classes.menuItem}>About</Typography>
      </MenuItem>
      <MenuItem>
        <Typography className={classes.menuItem}>Services</Typography>
      </MenuItem>
      <MenuItem>
        <Typography className={classes.menuItem}>Get A Quote</Typography>
      </MenuItem>
      <MenuItem>
        <Typography className={classes.menuItem}>Resources</Typography>
      </MenuItem>
      <MenuItem>
        <Typography className={classes.menuItem}>FAQ's</Typography>
      </MenuItem>
      <MenuItem>
        <Typography className={classes.menuItem}>Contact</Typography>
      </MenuItem>
      <MenuItem>
        <Typography className={classes.menuItem}>Login</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <CssBaseline />
      <AppBar
        position="static"
        style={{ backgroundColor: "#38749E", height: 90 }}
      >
        <Container>
          <Toolbar className={classes.layout}>
            <div>
              <img src={logo} alt="Express Cargo" className={classes.logo} />
            </div>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Typography className={classes.menuItem}>About</Typography>
              <Typography className={classes.menuItem}>Services</Typography>
              <Typography className={classes.menuItem}>Get A Quote</Typography>
              <Typography className={classes.menuItem}>Resources</Typography>
              <Typography className={classes.menuItem}>FAQ's</Typography>
              <Typography className={classes.menuItem}>Contact</Typography>
              <Typography className={classes.menuItem}>Login</Typography>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
