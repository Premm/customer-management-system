import { combineReducers } from "redux";
import customerReducer from "./customer";

const rootReducer = combineReducers({
  customerState: customerReducer
});

export default rootReducer;
