import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../Reducer/index";

export const store = createStore(reducers, {}, applyMiddleware(thunk));