import { makeStyles } from "@material-ui/core";
import DesktopHeaderImage from "assets/images/index-image.jpg";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${DesktopHeaderImage})`,
    [theme.breakpoints.up("lg")]: {
      "background-position": "center center",
    },
    [theme.breakpoints.down("lg")]: {
      "background-position": "50% center",
    },
    [theme.breakpoints.down("md")]: {
      "background-position": "60% center",
    },
    [theme.breakpoints.down("sm")]: {
      "background-position": "60% center",
      height: "480px",
    },
    height: "100vh",
    "background-position": "center center",
    backgroundRepeat: "no-repeat",
    "background-size": "cover",
  },
}));

function Header({ children }) {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
}

export default Header;
