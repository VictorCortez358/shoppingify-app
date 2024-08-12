"use client";
import React from 'react';
import Layout from '../components/Layout';
import ItemList from '@/components/ItemList';
import { Input } from 'antd';

const { Search } = Input;


export default function Home() {

    const onSearch = (value, _e, info) => {
        console.log(value, _e, info);
    }

    return (
        <Layout>
            <div className="flex flex-col items-center justify-between px-4 md:px-12">
                <div className="w-full md:flex md:flex-row md:justify-between md:items-center md:gap-4 my-4">
                    <h2 className="text-black text-lg font-medium md:text-2xl">
                        <span className="text-[#F9A109]">Shoppingify </span>{""}
                        allows you to take your shopping list wherever you go
                    </h2>
                    <Search 
                        className='hidden md:block'
                        placeholder="input search text" onSearch={onSearch} style={{
                            width: '40%',
                        }} />
                </div>
                <ItemList />
            </div>
        </Layout>
    );
}

