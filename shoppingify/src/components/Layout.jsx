"use client";
import React from "react";
import Sidebar from "./Sidebar";
import ShoppingList from "./ShoppingList";
import { useSidebarState } from "@/hooks/useSidebarState";
import { useOpenItem } from "@/hooks/useOpenItem";
import ItemInformation from "./ItemInformation";

export default function Layout({ children }) {
    const state = useSidebarState((state) => state.open);
    const toggleList = useSidebarState((state) => state.toggle);
    const openItem = useOpenItem((state) => state.open);

    return (
        <div className="w-full flex flex-row gap-4 h-screen">
            <Sidebar toggleList={toggleList} />
            <div className={`md:flex md:w-auto my-2 flex-1 transition-transform duration-300 ${state ? 'block' : 'hidden'}`}>
                {children}
            </div>
            {openItem ? <ItemInformation /> : <ShoppingList />}
        </div>
    );
}


