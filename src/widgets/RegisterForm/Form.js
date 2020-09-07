import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="div" maxWidth="md">
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
        <TextField
            InputLabelProps={{ shrink: true }}
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nome"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            margin="normal"
            required
            fullWidth
            id="birth"
            label="Nascimento"
            name="birth"
            autoComplete="birth"
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Telefone"
            name="phone"
            autoComplete="phone"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            CADASTRAR
          </Button>
        </form>
      </div>
    </Container>
  );
}
