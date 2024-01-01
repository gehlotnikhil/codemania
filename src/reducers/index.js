import changeTheNumber from "./upDown"
import { combineReducers } from "redux"
import details from "./details"
const rootReducer = combineReducers({
    changeTheNumber:changeTheNumber,
    details: details
})
export default rootReducer