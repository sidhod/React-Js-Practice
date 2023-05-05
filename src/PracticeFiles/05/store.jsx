import { combineReducers, createStore } from "redux";
import { textReducer01 } from "./reducer";
const reducer = combineReducers({
    textReducer: textReducer01
})

const store = createStore(reducer);
export default store