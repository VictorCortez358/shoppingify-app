'use client'
import Image from 'next/image';
import Logo from '../../public/logo.svg'
import ImageShop from '../../public/undraw_shopping_app_flsj 1.svg'
import { ConfigProvider, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const LoginForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className="w-full flex flex-row justify-between items-center gap-4 p-8 md:bg-[#FFF0DE] md:w-4/5 md:border md:rounded-lg lg:w-1/2 ">
            <div className='flex flex-col gap-2 w-full md:w-1/2'>
                <h2 className='text-base md:text-xl text-black'>
                    !Welcome to
                    <span className='text-[#F9A109]'> Shoppingify!</span>{" "}
                </h2>
                <div className='flex flex-row items-center justify-start gap-4'>
                    <Image src={Logo} width={30} height={30} alt='logo' />
                    <h2 className='text-base md:text-lg text-black'>
                        Log in
                    </h2>
                </div>
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
                            <div className='flex flex-col items-center justify-center gap-2'>
                                <button type="submit" className="w-full bg-[#F9A109] p-2 rounded-lg text-white">
                                    Log in
                                </button>
                                Or <a href="" className='hover:text-[#F9A109]'>register now!</a>
                            </div>
                        </Form.Item>
                    </Form>
                </ConfigProvider>
            </div>
            <div className='w-0 hidden md:flex flex-row md:w-1/2 md:items-center md:justify-center'>
                <Image src={ImageShop} alt='Image shop' className='opacity-50' />
            </div>
        </div>
    );
}

export default LoginForm;
