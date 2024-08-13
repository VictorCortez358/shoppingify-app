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
            <div className="w-full px-2 flex flex-col items-center justify-between md:px-12">
                <div className="w-full flex flex-col md:flex md:flex-row md:justify-between md:items-center md:gap-4 my-4">
                    <h2 className="md:w-2/3 text-black text-lg font-bold md:text-2xl">
                        <span className="text-[#F9A109]">Shoppingify </span>{""}
                        allows you to take your shopping list wherever you go
                    </h2>
                    <Search 
                        className='w-full mt-4 md:w-1/3'
                        placeholder="input search text" onSearch={onSearch}  />
                </div>
                <ItemList />
            </div>
        </Layout>
    );
}

