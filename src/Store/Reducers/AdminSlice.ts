import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAdminState, IValue} from "../../Types/Admin";
import uniqId from "uniqid"



const menusLocal : any = localStorage.getItem("menus")

const initialState: IAdminState = {
    menu: JSON.parse(menusLocal) || [],
    value: {
        title: "",
        price: "",
        image: ""
    },
    file: ""
}

export const AdminReducer = createSlice({
    name: "ADMIN",
    initialState,
    reducers: {
        getValue(state,{payload}: PayloadAction<IValue>) {
            state.value = payload
        },
        getFiles(state,{payload}: PayloadAction<any>) {
            state.file = payload
        },
        addToMenu(state,{payload}: PayloadAction<any>) {
            const newPr: IValue = {
                id: uniqId(),
                title: payload.title,
                price: payload.price,
                image: state.file
            }
            state.menu = [...state.menu, {...newPr}]
        },
        delMenu(state,{payload}: PayloadAction<any>) {
            state.menu = state.menu.filter(el => el.id !== payload.id)
        }
    }
})

export const {getValue,delMenu,getFiles,addToMenu} = AdminReducer.actions
export default AdminReducer.reducer