
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

    const ConsumptionInfo = async () => {
        const res = await fetch(`/api/consumption/${session?.user?.id}`)
        const data = await res.json();

        setConsumptionData(data)
    }

    useEffect(() => {
        ConsumptionInfo()
    }, [session])

    const calculateDifferences = (data: any) => {
        const result = data.map((item: any, index: any) => {
            if (index === 0) {
                // İlk eleman olduğunda direk değeri kullan
                return { ...item, consump: item.consump };
            } else {
                // Diğer elemanlarda bir önceki elemandan çıkar
                const previousConsump = data[index - 1].consump;
                const consump = item.consump - previousConsump;
                return { ...item, consump };
            }
        });

        return result;
    };

    const calculatedConsumption: any = calculateDifferences(consumptionData);

    const totalConsumption: any = consumptionData.length > 0 ? consumptionData[consumptionData.length - 1].consump : "0vh"


    return (
        <>
            {isSessionExist ? (<LoadingPage />) : (
                <main className='flex flex-col px-4 sm:px-6 lg:px-16 font_manrope pt-20 max-w-[1500px]'>
                    <ProfileHead
                        totalConsumption={totalConsumption}
                    />
                    <div>
                        <ProfileTable
                            calculatedConsumption={calculatedConsumption}
                        />
                    </div>
                    <div className='flex flex-col gap-5 lg:flex-row mt-10'>
                        <ProfileBarChart
                            calculatedConsumption={calculatedConsumption}
                        />
                        <ProfileLineChart
                            calculatedConsumption={calculatedConsumption}
                        />
                    </div>
                </main>
            )}
        </>
    )
}

export default page