import React from 'react';
import { ConfigProvider, Form, Input, Select } from 'antd';

const onFinish = (values) => {
    console.log('Received values of form: ', values);
};


const AddItem = ({handleAddItem}) => {
    return (
        <div className='w-full flex flex-col items-start h-full gap-2 md:mx-16'>
            <h2 className='text-lg font-bold text-black mb-4 md:text-xl'>Add new item</h2>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#F9A109',
                        colorError: 'f9a109b2'
                    },
                }}
            >
                <Form
                    name="user_login"
                    initialValues={{
                        remember: true,
                    }}
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        justifyContent: 'space-around',
                    }}
                    onFinish={onFinish}
                    layout='vertical'
                >
                    <Form.Item
                        label="Name (optional)"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input a name!',
                            },
                        ]}
                    >
                        <Input placeholder="Enter a name" />
                    </Form.Item>

                    <Form.Item
                        label="Note"
                        name="note"
                    >
                        <Input.TextArea placeholder="Enter a note" />
                    </Form.Item>

                    <Form.Item
                        label="Image (optional)"
                        name="image"
                    >
                        <Input placeholder="Enter a url" />
                    </Form.Item>

                    <Form.Item
                        label="Category"
                        name="category"
                        rules={[
                            {
                                required: true,
                                message: 'Please select a category!',
                            },
                        ]}
                    >
                        <Select placeholder="Select a category">
                            <Select.Option value="fruits">Fruits</Select.Option>
                            <Select.Option value="vegetables">Vegetables</Select.Option>
                            <Select.Option value="meat">Meat</Select.Option>
                            <Select.Option value="dairy">Dairy</Select.Option>
                            <Select.Option value="bakery">Bakery</Select.Option>
                            <Select.Option value="canned">Canned</Select.Option>
                            <Select.Option value="frozen">Frozen</Select.Option>
                            <Select.Option value="snacks">Snacks</Select.Option>
                            <Select.Option value="beverages">Beverages</Select.Option>
                            <Select.Option value="other">Other</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorBorder: '#F9A109',
                                    colorPrimary: '#F9A109',
                                },
                            }}
                        >
                            <div className="flex items-center justify-center gap-4">
                                <button 
                                    onClick={handleAddItem}
                                    className="p-2 px-4 text-sm rounded-md text-black md:text-base">Cancel</button>
                                <button className="p-2 px-4 text-sm text-white bg-[#F9A109] rounded-md md:text-base">Save</button>
                            </div>
                        </ConfigProvider>
                    </Form.Item>
                </Form>
            </ConfigProvider>
        </div>
    );
}

export default AddItem;
