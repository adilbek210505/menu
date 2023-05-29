import {combineReducers, configureStore} from "@reduxjs/toolkit";
import AdminReducer from "./Reducers/AdminSlice";
import OrderReducer from "./Reducers/OrdersSlice";


const rootState = combineReducers({
    AdminReducer,
    OrderReducer
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootState
    })
}


export type rootReducer = ReturnType<typeof rootState>
export type appState = ReturnType<typeof setUpStore>
export type appDispatch = appState["dispatch"]

