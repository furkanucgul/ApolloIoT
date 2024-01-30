'use client'
import LoadingPage from '@/components/LoadingPage'
import SignInForm from '@/components/SignInPage/SignInForm'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [isSessionExist, setIsSessionExist] = useState(true)
    const router = useRouter();

    useEffect(() => {
        setIsSessionExist(true)
        const checkUser = async () => {
            const sessionCheck = await getSession()
            if (sessionCheck !== null) {
                router.push('/profile')
            } else {
                setIsSessionExist(false)
            }
        }

        checkUser()
    }, [])

    return (
        <>
            {isSessionExist ? (<LoadingPage />) : (
                <main className='fixed md:relative top-0 left-0 w-screen bg-white min-h-screen flex flex-col items-center z-[999] md:z-10 md:w-auto md:pt-32'>
                    <SignInForm />
                </main>
            )}
        </>

    )
}

export default Page