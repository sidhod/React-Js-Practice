import { combineReducers, createStore } from "redux";
import { buttonReducers } from "./reducer";

const reducer = combineReducers(
    {
        buttonsreducers: buttonReducers
    }
)

const store = createStore(reducer)
export default store