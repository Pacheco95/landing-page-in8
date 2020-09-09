import thunk from "redux-thunk";
import reducers from "store/reducers";

const { createStore, applyMiddleware } = require("redux");

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
