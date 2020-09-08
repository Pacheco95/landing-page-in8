import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ReactDOM from "react-dom";
import App from "./App";

import "moment/locale/pt-br";
import moment from "moment";

moment.locale("pt-br");

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
