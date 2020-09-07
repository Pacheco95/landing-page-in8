import React from "react";
import Header from "widgets/Header";
import RegisterForm from "widgets/RegisterForm/RegisterForm";
import { Grid } from "@material-ui/core";
import Table from "widgets/Table";

function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <RegisterForm />
      </Grid>
      <Grid item xs={12}>
        <Table />
      </Grid>
    </Grid>
  );
}

export default App;
