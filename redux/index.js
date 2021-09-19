import { combineReducers } from "redux";
import counter from "@redux/reducers/counter";

const reducers = { counter };

export default combineReducers(reducers);
