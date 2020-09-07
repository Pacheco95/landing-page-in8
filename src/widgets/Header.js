import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";
import DesktopHeaderImage from "assets/images/index-image.jpg";
import LogoImage from "assets/images/logo-in8-dev.svg";
import clsx from "clsx";
import React, { useState } from "react";
import styled from "styled-components";

const Spacer = styled.div`
  flex: 1 1 100%;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${DesktopHeaderImage})`,
    [theme.breakpoints.up("lg")]: {
      "background-position": "center center",
      padding: theme.spacing(8, 32),
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
  text: {
    color: theme.palette.common.white,
    textAlign: "center",
  },
  navLinks: (props) => ({
    padding: theme.spacing(1, 1),
    "& a": {
      color: theme.palette.common.white,
      textDecoration: props.selected ? "underline" : "none",
    },
    "& span": {
      paddingLeft: theme.spacing(1),
    },
    "& a:hover": {
      textDecoration: "underline",
    },
  }),
  circleSpacer: {
    color: theme.palette.common.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTextContainer: {
    marginTop: theme.spacing(12)
  },
  headerText: {
    color: theme.palette.common.white,
  }
}));

function NavLink(props) {
  const { children, selected, onClick } = props;

  const classes = useStyles(props);
  return (
    <Typography
      className={clsx(classes.text, classes.navLinks)}
      variant="body1"
    >
      <a href="#" selected={selected} onClick={onClick}>
        {children}
      </a>
    </Typography>
  );
}

function NavLinks(props) {
  const classes = useStyles(props);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const links = ["Cadastro", "Lista", "Sobre mim"];

  return (
    <Grid container>
      {links.map((link, index) => (
        <Grid item key={link}>
          <Grid container>
            <Grid item>
              <NavLink
                key={link}
                selected={index === selectedIndex}
                onClick={() => setSelectedIndex(index)}
              >
                {link}
              </NavLink>
            </Grid>
            {index < links.length - 1 && (
              <Grid item className={classes.circleSpacer}>
                &#9679;
              </Grid>
            )}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

function Header() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container justify="space-between">
        <Grid item>
          <img src={LogoImage} width={190} />
        </Grid>
        <Grid item>
          <Spacer />
        </Grid>
        <Grid item>
          <NavLinks />
        </Grid>
        <Grid item xs={12}>
          <Grid container className={classes.headerTextContainer}>
            <Grid item xs={12}>
            <Typography variant="h1" className={classes.headerText}>
                <Box textAlign="left">ESTÁGIO</Box>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h2" className={classes.headerText}>
                <Box textAlign="left">PROVA DE SELEÇÃO</Box>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Header;
