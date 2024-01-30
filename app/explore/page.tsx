import ExplorePage from '@/components/ExplorePage/ExplorePage'
import React from 'react'

const page = () => {
    return (
        <main className='flex flex-col px-4 sm:px-6 lg:px-16 font_manrope pt-20 max-w-[1500px]'>
            <h1 className='text-center font-semibold text-xl lg:text-3xl pb-5'>
                Diğer Firmaların Enerji Tüketimlerini Keşfet.
            </h1>

            <ExplorePage />
        </main>
    )
}

export default page