'use client';
import Layout from '@/components/Layout';
import { Progress } from 'antd';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];

const renderLineChart = () => (
    <LineChart width={
        screen.width > 768 ? 1000 : 300
    } height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
    </LineChart>
);

export default function Statistics() {
    return (
        <Layout>
            <div className='w-full px-2 flex flex-col items-start md:px-12'>
                <div className='flex flex-col justify-between items-start w-full my-4'>
                    <div className='w-full'>
                        <h1 className='text-lg font-bold mr-auto mb-2'>Top Items</h1>
                        <div className='flex flex-col items-start justify-center'>
                            <div className='flex flex-row items-center justify-between w-full'>
                                <p className='text-sm font-medium'>Apple</p>
                                <p className='text-sm font-medium'>50%</p>
                            </div>
                            <Progress percent={50} showInfo={false} />
                        </div>
                    </div>
                    <div className='w-full'>
                        <h1 className='text-lg font-bold mr-auto mb-2'>Top Categories</h1>
                        <div className='flex flex-row items-center justify-between w-full'>
                                <p className='text-sm font-medium'>Apple</p>
                                <p className='text-sm font-medium'>50%</p>
                            </div>
                            <Progress percent={50} showInfo={false} />
                    </div>
                </div>
                <div className='w-full'>
                    <h1 className='text-lg font-bold mr-auto mb-4'>Shopping Trends</h1>
                    {renderLineChart()}
                </div>
            </div>
        </Layout>
    );
}
