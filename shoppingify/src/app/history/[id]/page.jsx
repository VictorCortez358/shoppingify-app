'use client';
import BackRow from '../../../../public/back_row.svg'
import Image from 'next/image'
import Layout from '@/components/Layout'
import DateIcon from '../../../../public/date.svg'
import { useRouter } from 'next/navigation'

export default function HistoryItem() {

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
        <Layout>
            <div className='w-full flex flex-col items-start gap-2 text-black md:px-12'>
                <div 
                    onClick={() => router.back()}
                    className='cursor-pointer w-auto flex flex-row items-center justify-center gap-1 my-4'>
                    <Image src={BackRow} alt='back row' className='w-6 h-6' />
                    <p className='text-base font-medium text-[#F9A109] md:text-lg'>back</p>
                </div>
                {
                    shoppingList.map((list) => (
                        <div key={list.id} className='w-full flex flex-col items-start justify-center gap-2'>
                            <h1 className='text-lg font-bold md:text-2xl'>{list.title}</h1>
                            <div className='flex flex-row items-center justify-between gap-2'>
                                <Image src={DateIcon} alt='Date' width={20} height={20} />
                                <p className='text-xs font-medium text-[#C1C1C4] md:text-sm'>{list.date}</p>
                            </div>
                            {
                                list.items.map((item) => (
                                    <div key={item.id} className='w-full flex flex-col items-start justify-center gap-2'>
                                        <h4 className='text-sm font-medium md:text-base'>{item.category}</h4>
                                        <div className='w-full flex flex-wrap items-center gap-2'>
                                        {
                                            item.products.map((product) => (
                                                <div key={product.id} className='w-auto bg-white rounded-md shadow p-2 flex flex-row items-center justify-center gap-4 md:p-4'>
                                                    <p className='text-sm font-medium md:text-base'>{product.name}</p>
                                                    <p className='text-sm font-medium md:text-base text-[#F9A109]'>{product.quantity + " pcs"}</p>
                                                </div>
                                            ))
                                        }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </Layout>
    )
}

