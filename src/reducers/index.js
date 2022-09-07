import { combineReducers } from "redux";
import { loadingPage } from "./utils";

const rootReducer = combineReducers({
    loading : loadingPage
})


export default rootReducer;
