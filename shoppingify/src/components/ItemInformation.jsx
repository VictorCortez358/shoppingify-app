import { ConfigProvider } from 'antd';
import Image from 'next/image';
import React from 'react';
import Back from '../../public/back.svg';
import Apple from '../../public/aguacate.png';
import { useOpenItem } from '@/hooks/useOpenItem';
import { useSidebarState } from '@/hooks/useSidebarState';

const ItemInformation = () => {

    const toggleList = useSidebarState((state) => state.toggle);
    const openItem = useOpenItem((state) => state.toggle);

    const handleBack = () => {
        toggleList();
        openItem();
    }

    return (
        <div className="flex-1 flex flex-col justify-start items-start gap-2 py-3 px-1 md:flex-none md:w-1/4">
            <div onClick={handleBack} className="flex items-center gap-2 cursor-pointer">
                <Image src={Back} alt="Back" width={20} height={20} />
                <p className="text-sm font-bold text-[#F9A109] md:text-base">Back</p>
            </div>
            <Image src={Apple} alt="Apple" className="w-fit h-1/3 md:w-auto md:h-auto" />
            <p className="text-sm text-gray-500 md:text-base">name</p>
            <h2 className="text-base font-medium md:text-lg">Apple</h2>
            <p className="text-sm text-gray-500 md:text-base">category</p>
            <h2 className="text-sm font-medium md:text-base">Fruits</h2>
            <p className="text-sm text-gray-500 md:text-base">notes</p>
            <h2 className="text-xs font-medium overflow-y-auto md:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in tincidunt libero. Curabitur nec mi sit amet nunc ultrices sollicitudin. Nulla facilisi. Donec euismod, ligula nec consectetur.
            </h2>
            <ConfigProvider
                theme={{
                    token: {
                        colorBorder: '#F9A109',
                        colorPrimary: '#F9A109',
                    },
                }}
            >
                <div className="flex items-center gap-4 mt-auto mx-auto">
                    <button className="p-2 text-sm rounded-md text-black md:text-base">delete</button>
                    <button className="p-2 text-sm text-white bg-[#F9A109] rounded-md md:text-base">Add to list</button>
                </div>
            </ConfigProvider>
        </div >
    );
}

export default ItemInformation;

