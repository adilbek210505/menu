import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../Hooks";
import {addToOrderREC} from "../../Store/Reducers/ActionCreators/OrderCreators";
import {delMenuREC} from "../../Store/Reducers/ActionCreators/AdminCreators";

const Menu = () => {
    const {menu} = useAppSelector(s => s.AdminReducer)
    const {order} = useAppSelector(s => s.OrderReducer)
    const dispatch = useAppDispatch()
    const [value,setValue] = useState("")
    const fout = (el: any) => order.some(some => some.id === el.id)

    return (
        <div>
            <h2 className="text-center font-bold text-2xl ">MENU</h2>
            {
                menu.length !== 0 &&
                <input onChange={(e) => setValue(e.target.value)} type="text" width={300} className="bg-black/50 my-10 ml-[470px] rounded p-1" placeholder="Search"/>
            }
            <div className="flex items-center justify-evenly flex-wrap">
                {
                    menu.map(el => (
                        <div>
                            {
                                el.title.includes(value) ?
                                    <div className="m-5 rounded bg-gray-300 p-3">
                                        <img className="rounded" width={200} src={el.image} alt=""/>
                                        <h1 className="font-bold text-xl py-2">{el.title}</h1>
                                        <div className="flex items-center justify-between w-[200px]">
                                            <h1 className="font-mono  font-bold text-xl">{el.price}$</h1>
                                            {
                                                fout(el)
                                                    ?
                                                    <button onClick={() => dispatch(delMenuREC(el))}>del</button>
                                                    :
                                                    <button onClick={() => dispatch(addToOrderREC(el))} className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">to order</button>
                                            }
                                        </div>
                                    </div>
                                    :
                                    ""
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Menu;