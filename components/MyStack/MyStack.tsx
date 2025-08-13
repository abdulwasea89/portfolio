"use client"

import React from 'react'
import SectionHeading from '../SectionHeading'
import { rightArrow, stackIcon } from '@/app/assets/assets'
import { myStack } from '@/data'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function MyStack() {
    return (
        <div className='flex flex-col gap-[30px] w-full relative'>
            {/* Section Heading */}
            <div className="w-full relative">
                <SectionHeading 
                    icon={stackIcon} 
                    title='My Stacks' 
                    description='Commitment to staying updated with the latest design trends and techniques.' 
                />
            </div>

            {/* Stack Items */}
            <div className="w-full">
                <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="grid gap-[10px] auto-rows-min w-full lg:grid-cols-[repeat(2,minmax(50px,1fr))] grid-cols-1"
                >
                    {myStack?.map((stack, index) => (
                        <motion.li
                            key={stack.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="w-full"
                        >
                            <Link 
                                href={stack.link} 
                                className='w-full bg-very-dark-gray border border-dark-gray-3 rounded-xl flex items-center gap-[10px] p-[14px_24px_14px_14px] hover:bg-almost-black transition-all duration-500'
                            >
                                {/* Logo */}
                                <div className="bg-dark-gray-4 border border-border-color rounded-[7px] flex items-center justify-center p-2 relative w-[40px] h-[40px]">
                                    <Image 
                                        src={stack.logo} 
                                        alt={stack.title} 
                                        fill 
                                        className='rounded-[inherit] object-cover object-center' 
                                    />
                                </div>

                                {/* Text */}
                                <div className="flex flex-col flex-1 gap-0">
                                    <p className='text-light-gray-4 font-semibold text-[18px]'>{stack.title}</p>
                                    <p className='text-light-gray-2 font-medium text-[15px]'>{stack.description}</p>
                                </div>

                                {/* Arrow */}
                                <div className="w-[24px] h-[24px] relative overflow-hidden opacity-50 group-hover:opacity-100">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image 
                                            src={rightArrow} 
                                            alt='arrow' 
                                            width={24} 
                                            height={24} 
                                            className='object-cover transition-all duration-500 group-hover:-rotate-45'
                                        />
                                    </div>
                                </div>
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    )
}
