import { combineReducers } from "redux";
import Reducer from "./Reducer";

const reducers = combineReducers({
    stapes: Reducer
});

export default reducers;