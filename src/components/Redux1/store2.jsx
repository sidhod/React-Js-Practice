import { combineReducers, createStore } from "redux";
import { ButtonReducer } from "./reducer";
const reducer = combineReducers({
    buttonsReducer: ButtonReducer,
})
// const store = createStore(reducer)
// export default store