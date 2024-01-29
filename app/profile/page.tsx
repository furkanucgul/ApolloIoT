'use client'
import LoadingPage from '@/components/LoadingPage'
import { ProfileBarChart } from '@/components/ProfilePage/ProfileBarChart'
import ProfileHead from '@/components/ProfilePage/ProfileHead'
import { ProfileLineChart } from '@/components/ProfilePage/ProfileLineChart'
import ProfileTable from '@/components/ProfilePage/ProfileTable'
import { getSession, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [isSessionExist, setIsSessionExist] = useState(true)
    const router = useRouter();
    const { data: session } = useSession();
    const [consumptionData, setConsumptionData] = useState([])
    const [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        setIsSessionExist(true)
        const CheckUser = async () => {
            const sessionCheck = await getSession()
            if (sessionCheck !== null) {
                setIsSessionExist(false)
            } else {
                router.push('/sign-in')
            }
        }

        CheckUser()
    }, [])

    const ConsumptionInfo = async () => {
        const res = await fetch(`/api/consumption/${session?.user?.id}`)
        const data = await res.json();

        setConsumptionData(data)
    }

    useEffect(() => {
        if (session) {
            ConsumptionInfo()
        }
    }, [session, isSubmitted])

    const totalConsumption: any = consumptionData.length > 0 ? consumptionData[consumptionData.length - 1].consump : "0"

    return (
        <>
            {isSessionExist ? (<LoadingPage />) : (
                <main className='flex flex-col px-4 sm:px-6 lg:px-16 font_manrope pt-20 max-w-[1500px]'>
                    <ProfileHead
                        totalConsumption={totalConsumption}
                        isSubmitted={isSubmitted}
                        setIsSubmitted={setIsSubmitted}
                    />
                    <div>
                        <ProfileTable
                            consumptionData={consumptionData}
                            setConsumptionData={setConsumptionData}
                            isSubmitted={isSubmitted}
                            setIsSubmitted={setIsSubmitted}
                        />
                    </div>
                    <div className='flex flex-col gap-5 lg:flex-row mt-10'>
                        <ProfileBarChart
                            consumptionData={consumptionData}
                        />
                        <ProfileLineChart
                            consumptionData={consumptionData}
                        />
                    </div>
                </main>
            )}
        </>
    )
}

export default page