"use client";
import React from "react";
import Image from "next/image";
import Icon from "../../public/logo.svg";
import History from "../../public/history.svg";
import List from "../../public/list.svg";
import Stadistics from "../../public/stadistics.svg";
import Shopping_car from "../../public/shopping_car.svg";
import { Tooltip } from "antd";
import { usePathname } from 'next/navigation';

const options = [
    { id: 1, icon: List, path: "/", name: "items" },
    { id: 2, icon: History, path: "/history", name: "history" },
    { id: 3, icon: Stadistics, path: "/stadistics", name: "statistics" },
];

const Sidebar = ({ toggleList }) => {
    const pathname = usePathname();

    return (
        <div className="w-auto flex flex-col justify-between items-center py-4 lg:w-auto">
            <Image src={Icon} alt="logo" className="h-8 w-8 mx-2 md:mx-4" />
            <div className="flex flex-col gap-12 mr-auto">
                {options.map((option) => (
                    <Tooltip key={option.id} title={option.name} placement="right">
                        <div className="flex items-center gap-2">
                            <span className={`${pathname === option.path ? 'bg-[#F9A109]' : ''} w-1 md:w-[5px] md:h-10 rounded-r-full h-8`}></span>
                            <Image src={option.icon} alt={option.name} className="w-6 h-6 md:w-7 md:h-7" />
                        </div>
                    </Tooltip>
                ))}
            </div>
            <div
                className="relative p-2 bg-[#F9A109] rounded-full cursor-pointer"
                onClick={toggleList}
            >
                <span className="absolute bottom-5 left-5 px-2 py-1 text-xs font-bold text-white bg-red-600 rounded-full">
                    3
                </span>
                <Image src={Shopping_car} alt="shopping cart" className="w-4 h-4" />
            </div>
        </div>
    );
};

export default Sidebar;
