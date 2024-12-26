import Announcement from '@/components/admin/Announcement'
import BigCalendar from '@/components/BigCalendar'
import React from 'react'

const page = () => {
  return (
    <div className='p-4 flex flex-col xl:flex-row gap-4 '>
      <div className='w-full xl:w-2/3 '>
        <div className='h-full bg-white p-3 rounded-md'>
          <h1 className='text-xl font-semibold '>Schedule </h1>
          <BigCalendar />
        </div>
      </div>
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
        <Announcement />
      </div>
    </div>
  )
}

export default page
