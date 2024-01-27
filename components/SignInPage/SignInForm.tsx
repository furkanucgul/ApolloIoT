'use client'
import React, { useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import GoogleIcon from '@mui/icons-material/Google';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import SignInButtons from '@/components/SignInPage/SignInButtons';
import SignInDesktopButtons from '@/components/SignInPage/SignInDesktopButtons';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { CircularProgress } from '@mui/material';


const SignInForm = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [isSignIn, setIsSignIn] = useState(true)
    const [email, setEmail] = useState("")
    const [company, setCompany] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };



    console.log(isSignIn)

    const handleSignUp = async (e: any) => {
        e.preventDefault();
        setLoading(true)
        try {
            const res = await fetch('/api/user', {
                method: "POST",
                body: JSON.stringify({
                    email,
                    password,
                    company
                })
            })

            if (res?.ok) {
                setCompany('')
                setPassword('')
                setIsSignIn(true)
            } else {
                console.log('giris basarisiz')
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const handleSignIn = async (e: any) => {
        e.preventDefault();
        setLoading(true)
        try {
            const res = await signIn('credentials', {
                email,
                password,
                redirect: false
            })

            if (res?.error) {
                setPassword("")
                toast.error(`Girdiğiniz bilgiler yanlış.`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            if (res?.ok) {
                toast.success(`Giriş başarılı, Hoşgeldiniz!`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                return router.push('/profile')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='md:hidden w-screen bg-gradient-to-b from-[#ff5b51] to-[#ff6a30] text-white'>
                <div className='flex items-center justify-center relative pt-3'>
                    <img
                        width={138}
                        height={32}
                        src="https://www.apolloiot.com/_next/static/media/apollo-logo.79978355.svg"
                        alt="logo"
                        className='mt-3'
                    />
                    <Link href="/" className='absolute top-5 right-3'>
                        <CloseIcon fontSize='large' />
                    </Link>
                </div>
                <div className='flex gap-3 justify-center items-center mt-5 px-10'>
                    <SignInButtons
                        isSignIn={isSignIn}
                        setIsSignIn={setIsSignIn}
                    />
                </div>
            </div>
            <div className='hidden md:block'>
                <h2 className='text-2xl text-center'>
                    Merhaba,
                </h2>
                <h3 className='text-slate-800 text-center'>
                    Apollo IoT’a giriş yap veya hesap oluştur, indirimleri kaçırma!
                </h3>
            </div>
            <div className='hidden md:flex gap-2 justify-center items-center mt-5 w-full -mb-1 bg-white z-10 relative'>
                <SignInDesktopButtons
                    isSignIn={isSignIn}
                    setIsSignIn={setIsSignIn}
                />
            </div>
            <div className='w-full'>
                <div className='flex flex-col gap-3 border border-slate-300 w-full px-5 md:px-7 py-10'>
                    <form
                        onSubmit={
                            isSignIn ? handleSignIn : handleSignUp
                        }
                        className='flex flex-col gap-3'
                    >
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                        />
                        {isSignIn == false && (
                            <TextField
                                required
                                id="outlined-required"
                                label="Firma İsmi"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                inputProps={{ maxLength: 15 }}
                            />
                        )}
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Şifre</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Şifre"
                                required
                            />
                        </FormControl>

                        <button
                            className='hover:text-[#ff6000] underline pb-1 ml-auto text-sm'
                        >
                            Şifremi Unuttum
                        </button>

                        <button
                            disabled={loading}
                            className={`w-full py-3 font-semibold text-white bg-[#ff6000] rounded-md flex items-center gap-3 justify-center ${loading && "bg-[#ff6200bc]"}`}
                        >
                            {loading && (
                                <CircularProgress size={30} />
                            )}
                            {isSignIn ? (
                                <span>Giriş Yap</span>
                            ) : (
                                <span>Üye Ol</span>
                            )}
                        </button>
                    </form>


                    <div className='flex items-center gap-5'>
                        <button className='flex gap-3 items-center px-3 py-2 w-full border border-slate-300 rounded-md'>
                            <div>
                                <FacebookIcon color='info' fontSize='large' />
                            </div>
                            <div className='flex flex-col items-start'>
                                <span className='text-sm'>
                                    Facebook
                                </span>
                                <span className='text-[11px] text-slate-600'>
                                    ile bağlan
                                </span>
                                <span className='hidden text-[11px] text-slate-600'>
                                    ile giriş yap
                                </span>
                            </div>
                        </button>

                        <button className='flex gap-3 items-center px-3 py-2 w-full border border-slate-300 rounded-md'>
                            <div>
                                <GoogleIcon color='error' fontSize='large' />
                            </div>
                            <div className='flex flex-col items-start'>
                                <span className='text-sm'>
                                    Google
                                </span>
                                <span className='text-[11px] text-slate-600'>
                                    ile bağlan
                                </span>
                                <span className='hidden text-[11px] text-slate-600'>
                                    ile giriş yap
                                </span>
                            </div>
                        </button>
                    </div>

                    <div className='text-xs text-center mt-2 text-slate-600'>
                        Üye olmadan verilen siparişlerin takibi için {" "}
                        <span className='cursor-pointer hover:text-[#ff6000] underline text-slate-700'>
                            tıklayınız.
                        </span>
                    </div>

                    <div className='text-xs text-center mt-2 text-slate-600'>
                        *Verileriniz sadece sizin cihaziniza kaydediliyor.
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignInForm