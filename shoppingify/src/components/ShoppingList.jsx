'use client'
import React from 'react';
import DrinkIcon from '../../public/drink.svg'
import Image from 'next/image';
import { ConfigProvider, Input } from 'antd';
import { useSidebarState } from '@/hooks/useSidebarState';

const { Search } = Input;

const ShoppingList = () => {

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
        <div className={`md:flex-none md:w-auto bg-[#FFF0DE] flex-1 flex flex-col items-center justify-between gap-2 px-4 py-5  ${state ? 'hidden' : 'block'}`}>
            <div className='bg-[#80485B] flex flex-row items-center justify-center gap-4 rounded-3xl w-full'>
                <Image src={DrinkIcon} alt='drink icon' className='relative bottom-5' />
                <div className='flex flex-col items-start justify-center gap-1'>
                    <h3 className='text-white text-sm break-normal'>Didn't find what you need?</h3>
                    <button className='p-1 bg-white text-sm text-black rounded-md px-4'>Add item</button>
                </div>
            </div>
            <div className='w-full overflow-y-auto h-auto'>
                {shoppingList.map(option => (
                    <div key={option.id} className='w-full'>
                        <h2 className='text-lg text-black font-semibold my-2'>{option.title}</h2>
                        {option.items.map(item => (
                            <div key={item.id} className='flex flex-col gap-2'>
                                <p className='text-xs text-[#828282] my-2 md:text-sm'>{item.category}</p>
                                {item.products.map(product => (
                                    <div key={product.id} className='flex flex-row justify-between items-center my-1'>
                                        <p className='text-sm text-black md:text-base'>{product.name}</p>
                                        <p className='border-[2px] rounded-full border-[#F9A109] px-4 text-[#F9A109] text-xs'>{product.quantity}</p>
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
        </div>

    );
}

export default ShoppingList;
