
'use client'
import LoadingPage from '@/components/LoadingPage'
import { ProfileBarChart } from '@/components/ProfilePage/ProfileBarChart'
import ProfileHead from '@/components/ProfilePage/ProfileHead'
import { ProfileLineChart } from '@/components/ProfilePage/ProfileLineChart'
import ProfileTable from '@/components/ProfilePage/ProfileTable'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [isSessionExist, setIsSessionExist] = useState(true)
    const router = useRouter();

    useEffect(() => {
        setIsSessionExist(true)
        const checkUser = async () => {
            const sessionCheck = await getSession()
            if (sessionCheck !== null) {
                setIsSessionExist(false)
            } else {
                router.push('/sign-in')
            }
        }

        checkUser()
    }, [])

    return (
        <>
            {isSessionExist ? (<LoadingPage />) : (
                <main className='flex flex-col px-4 sm:px-6 lg:px-16 font_manrope pt-20 max-w-[1500px]'>
                    <ProfileHead />
                    <div>
                        <ProfileTable />
                    </div>
                    <div className='flex flex-col gap-5 lg:flex-row mt-10'>
                        <ProfileBarChart />
                        <ProfileLineChart />
                    </div>
                </main>
            )}
        </>
    )
}

export default page