import {
  Grid,
  makeStyles,
  Typography,
  Paper,
  Container,
} from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import Form from "./Form";

const Wrapper = styled.header`
  background-color: #29abe2;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
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
  },
}));

function RegisterForm() {
  const classes = useStyles();

  return (
    <Wrapper className={classes.root}>
      <Grid container justify="center">
        <Grid item>
          <Typography className={classes.text} variant="h2">
            CADASTRO
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <Paper>
              <Form />
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default RegisterForm;
