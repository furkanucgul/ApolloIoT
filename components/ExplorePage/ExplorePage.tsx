import { companies } from '@/contents/contents'
import React from 'react'
import { ExploreBarChart } from './ExploreBarChart'
import Image from 'next/image'

const ExplorePage = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {Object.entries(companies).map(([companyName, { img, values }]) => (
                <div
                    key={companyName}
                    className='border border-slate-400 py-2 rounded-md shadow-lg'
                >
                    <div className='flex items-center justify-between px-5 border-b border-slate-400 pb-1'>
                        <div className='flex items-center gap-2'>
                            <Image
                                src={img}
                                width={20}
                                height={20}
                                alt="logo"
                                className='rounded-full'
                            />
                            <h2 className='text-lg'>
                                {companyName} Şirketi
                            </h2>
                        </div>

                        <p className='text-sm font-semibold'>
                            Toplam: {values.reduce((acc, value) => acc + parseInt(value), 0)}vh
                        </p>
                    </div>

                    <ExploreBarChart
                        values={values}
                    />
                </div>
            ))}
        </div>
    )
}

export default ExplorePage