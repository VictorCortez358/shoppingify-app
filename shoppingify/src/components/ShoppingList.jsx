'use client'
import React, { useState } from 'react';
import DrinkIcon from '../../public/drink.svg'
import Image from 'next/image';
import { ConfigProvider, Input } from 'antd';
import { useSidebarState } from '@/hooks/useSidebarState';
import AddItem from './AddItem';

const { Search } = Input;

const ShoppingList = () => {
    const [openOptionsId, setOpenOptionsId] = useState(null);
    const [addItem, setAddItem] = useState(true);

    const handleAddItem = () => {
        setAddItem(!addItem);
    }

    const handleOpenOptions = (id) => {
        setOpenOptionsId(openOptionsId === id ? null : id);
    }

    const state = useSidebarState((state) => state.open);

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
                        {
                            id: 6,
                            name: 'Water',
                            quantity: 10
                        },
                        {
                            id: 7,
                            name: 'Beer',
                            quantity: 12
                        },
                        {
                            id: 8,
                            name: 'Wine',
                            quantity: 2
                        },
                        {
                            id: 9,
                            name: 'Tequila',
                            quantity: 1
                        },
                        {
                            id: 10,
                            name: 'Vodka',
                            quantity: 2
                        }
                    ]
                }
            ]
        }
    ];

    const onSearch = (value, _e, info) => {
        console.log(value, _e, info);
    }

    return (
        <div className={`md:flex-none md:w-auto ${addItem ? 'bg-[#FFF0DE]':'bg-white'} flex-1 flex flex-col items-center justify-between gap-2 p-4 ${state ? 'hidden' : 'block'}`}>
            {
                addItem ?
                    (
                        <>
                            <div className='bg-[#80485B] flex flex-row items-center justify-center gap-4 rounded-3xl w-full px-4'>
                                <Image src={DrinkIcon} alt='drink icon' className='relative bottom-5' />
                                <div className='flex flex-col items-start justify-center gap-1'>
                                    <h3 className='text-white font-medium text-sm break-normal md:text-base'>Didn't find what you need?</h3>
                                    <button 
                                        onClick={handleAddItem}
                                        className='p-1 bg-white text-sm font-medium text-black rounded-md px-4'>Add item</button>
                                </div>
                            </div>
                            <div className='w-full overflow-y-auto h-auto mb-auto'>
                                {shoppingList.map(option => (
                                    <div key={option.id} className='w-full'>
                                        <h2 className='text-lg text-black font-bold my-2 md:text-xl'>{option.title}</h2>
                                        {option.items.map(item => (
                                            <div key={item.id} className='flex flex-col gap-2'>
                                                <p className='text-xs text-[#828282] my-2 font-medium md:text-base'>{item.category}</p>
                                                {item.products.map(product => (
                                                    <div key={product.id} className='flex flex-row justify-between items-center my-1'>
                                                        <p className='text-sm text-black font-medium md:text-base'>{product.name}</p>
                                                        {
                                                            openOptionsId === product.id ? (
                                                                <div className='flex flex-row gap-2 bg-white rounded-md mx-2 p-1'>
                                                                    <svg
                                                                        className='hover:cursor-pointer bg-[#F9A109] rounded-md p-[2px]'
                                                                        xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFF"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                                                                    <svg
                                                                        className='hover:cursor-pointer'
                                                                        xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F9A109"><path d="M200-440v-80h560v80H200Z" /></svg>
                                                                    <p
                                                                        onClick={() => handleOpenOptions(product.id)}
                                                                        className='border-[2px] rounded-full border-[#F9A109] px-6 py-[2px] text-[#F9A109] text-xs hover:cursor-pointer'>{product.quantity}</p>
                                                                    <svg
                                                                        className='hover:cursor-pointer'
                                                                        xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F9A109"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                                                                </div>
                                                            ) : (
                                                                <p
                                                                    onClick={() => handleOpenOptions(product.id)}
                                                                    className='border-[2px] mx-2 rounded-full border-[#F9A109]  text-[#F9A109] text-xs px-6 py-[2px] hover:cursor-pointer'>{product.quantity}</p>
                                                            )
                                                        }
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <ConfigProvider
                                theme={{
                                    token: {
                                        colorBorder: '#F9A109',
                                        colorPrimary: '#F9A109',
                                    }
                                }}
                            >
                                <Search placeholder="input search text" onSearch={onSearch} enterButton="Save" />
                            </ConfigProvider>
                        </>
                    )
                    :
                    <AddItem handleAddItem={handleAddItem} />
            }
        </div>
    );
}

export default ShoppingList;
