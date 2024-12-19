import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* SEARCH BAR */}
      <div className='hidden md:flex gap-2 items-center px-2 rounded-full text-xs ring-[1.5px] ring-gray-300'>
        <Image src='/search.png' alt='search' width={15} height={15} />
        <input type="text" placeholder='Search..' className='bg-transparent outline-none p-2 w-[200px]' />
      </div>
      {/* RIGHT SIDE */}
      <div className='flex items-center gap-6 w-full justify-end'>
        <div className='bg-white w-7 h-7 rounded-full flex items-center justify-center cursor-pointer'>
          <Image src='/message.png' alt='message' width={20} height={20} />
        </div>
        <div className='relative bg-white w-7 h-7 rounded-full flex items-center justify-center cursor-pointer'>
          <Image src='/announcement.png' alt='message' width={20} height={20} />
          <div className='absolute -top-2 -right-2 bg-purple-500 flex items-center justify-center text-white w-4 h-4 rounded-full text-[11px] '>1</div>
        </div>
        <div className='flex flex-col'>
          <span className='text-xs font-medium leading-3'>John Doe</span>
          <span className='text-[10px] text-gray-500 text-right'>Admin</span>
        </div>
        <Image src='/avatar.png' alt='avatar' width={36} height={36} className='rounded-full' />
      </div>
    </div>
  )
}

export default Navbar
