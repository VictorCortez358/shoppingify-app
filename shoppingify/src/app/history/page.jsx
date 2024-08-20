import HistoryList from '@/components/HistoryList'
import Layout from '@/components/Layout'
import React from 'react'

export default function History() {

    return (
        <Layout>
            <div className='w-full px-2 flex flex-col items-start md:px-12'>
                <h1 className='text-lg font-bold mr-auto my-4 md:text-2xl'>Shoppingify History</h1>
                <HistoryList />
            </div>
        </Layout>
    )
}
