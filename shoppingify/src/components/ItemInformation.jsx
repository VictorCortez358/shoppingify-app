import { ConfigProvider } from 'antd';
import Image from 'next/image';
import React from 'react';
import Back from '../../public/back.svg';
import Apple from '../../public/aguacate.png';
import { useOpenItem } from '@/hooks/useOpenItem';

const ItemInformation = () => {

    const close = useOpenItem((state) => state.toggle);

    return (
        <div className='md:flex-none md:w-1/4 flex-1 flex flex-col items-start justify-start gap-2 px-4 py-5'>
            <div 
                onClick={close}
                className='flex flex-row items-center gap-2'>
                <Image src={Back} alt='apple' width={20} height={20} />
                <p className='text-sm font-bold text-[#F9A109]'>Back</p>
            </div>
            <Image src={Apple} alt='apple' className='w-fit h-1/3 md:w-auto md:h-auto' />
            <p className='text-sm text-[#828282] '>name</p>
            <h2 className='text-base font-medium'>Apple</h2>
            <p className='text-sm text-[#828282]'>category</p>
            <h2 className='text-sm font-medium'>Fruits</h2>
            <p className='text-sm text-[#828282]'>notes</p>
            <h2 className='text-xs font-medium h-min overflow-y-auto'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
                tincidunt libero. Curabitur nec mi sit amet nunc ultrices
                sollicitudin. Nulla facilisi. Donec euismod, ligula nec
                consectetur.

            </h2>
            <ConfigProvider
                theme={{
                    token: {
                        colorBorder: '#F9A109',
                        colorPrimary: '#F9A109',
                    }
                }}
            >
                <div className='flex flex-row items-center gap-4 mx-auto mt-auto'>
                    <button className='p-2 text-sm text-black rounded-md'>delete</button>
                    <button className='p-2 text-sm bg-[#F9A109] text-white rounded-md'>Add to list</button>
                </div>
            </ConfigProvider>
        </div>
    );
}

export default ItemInformation;
