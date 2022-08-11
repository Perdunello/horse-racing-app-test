import {applyMiddleware, combineReducers, createStore} from "redux";
import betReducer from "./betReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    bet: betReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store