import React from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
const Footer = () => {
    return (
        <div className='w-[80vw] m-auto h-96 flex xs:flex-col lg:flex-row justify-around items-center'>
            <div className='xs:w-full lg:w-[25%]'>
                <div className='pl-2 pb-4'>
                    <Image src="/images/logo.svg" className='w-20 h-10 ' width={20} height={20} />
                </div>
                <div className='p-2 '>
                    <p>Welcome to arino sed ut perspiciae omunde omnis iste natus error sitort voluptatem accusantium.</p>
                </div>
                <div className='flex flex-row justify-around w-[30%] pl-2 pt-3 space-x-2 cursor-pointer xs:mb-4 lg:mb-0'>
                    <div className='border-2  p-2 rounded-full transition-colors duration-300 hover:border-[#ff4a17] hover:bg-gray-800'>
                        <Icon icon='line-md:linkedin' width={20} height={20} color='white' />
                    </div>
                    <div className='border-2  p-2 rounded-full transition-colors duration-300 hover:border-[#ff4a17] hover:bg-gray-800'>
                        <Icon icon='line-md:facebook' width={20} height={20} color='white' />
                    </div>
                    <div className='border-2  p-2 rounded-full transition-colors duration-300 hover:border-[#ff4a17] hover:bg-gray-800'>
                        <Icon icon='line-md:twitter' width={20} height={20} color='white' />
                    </div>
                    <div className='border-2  p-2 rounded-full transition-colors duration-300 hover:border-[#ff4a17] hover:bg-gray-800'>
                        <Icon icon='line-md:instagram' width={20} height={20} color='white' />
                    </div>
                </div>
            </div>
            <div className='xs:w-full lg:w-[20%]'>
                <div className='pl-2 pt-3'>
                    <h1 className='font-semibold text-[20px]'>Services</h1>
                </div>
                <ul className='pl-2 pt-6 cursor-pointer '>
                    <li className='pb-3 transition-all duration-300 hover:text-[#ff4a17]'>Web Development</li>
                    <li className='pb-3 transition-all duration-300 hover:text-[#ff4a17]'>App Development</li>
                    <li className='pb-3 transition-all duration-300 hover:text-[#ff4a17]'>UI/UX Designing</li>
                    <li className='pb-3 transition-all duration-300 hover:text-[#ff4a17]'>Backend Development</li>
                </ul>
            </div>
            <div className='xs:w-full lg:w-[20%]'>
                <div className='pl-2 pt-3'>
                    <h1 className='font-semibold text-[20px]'>Contact Us</h1>
                </div>
                <ul className='pl-2 pt-6'>
                    <li className='pb-3 '>55/53 Jay Path Apt. 908</li>
                    <li className='pb-3 '>+44 454 7800 112</li>
                    <li className='pb-3 '>sbechtelar@example.net</li>
                    <li className='pb-3 '>&nbsp;</li>
                </ul>
            </div>
            <div className='xs:w-full lg:w-[22%]'>
                <div className='pl-2 pt-3'>
                    <h1 className='font-semibold text-[20px]'>Subscribe</h1>
                </div>
                <ul className='pl-2 pt-6'>
                    <li className='pb-3 flex flex-row'>
                        <input type="text" name="" id="" className='bg-black h-12 rounded-2xl xs:w-full lg:w-68 pl-2' placeholder='email@gmail.com' />
                        <div className='pl-6 pt-2 pb-2 pr-6 rounded-xl flex justify-center items-center h-10 mt-[4px] ml-[-92px] bg-[#ff4a17] font-semibold cursor-pointer hover:bg-[hsla(13,100%,62%,1)] transition-all duration-500'>Send</div>
                    </li>
                    <li className='pb-3 pl-2'>At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit.</li>
                    <li className='pb-3 '>&nbsp;</li>

                </ul>
            </div>
            <div className=''></div>

        </div>
    );
}

export default Footer;
