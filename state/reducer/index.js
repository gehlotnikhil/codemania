import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import checking from "./checking"
const  reducers = combineReducers({
    amount : amountReducer ,
    check: checking

})
export default reducers