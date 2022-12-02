import { combineReducers } from "redux";
import { elementaryReduser } from "./elementaryReduser";
export const rootReduser = combineReducers({
    elementary:elementaryReduser
    
})