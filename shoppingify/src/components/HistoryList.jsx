'use client';
import Image from 'next/image';
import React from 'react';
import DateIcon from '../../public/date.svg';
import EnterIcon from '../../public/enter.svg';
import { useRouter } from 'next/navigation';

const HistoryList = () => {
    const router = useRouter();

    const shoppingList = [
        {
            id: 1,
            title: 'Shopping List',
            state: 'completed',
            date: 'Mon, 12th July 2021',
            createdAt: 'Agust, 2021',
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


    return (
        <div className='w-full flex flex-col items-start justify-center gap-2 text-black'>
            {
                shoppingList.map((list) => (
                    <div key={list.id} className='w-full flex flex-col items-start justify-center gap-2'>
                        <p className='text-sm font-medium'>{list.createdAt}</p>
                        <div className='w-full flex flex-wrap items-center justify-between gap-2 bg-white p-2 rounded-md shadow-sm md:p-4'>
                            <p className='text-base font-bold'>{list.title}</p>
                            <div className='w-auto flex flex-row items-center justify-between gap-4'>
                                <Image src={DateIcon} alt='Date' width={20} height={20} />
                                <p className='text-sm font-medium text-[#C1C1C4]'>{list.date}</p>
                                <p className='text-sm font-medium text-[#56CCF2] rounded-md border border-[#56CCF2] p-1'>{list.state}</p>
                                <Image 
                                    onClick={() => router.push('/history/1')}
                                    src={EnterIcon} alt='Enter' width={20} height={20} />
                            </div>
                        </div>
                    </div>
                ))  
            }
            
        </div>
    );
}

export default HistoryList;
