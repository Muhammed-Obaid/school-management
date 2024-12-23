'use client'
import { eventsData } from '@/common/constants';
import Image from 'next/image';
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];



let a = [1,2,3]
let b = a.forEach((num)=>{
    return num*2
})
console.log(b,'b')
const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className='bg-white rounded-lg p-2'>
            <Calendar onChange={onChange} value={value} />
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold my-4'>Events</h1>
                <Image src='/moreDark.png' alt='' width={20} height={20}/>
            </div>
            <div className="flex flex-col gap-4">
                {eventsData.map((event)=>(
                    <div key={event.id} className='px-3 py-2 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-skyBlue even:border-t-darkPurple'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                            <p className='text-gray-300 text-xs'>{event.time}</p>
                        </div>
                        <p className='mt-1 text-gray-400 text-sm'>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventCalendar
