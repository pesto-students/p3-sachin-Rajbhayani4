import { combineReducers } from "redux";
import Reducer from "./Reducer";

const reducers = combineReducers({
    room: Reducer
});

export default reducers;