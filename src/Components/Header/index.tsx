import React from 'react';
import {Link} from "react-router-dom";
import {useAppSelector} from "../../Hooks";

const Header = () => {
    const {order} = useAppSelector(s => s.OrderReducer)
    const {menu} = useAppSelector(s => s.AdminReducer)

    const count = order.reduce((acc,el) => {
        return acc + el.quantity
    }, 0)

    return (
        <div className="flex items-center justify-between my-6">
            <div>
                logo
            </div>
            <div className="flex items-center justify-between w-[360px] font-bold">
                <Link to={"/order"} className="hover:text-red-600 relative ">
                    Orders
                    {
                        order.length !== 0 &&
                        <h1 className="absolute -top-4 left-10  rounded-2xl w-[20px] flex items-center justify-center h-[20px] bg-red-600">{order.length === 0 ? "" : count}</h1>
                    }
                </Link>

                <Link to={"/menu"} className="hover:text-red-600 relative ">
                    menu
                    <h1  className={`absolute -top-4 left-10  rounded-2xl w-[20px] flex items-center justify-center h-[20px] ${menu.length === 0 ? "" : "bg-red-600"}`}>{menu.length === 0 ? "" : menu.length}</h1>
                </Link>
                <Link to={"/"} className="hover:text-red-600">
                    Admin
                </Link>
            </div>
        </div>
    );
};

export default Header;