import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { KeyboardDatePicker } from "@material-ui/pickers";
import React, { useState } from "react";
import { connect } from "react-redux";
import MaskedInput from "react-text-mask";
import { bindActionCreators } from "redux";
import api from "services";
import * as UserActions from "store/actions/users";
import { EMAIL_REGEXP } from "utils";

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

function PhoneMask(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      guide
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={"_"}
      showMask
    />
  );
}

function SignUpForm({ appendUser }) {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState(null);

  function checkFormValidation() {
    if (name.trim() === "") {
      return alert("Nome inválido");
    }

    if (email.trim() === "") {
      return alert("Email inválido");
    }

    if (!EMAIL_REGEXP.test(email)) {
      return alert("Email inválido");
    }

    if (!birthDate.isValid()) {
      return alert("Data inválida");
    }

    const rawPhone = (phone.match(/\d/g) || []).join("");

    if (rawPhone.length !== 11) {
      return alert("Telefone inválido");
    }

    return {
      name,
      email,
      birthDate: birthDate.toDate().getTime(),
      phone: rawPhone,
    };
  }

  function handleSubmitButtonClick() {
    const payload = checkFormValidation();

    if (!payload) {
      return;
    }

    api
      .post("/user", payload)
      .then((response) => response.data)
      .then(appendUser)
      .catch(console.error);
  }

  return (
    <Container component="div" maxWidth="md">
      <div className={classes.paper}>
        <Grid container className={classes.form}>
          <Grid item xs={12}>
            <TextField
              InputLabelProps={{ shrink: true }}
              margin="normal"
              required
              fullWidth
              id="name"
              label="Nome"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              // autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              InputLabelProps={{ shrink: true }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <KeyboardDatePicker
              clearable
              clearLabel="Limpar"
              cancelLabel="Cancelar"
              autoOk
              fullWidth
              label="Nascimento"
              format="DD/MM/yyyy"
              InputAdornmentProps={{ position: "end" }}
              InputLabelProps={{ shrink: true }}
              value={birthDate}
              onChange={setBirthDate}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              InputLabelProps={{ shrink: true }}
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Telefone"
              name="phone"
              autoComplete="phone"
              InputProps={{
                inputComponent: PhoneMask,
              }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmitButtonClick}
            >
              CADASTRAR
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
