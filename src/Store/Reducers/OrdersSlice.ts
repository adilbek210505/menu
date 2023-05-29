import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IOrderState} from "../../Types/Order";
import {IValue} from "../../Types/Admin";


const basket: any = localStorage.getItem("orders")

const initialState: IOrderState = {
    order: JSON.parse(basket) || []
}

export const OrderReducer = createSlice({
    name: "ORDER",
    initialState,
    reducers: {
        addToOrders(state,{payload}: PayloadAction<IValue>) {
          const fount = state.order.find(el => el.id === payload.id)
            if (fount) {
                state.order = state.order.map(el => el.id === fount.id ? {...el, quantity: el.quantity + 1} : el)
            } else {
                state.order = [...state.order, {...payload, quantity: 1}]
            }
        },
        deleteOrders(state,{payload}: PayloadAction<any>) {
            state.order = state.order.filter(el => el.id !== payload.id)
        },
        decOrders(state,{payload}: PayloadAction<any>) {
            state.order = state.order.map(el => {
                if (el.id === payload.id) {
                    if (el.quantity > 1) {
                        return {...el, quantity: el.quantity -1}
                    } else return el
                } else return el
            })
        },

    }
})


export const {addToOrders,deleteOrders,decOrders} = OrderReducer.actions
export default OrderReducer.reducer