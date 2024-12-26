import Image from 'next/image'
import React from 'react'

const TableSearch = () => {
    return (
        <div className='w-full md:w-auto flex gap-2 items-center px-2 rounded-full text-xs ring-[1.5px] ring-gray-300'>
            <Image src='/search.png' alt='search' width={15} height={15} />
            <input type="text" placeholder='Search..' className='bg-transparent outline-none p-2 w-[200px]' />
        </div>
    )
}

export default TableSearch
