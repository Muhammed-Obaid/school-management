'use client'
import { AttendanceData } from '@/common/constants';
import Image from 'next/image';
import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AttendanceChart = () => {
   
    return (
        <div className='h-full bg-white rounded-lg p-3'>
            <div className='flex items-center justify-between'>
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src='/moreDark.png' alt='' width={20} height={20} />
            </div>

            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={AttendanceData}
                    barSize={25}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#d1d5db'}}/>
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#d1d5db'}}/>
                    <Tooltip contentStyle={{borderRadius: '10px', color: 'lightgray'}}/>
                    <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingBottom: '30px', paddingTop: '10px' }} />
                    <Bar dataKey="present" fill="#FAE27C" legendType='circle' radius={[10, 10, 0, 0]} />
                    <Bar dataKey="absent" fill="#C3EBFA" legendType='circle' radius={[10, 10, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart
