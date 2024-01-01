import { combineReducers } from "redux"
import name from "./name"
const rootReducer = combineReducers({
    name: name
})
export default rootReducer