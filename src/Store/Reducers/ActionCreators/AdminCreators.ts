import {appDispatch} from "../../index";
import {IValue} from "../../../Types/Admin";
import {addToMenu, delMenu, getFiles, getValue} from "../AdminSlice";


export const setValueREC = (value: IValue | object | any) => (dispatch: appDispatch) => {
    dispatch(getValue(value))
}


export const setFileREC = (file: any) => (dispatch: appDispatch) => {
    dispatch(getFiles(file))
}


export const addToMenuREC = (el: any) => (dispatch: appDispatch) => {
    const menuLocal : any = localStorage.getItem("menus")
    let menus = JSON.parse(menuLocal) || []
    menus = [...menus, {...el}]
    localStorage.setItem("menus", JSON.stringify(menus))
    dispatch(addToMenu(el))
}


export const delMenuREC = (el: any) => (dispatch: appDispatch) => {
    const menuLocal : any = localStorage.getItem("menus")
    let dele = JSON.parse(menuLocal) || []
    dele = dele.filter((e: any) => e.id !== el.id)
    localStorage.setItem("menus", JSON.parse(dele))
    dispatch(delMenu(el))
}