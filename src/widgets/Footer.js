import { Grid, makeStyles, Typography } from "@material-ui/core";
import FooterBgImageDesktop from "assets/images/rodape-desktop.jpg";
import FooterBgImageMobile from "assets/images/rodape-mobile.jpg";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6, 2),
    [theme.breakpoints.up("sm")]: {
      backgroundImage: `url(${FooterBgImageDesktop})`,
    },
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${FooterBgImageMobile})`,
    },
    "background-position": "center center",
    "background-size": "100% auto",
  },
  text: {
    color: theme.palette.common.white,
    textAlign: "center",
  },
}));

function Footer({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <img src={FooterBgImageDesktop} style={{ visibility: "hidden" }} /> */}
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography className={classes.text} variant="body1">
            Fulano Beltrano de Oliveira da Silva
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.text} variant="body1">
            fulanobos@gmail.com
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.text} variant="body1">
            (31) 9 9666-1111
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.text} variant="body1">
            Faculdade de Belo Horizonte
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
