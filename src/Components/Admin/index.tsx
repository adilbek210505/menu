import React from 'react';
import {useAppDispatch, useAppSelector} from "../../Hooks";
import {addToMenuREC, setFileREC, setValueREC} from "../../Store/Reducers/ActionCreators/AdminCreators";

const Admin = () => {
    const {value,file} = useAppSelector(s => s.AdminReducer)
    const dispatch = useAppDispatch()

    const fileReader = new FileReader()
    fileReader.onloadend = () => {
        dispatch(setFileREC(fileReader.result))
    }
    const handleFile = (e: React.ChangeEvent<HTMLInputElement | HTMLFieldSetElement | any>) => dispatch(setFileREC(fileReader.readAsDataURL(e.target.files[0])))

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => dispatch(setValueREC({...value, [e.target.name]: e.target.value}))

    const handleClick = () => {
        if (value.title.trim().length !== 0 && value.price.trim().length !== 0) {
            dispatch(addToMenuREC(value))
            dispatch(setValueREC({title: "", price: ""}))
        }
    }


    return (
        <div>
            <h1 className="text-center font-bold  text-2xl">CREATE PRODUCT</h1>
            <div className="flex items-center justify-between">
            <div className="my-20 border-2 border-black w-[450px] h-[430px] flex flex-col items-center justify-evenly">
                <input name={"image"} onChange={handleFile} value={value.image} type="file"/>
                <input name={"title"} onChange={handleChange} value={value.title} type="search" className="block w-[400px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="food name" required/>
                <input name={"price"} onChange={handleChange} value={value.price} type="number" className="block w-[400px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="price" required/>
                <button onClick={handleClick} className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">create</button>
            </div>
                {
                    value.title !== "" &&
                    <div className="my-20 border-2 font-bold text-xl border-black w-auto h-auto p-3 flex flex-col items-center justify-evenly">
                        <img width={300} src={file} alt=""/>
                        <h1>{value.title}</h1>
                        <h1>{value.price}$</h1>
                    </div>
                }
            </div>
        </div>
    );
};

export default Admin;