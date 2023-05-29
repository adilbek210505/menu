import React from 'react';
import {useAppSelector} from "../../Hooks";
import OrderCard from "./OrderCard";

const Order = () => {
    const {order} = useAppSelector(s => s.OrderReducer)

    return (
        <div>
            <h2 className="text-center font-bold text-2xl ">MY ORDERS</h2>
            {
                order.length !== 0 &&
            <div className="my-10">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qty
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            order.map(el => <OrderCard el={el}/>)
                        }
                        </tbody>
                    </table>
                </div>

            </div>
            }
        </div>
    );
};

export default Order;