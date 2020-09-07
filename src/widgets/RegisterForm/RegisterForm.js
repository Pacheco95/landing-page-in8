import { Grid, makeStyles, Typography, Paper } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import Form from "./Form";

const Wrapper = styled.header`
  background-color: #29abe2;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    padding: theme.spacing(6, 0, 8, 0),
  },
  text: {
    textAlign: "center",
    marginBottom: theme.spacing(6),
  },
}));

function RegisterForm() {
  const classes = useStyles();

  return (
    <Wrapper className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography className={classes.text} variant="h1">
            CADASTRO
          </Typography>
        </Grid>
        <Grid item>
          <Paper>
            <Form />
          </Paper>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default RegisterForm;
