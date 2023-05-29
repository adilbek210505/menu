import {appDispatch} from "../../index";
import {addToOrders, decOrders, deleteOrders} from "../OrdersSlice";


export const addToOrderREC = (el: any) => (dispatch: appDispatch) => {
    const basket: any = localStorage.getItem("orders")
    let baskets = JSON.parse(basket) || []
    const fount = baskets.find((e: any) => e.id === el.id)
    if (fount) {
        baskets = baskets.map((el: any) => el.id === fount.id ? {...el, quantity: el.quantity +1} : el)
    } else {
        baskets = [...baskets, {...el, quantity: 1}]
    }
    localStorage.setItem("orders", JSON.stringify(baskets))
    dispatch(addToOrders(el))
}

export const delOrderREC = (el: any) => (dispatch: appDispatch) => {
    const basket: any = localStorage.getItem("orders")
    let del = JSON.parse(basket) || []
    del = del.filter((e: any) => e.id !== el.id)
    localStorage.setItem("orders", JSON.stringify(del))
    dispatch(deleteOrders(el))
}

export const decOrderREC = (el: any) => (dispatch: appDispatch) => {
    const basket: any = localStorage.getItem("orders")
    let dec = JSON.parse(basket) || []
    dec = dec.map((e: any) => {
        if (e.id === el.id) {
            if (e.quantity > 1) {
                return {...e, quantity: e.quantity -1}
            } else return  e
        } else return e
    })
    localStorage.setItem("orders", JSON.stringify(dec))
    dispatch(decOrders(el))
}

