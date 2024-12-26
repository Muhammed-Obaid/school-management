import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { examsData, lessonsData, role } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export type renderRowProps = {
    id: number
    subject: string
    class: string
    teacher: string
    date: string
}

const columns = [
    {
        header: "Subject ",
        accessor: "name",
    },
    {
        header: "Class",
        accessor: "class",
    },
    {
        header: "Teacher",
        accessor: "teacher",
        className: "hidden md:table-cell",
    },
    {
        header: "Date",
        accessor: "date",
        className: "hidden md:table-cell",
    },
    {
        header: "Actions",
        accessor: "actions",
    },
]


const page = () => {

    const renderRow = (row: renderRowProps) => (
        <tr key={row.id} className='even:bg-slate-50 text-sm -b border-gray-200 hover:bg-lightPurple'>
            <td className='flex gap-2 items-center p-3'>{row.subject}</td>
            <td className=''>{row.class}</td>
            <td className='hidden md:table-cell'>{row.teacher}</td>
            <td className='hidden md:table-cell'>{row.date}</td>
            <td>
                <div className='flex gap-2 items-center'>
                    <Link href={`/list/teachers/${row.id}`} className=''>
                        <button className='w-7 h-7 flex items-center justify-center rounded-full bg-skyBlue'>
                            <Image src={'/edit.png'} width={16} height={16} alt='view' />
                        </button>
                    </Link>
                    {role === 'admin' && <button className='w-7 h-7 flex items-center justify-center rounded-full bg-darkPurple'>
                        <Image src={'/delete.png'} width={16} height={16} alt='view' />
                    </button>}
                </div>
            </td>
        </tr>
    )
    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            <div className='flex justify-between items-center'>
                <h1 className='hidden md:block text-lg font-semibold'>All Exams</h1>
                <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
                    <TableSearch />
                    <div className='flex items-center gap-4 self-end'>
                        <button className='h-8 w-8 flex items-center justify-center bg-darkYellow rounded-full'>
                            <Image src="/filter.png" width={14} height={14} alt='filter' />
                        </button>
                        <button className='h-8 w-8 flex items-center justify-center bg-darkYellow rounded-full'>
                            <Image src="/sort.png" width={14} height={14} alt='filter' />
                        </button>
                        {role === 'admin' && <button className='h-8 w-8 flex items-center justify-center bg-darkYellow rounded-full'>
                            <Image src="/plus.png" width={14} height={14} alt='filter' />
                        </button>}
                    </div>
                </div>
            </div>
            <Table columns={columns} renderRow={renderRow} data={examsData} />
            <Pagination />
        </div>
    )
}

export default page
