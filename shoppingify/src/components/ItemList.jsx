'use client'
import React from 'react';
import PlusIcon from '../../public/plus.svg';
import Image from 'next/image';
import { useOpenItem } from '@/hooks/useOpenItem';
import { useSidebarState } from '@/hooks/useSidebarState';

const ItemList = () => {

    const openItem = useOpenItem((state) => state.toggle);  
    const toggleList = useSidebarState((state) => state.toggle);

    const shoppingList = [
        {
            id: 1,
            title: 'Shopping List',
            items: [
                {
                    id: 1,
                    category: 'Fruit and vegetables',
                    products: [
                        {
                            id: 1,
                            name: 'Apple',
                            quantity: 3
                        },
                        {
                            id: 2,
                            name: 'Banana',
                            quantity: 5
                        }
                    ]
                },
                {
                    id: 2,
                    category: 'Meat and Fish',
                    products: [
                        {
                            id: 3,
                            name: 'Fish',
                            quantity: 3
                        }
                    ]
                },
                {
                    id: 3,
                    category: 'Beverages',
                    products: [
                        {
                            id: 4,
                            name: 'Juice',
                            quantity: 2
                        },
                        {
                            id: 5,
                            name: 'Soda',
                            quantity: 6
                        },
                    ]
                }
            ]
        }
    ];

    const handleClick = () => {
        openItem();
        toggleList();
    };

    return (
        <div className="w-full flex-1 my-2">
            {shoppingList.map((list) => (
                <div key={list.id} className="">
                    {list.items.map((item) => (
                        <div key={item.id} className='my-2'>
                            <h4 className="text-black text-base font-medium md:text-lg">{item.category}</h4>
                            <ul className="grid grid-cols-2 gap-2 md:grid-cols-3">
                                {item.products.map((product) => (
                                    <li 
                                        onClick={handleClick}
                                        key={product.id} 
                                        className="w-min cursor-pointer bg-white border border-white rounded-md shadow-sm flex justify-center items-center gap-4 p-2 px-6"
                                    >
                                        <p className="text-black text-xs font-medium md:text-base">{product.name}</p>
                                        <Image src={PlusIcon} alt="plus icon" className="ml-4    w-5 h-5" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default ItemList;
