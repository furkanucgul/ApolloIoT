'use client'
import { useState } from "react"

interface DesktopButtonsProps {
    isSignIn: boolean,
    setIsSignIn: (isSignIn: boolean) => void;
}

const SignInDesktopButtons = ({ isSignIn, setIsSignIn }: DesktopButtonsProps) => {

    return (
        <>
            <button
                onClick={() => setIsSignIn(true)}
                className={`w-full py-3 border-slate-300 border-b-0 
                ${isSignIn ? "z-[20] bg-white border text-[#ff6000]" : "bg-[#f2f2f2]"}
                `}
            >
                Giriş Yap
            </button>
            <button
                onClick={() => setIsSignIn(false)}
                className={`w-full py-3 border-slate-300 border-b-0 
                ${isSignIn ? "bg-[#f2f2f2]" : "z-[20] bg-white border text-[#ff6000]"}
                `}
            >
                Üye Ol
            </button>
            <div className="bg-slate-300 h-[1px] w-full absolute bottom-0 left-0" />
        </>
    )
}

export default SignInDesktopButtons