import React from 'react'

const Announcement = () => {
    return (
        <div className='bg-white rounded-lg p-2'>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold'>Announcements</h1>
                <span className='text-xs text-gray-400'>View All</span>
            </div>
            <div className='flex flex-col gap-4 mt-4'>
                <div className='px-3 py-2 bg-lightSkyBlue rounded-md'>
                    <div className='flex justify-between items-center'>
                        <h2 className='font-medium'>Lorem, ipsum dolor.</h2>
                        <span className='bg-white rounded-lg p-1 text-gray-400 text-xs'>2025-01-01</span>
                    </div>
                    <p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='px-3 py-2 bg-lightPurple rounded-md'>
                    <div className='flex justify-between items-center'>
                        <h2 className='font-medium'>Lorem, ipsum dolor.</h2>
                        <span className='bg-white rounded-lg p-1 text-gray-400 text-xs'>2025-01-01</span>
                    </div>
                    <p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='px-3 py-2 bg-lightYellow rounded-md'>
                    <div className='flex justify-between items-center'>
                        <h2 className='font-medium'>Lorem, ipsum dolor.</h2>
                        <span className='bg-white rounded-lg p-1 text-gray-400 text-xs'>2025-01-01</span>
                    </div>
                    <p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

            </div>
        </div>
    )
}

export default Announcement
