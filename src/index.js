// pick a date util library
import MomentUtils from "@date-io/moment";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment";
import "moment/locale/pt-br";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

moment.locale("pt-br");

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <App />
    </MuiPickersUtilsProvider>
  </React.Fragment>,
  document.getElementById("root")
);
