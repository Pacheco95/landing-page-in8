import {
  Grid,
  makeStyles,
  Typography,
  Paper,
  Container,
} from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import Form from "widgets/RegisterForm/Form";
import SimpleTable from "components/SimpleTable";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(6, 4, 8, 4),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(6, 1, 8, 1),
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.breakpoints.values['xl']
    },
  },
  text: {
    textAlign: "center",
    marginBottom: theme.spacing(6),
    color: '#29abe2'
  },
}));

function Table() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container justify="center">
        <Grid item>
          <Typography className={classes.text} variant="h2">
            LISTA DE CADASTRO
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <Paper>
              <SimpleTable />
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Table;
