import React from 'react'
import { menuItems } from '@/common/constants'
import Link from 'next/link'
import Image from 'next/image'
import { role } from '@/lib/data'

const Menu = () => {
  return (
    <div className='text-sm mt-3'>
      {menuItems.map((item, index) => (
        <div key={index} className=' flex flex-col gap-2'>
          <span className='mt-3 mb-2 text-gray-400 font-light hidden lg:block'>
            {item.title}
          </span>
          {item.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link href={item.href} key={item.label} className='flex justify-center lg:justify-start items-center gap-4 text-gray-500 py-1 hover:bg-lightSkyBlue md:px-1 rounded-md'>
                  <Image src={item.icon} alt={item.label} width={20} height={20} />
                  <span className='hidden lg:block'>{item.label}</span>
                </Link>
              )
            }
          }
          )}
        </div>
      ))}
    </div>
  )
}

export default Menu
