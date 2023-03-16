import { addreducer } from "./reducer";

const { createStore, combineReducers } = require("redux");

const reducer = combineReducers({
    addreducers: addreducer
})
const store = createStore(reducer)
export default store