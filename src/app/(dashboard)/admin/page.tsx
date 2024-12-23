import Announcement from '@/components/admin/Announcement'
import AttendanceChart from '@/components/admin/AttendanceChart'
import CountChart from '@/components/admin/CountChart'
import EventCalendar from '@/components/admin/EventCalendar'
import FinanceChart from '@/components/admin/FinanceChart'
import UserCard from '@/components/UserCard'
import React from 'react'



const page = () => {


  return (
    <div className='p-4 flex flex-col md:flex-row gap-4'>
      {/* Left */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        <div className='flex gap-4 flex-wrap justify-between'>
          <UserCard type='students' />
          <UserCard type='teachers' />
          <UserCard type='parents' />
          <UserCard type='staffs' />
        </div>

        <div className='flex gap-4 flex-col lg:flex-row '>
          <div className='w-full lg:w-1/3 h-[360px]'>
            <CountChart />
          </div>
          <div className='w-full lg:w-2/3 h-[360px]'>
            <AttendanceChart />
          </div>
        </div>

        {/* BOTTOM */}
        <div className='w-full h-[350px] '>
          <FinanceChart />
        </div>

      </div>
      {/* Right */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
        <EventCalendar />
        <Announcement/>
      </div>
    </div>
  )
}

export default page
