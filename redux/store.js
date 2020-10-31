const { createStore, applyMiddleware } = require("redux")
const { composeWithDevTools } = require("redux-devtools-extension")
import thunk from "redux-thunk"
import rootReducers from "./reducers"

const initialState = {}

const middleware = [thunk]

const store = createStore(rootReducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;