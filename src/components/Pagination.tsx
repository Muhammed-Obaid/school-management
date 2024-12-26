import React from 'react'

const Pagination = () => {
    return (
        <div className='p-4 flex justify-between items-center text-gray-500'>
            <button className='py-2 px-4 bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed rounded-md '>Prev</button>
            <div className='flex items-center gap-2 text-sm'>
                <button className='px-2 rounded-dm bg-skyBlue'>1</button>
                <button className='px-2 rounded-dm '>2</button>
                <button className='px-2 rounded-dm '>3</button>
                ...
                <button className='px-2 rounded-dm '>10</button>
            </div>
            <button className='py-2 px-4 bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed rounded-md '>Next</button>

        </div>
    )
}

export default Pagination
