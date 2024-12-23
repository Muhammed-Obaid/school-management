'use client'
import { countData } from '@/common/constants';
import Image from 'next/image';
import React from 'react'

import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
const CountChart = () => {

    return (
        <div className='bg-white rounded-lg w-full h-full p-3'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Students</h1>
                <Image src='/moreDark.png' alt='' width={20} height={20} />
            </div>
            <div className='relative w-full h-[73%]'>
                <ResponsiveContainer >
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={30} data={countData} >
                        <RadialBar
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src='/maleFemale.png' alt='male Female image' width={60} height={60} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
            <div className='flex items-center justify-center gap-8'>
                <div className='flex flex-col gap-1'>
                    <div className='w-4 h-4 rounded-full bg-skyBlue' />
                    <h1 className='font-bold'>1,234</h1>
                    <p className='text-xs text-gray-300'>Boys (55%)</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='w-4 h-4 rounded-full bg-darkYellow' />
                    <h1 className='font-bold'>1,234</h1>
                    <p className='text-xs text-gray-300'>Girls (45%)</p>
                </div>
            </div>
        </div>

    )
}

export default CountChart
