'use client'
import { useState } from "react"


interface DesktopButtonsProps {
    isSignIn: boolean,
    setIsSignIn: (isSignIn: boolean) => void;
}

const SignInButtons = ({ isSignIn, setIsSignIn }: DesktopButtonsProps) => {

    return (
        <>
            <button
                onClick={() => setIsSignIn(true)}
                className={`w-full py-3 rounded-t-lg
                ${isSignIn ? "bg-white text-[#ff6000]" : "bg-white/30"}
                `}
            >
                Giriş Yap
            </button>
            <button
                onClick={() => setIsSignIn(false)}
                className={`w-full py-3 rounded-t-lg
                ${isSignIn ? "bg-white/30" : "bg-white text-[#ff6000]"}
                `}
            >
                Üye Ol
            </button>
        </>
    )
}

export default SignInButtons