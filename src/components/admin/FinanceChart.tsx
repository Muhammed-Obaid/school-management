'use client'
import { financeData } from '@/common/constants';
import Image from 'next/image'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FinanceChart = () => {
  return (
    <div className='h-full w-full bg-white rounded-lg p-3'>
      <div className='flex items-center justify-between'>
        <h1 className='text-lg font-semibold'>Finance</h1>
        <Image src='/moreDark.png' alt='' width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={financeData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#d1d5db' }} tickMargin={10} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#d1d5db' }} tickMargin={15} />
          <Tooltip />
          <Legend verticalAlign='top' wrapperStyle={{ paddingBottom: '20px', paddingTop: '5px' }} />
          <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={6} />
          <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={6} />
        </LineChart>
      </ResponsiveContainer>


    </div>
  )
}

export default FinanceChart
