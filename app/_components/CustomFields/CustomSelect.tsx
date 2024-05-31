"use client"

import React, { useState } from 'react'
import cn from "classnames";

const CustomSelect = ({ name, placeholder, items }: any) => {


    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <div className="inline-flex items-center overflow-hidden rounded-md border bg-white rounded-8 border-dark-gray py-2" onClick={() => setOpen(!open)}>
                <a
                    href="#"
                    className="px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                >
                    Выбрать компанию
                </a>

                <button className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700">
                    <span className="sr-only">Menu</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            <div
                role="menu"
                className={cn("absolute start-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-default", {
                    "hidden": !open
                })}
            >
                <ul className="p-2">
                    {
                        items.map( (item: any) => <>
                            <li
                                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 hover:bg-gray"
                                role="menuitem"
                                onClick={() => setOpen(!open)}
                            >
                                { item.value }
                            </li>
                        </>)
                    }

                    
                </ul>
            </div>
        </div>
    )
}

export default CustomSelect
