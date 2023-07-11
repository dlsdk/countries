import { combineReducers } from "redux";
import contriesReducers from "./contriesReducers";

const reducers = combineReducers({
    contriesReducers,
});

export default reducers;