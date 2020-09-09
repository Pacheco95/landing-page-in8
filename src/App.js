import React from "react";
import Header from "widgets/Header";
import RegisterForm from "widgets/RegisterForm/RegisterForm";
import { Grid } from "@material-ui/core";
import Table from "widgets/Table";
import Footer from "widgets/Footer";
import { Element } from "react-scroll";
import { Provider } from "react-redux";

import store from "store";

function App() {
  return (
    <Grid container>
      <Provider store={store}>
        <Grid item xs={12}>
          <Element name="headerEl" className="element">
            <Header />
          </Element>
        </Grid>
        <Grid item xs={12}>
          <Element name="formEl" className="element">
            <RegisterForm />
          </Element>
        </Grid>
        <Grid item xs={12}>
          <Element name="tableEl" className="element">
            <Table />
          </Element>
        </Grid>
        <Grid item xs={12}>
          <Element name="footerEl" className="element">
            <Footer />
          </Element>
        </Grid>
      </Provider>
    </Grid>
  );
}

export default App;
