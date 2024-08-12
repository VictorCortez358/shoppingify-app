'use client'
import React from 'react';
import { ConfigProvider, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';

const RegisterForm = () => {
    const onFinish = (values) => {
        console
    }

    return (
        <div className='w-full flex flex-col justify-between items-center gap-4 p-8 md:bg-[#FFF0DE] md:w-4/5 md:border md:rounded-lg lg:w-1/3'>
            <h2 className='text-base text-black font-medium md:text-lg lg:text-xl'>Create User</h2>
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
                            marginTop: '1rem',
                            width: '100%'
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Link href={"/login"} >
                            <div className='flex flex-col items-center justify-center gap-2'>
                                <button type="submit" className="w-full bg-[#F9A109] p-2 rounded-lg text-white">
                                    Register in
                                </button>
                            </div>
                            </Link>
                        </Form.Item>
                    </Form>
                </ConfigProvider>
        </div>
    );
}

export default RegisterForm;
