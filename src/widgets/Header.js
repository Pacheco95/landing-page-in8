import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import DesktopHeaderImage from "assets/images/index-image.jpg";
import LogoImage from "assets/images/logo-in8-dev.svg";
import clsx from "clsx";
import React, { useState } from "react";
import styled from "styled-components";
import HamburguerIcon from "assets/icons/hamburguer.svg";

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
      padding: theme.spacing(8, 16),
    },
    [theme.breakpoints.down("sm")]: {
      "background-position": "60% center",
      height: "480px",
      padding: theme.spacing(4, 5),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2, 4),
    },
    height: "100vh",
    "background-position": "center center",
    backgroundRepeat: "no-repeat",
    "background-size": "cover",
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
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(20),
    },
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(10),
      "& h1": {
        fontSize: 100,
      },
      "& h2": {
        fontSize: 32,
      },
    },
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(10),
      paddingLeft: theme.spacing(10),
      "& h1": {
        fontSize: 60,
      },
      "& h2": {
        fontSize: 28,
      },
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(4),
      paddingLeft: theme.spacing(0),
      "& h1": {
        fontSize: 36,
      },
      "& h2": {
        fontSize: 16,
      },
    },
  },
  headerText: {
    color: theme.palette.common.white,
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
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

function TabletHeader() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container justify="space-between">
        <Grid item>
          <img src={HamburguerIcon} alt="hamburguer icon" width={30} />
        </Grid>
        <Grid item>
          <Spacer />
        </Grid>
        <Grid item>
          <img src={LogoImage} alt="hamburguer image" width={120} />
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            className={classes.headerTextContainer}
          >
            <Grid item xs={12}>
              <Typography
                variant="h1"
                component="h1"
                className={classes.headerText}
              >
                <Box>ESTÁGIO</Box>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h2"
                component="h2"
                className={classes.headerText}
              >
                <Box>PROVA DE SELEÇÃO</Box>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

function MobileHeader() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container justify="space-between">
        <Grid item>
          <img src={HamburguerIcon} alt="hamburguer icon" width={30} />
        </Grid>
        <Grid item>
          <Spacer />
        </Grid>
        <Grid item>
          <img src={LogoImage} alt="hamburguer image" width={90} />
        </Grid>

        <Grid item xs={12} id="headerTextContainer">
          <Grid
            container
            className={classes.headerTextContainer}
            justify="center"
          >
            <Grid item xs={12}>
              <Typography
                variant="h1"
                component="h1"
                className={classes.headerText}
              >
                <Box textAlign="center">ESTÁGIO</Box>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h2"
                component="h2"
                className={classes.headerText}
              >
                <Box textAlign="center">PROVA DE SELEÇÃO</Box>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

function DesktopHeader() {
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
              <Typography
                variant="h1"
                component="h1"
                className={classes.headerText}
              >
                <Box textAlign="left">ESTÁGIO</Box>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h2"
                component="h2"
                className={classes.headerText}
              >
                <Box textAlign="left">PROVA DE SELEÇÃO</Box>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

function Header() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("xs"));
  const tablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <React.Fragment>
      {mobile && <MobileHeader />}
      {tablet && <TabletHeader />}
      {desktop && <DesktopHeader />}
    </React.Fragment>
  );
}

export default Header;
