import { combineReducers, createStore } from "redux";
import { buttonRed } from "./reducer";

const reducer = combineReducers({
    buttonRed1: buttonRed
})
export const store = createStore(reducer)