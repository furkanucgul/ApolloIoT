'use client'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
    const [dividerOpen, setDividerOpen] = useState(false)
    const path = usePathname()
    const { data: session } = useSession();

    const closeDialog = () => {
        setDividerOpen(false)
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSignOut = () => {
        signOut({ callbackUrl: 'http://localhost:3000' })
    }

    return (
        <nav>
            {/* NAVIGATION  */}
            <div
                className="fixed top-0 left-0 flex justify-center backdrop-blur-lg px-5 md:px-12 py-5 z-[900] items-center transition-all delay-150 h-[70px] border-b border-[#e1e1e1]"
                style={dividerOpen && {
                    width: `calc(100% - 320px)`,
                    marginLeft: `320px`,
                } || { width: '100%', marginLeft: '0px' }}
            >
                <div className='flex justify-between items-center max-w-[1500px] w-full overflow-hidden'>
                    <Link
                        href="/"
                        className='flex items-center gap-1'
                    >
                        <img
                            className='w-[70px] lg:w-[120px] object-contain'
                            src="https://www.apolloiot.com/_next/static/media/apollo-logo.79978355.svg"
                            alt="logo"
                        />
                    </Link>
                    <div className='hidden lg:flex items-center gap-5 text-lg'>
                        <Link
                            href="/"
                            onClick={closeDialog}
                            className={`${path == "/" && "text-blue-700 border-b-2 border-blue-700"}`}
                        >
                            Ana Sayfa
                        </Link>
                        <Link
                            href="/profile"
                            onClick={closeDialog}
                            className={`${path == "/profile" && "text-blue-700 border-b-2 border-blue-700"}`}
                        >
                            Enerji Tüketimim
                        </Link>
                        <Link
                            href="/explore"
                            onClick={closeDialog}
                            className={`${path == "/explore" && "text-blue-700 border-b-2 border-blue-700"}`}
                        >
                            Tüm Firmalar
                        </Link>
                    </div>
                    <div className='flex items-center gap-5'>
                        <button
                            onClick={() => {
                                setDividerOpen((prev: boolean) => !prev)
                            }}
                            className='lg:hidden '
                        >
                            {dividerOpen && (
                                <CloseIcon fontSize='large' className='swirl-in-fwd' />
                            ) || (
                                    <MenuIcon fontSize='large' className='swirl-in-fwd' />
                                )}
                        </button>
                        <button
                            onClick={() => setOpen(true)}
                            className='hidden lg:block'
                        >
                            <PhoneIphoneIcon />
                        </button>
                        {session ? (
                            <button
                                onClick={handleSignOut}
                                className='hidden lg:flex px-3 py-2 border-2 rounded-full border-black'
                            >
                                Çıkış Yap
                            </button>
                        ) : (
                            <Link
                                href="/sign-in"
                                className='hidden lg:flex px-3 py-2 border-2 rounded-full border-black'
                            >
                                Giriş Yap
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            {/* DIVIDER */}
            <div className={`z-[999] overflow-auto transition-all delay-150 w-0 fixed h-screen left-0 top-0 bg-white ${dividerOpen && "w-full md:w-[320px]"} hideScroll`}>
                {dividerOpen && (
                    <div>
                        <div className='h-[70px] flex items-center justify-between md:justify-end border-b border-slate-300 px-3'>
                            <div className='flex md:hidden items-center gap-5'>
                                <img
                                    className='w-[70px] object-contain'
                                    src="https://www.apolloiot.com/_next/static/media/apollo-logo.79978355.svg"
                                    alt="logo"
                                />
                            </div>
                            <button
                                onClick={closeDialog}
                            >
                                <ArrowBackIosIcon />
                            </button>
                        </div>

                        {/* MOBILE DIVIDER CONTENT */}

                        <div className='lg:hidden flex flex-col gap-5 px-5 py-3'>
                            <div className='grid grid-cols-2 gap-3'>
                                <img
                                    className='h-[100px] object-cover rounded-md'
                                    src="https://www.apolloiot.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdashboard-image.3c35a8e3.webp&w=3840&q=75"
                                    alt="pics"
                                />
                                <img
                                    className='h-[100px] object-cover rounded-md'
                                    src="https://www.apolloiot.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fiso-min.1b4ac58b.gif&w=1920&q=75"
                                    alt="pics"
                                />
                            </div>
                            <div className='w-full h-[1px] bg-slate-300' />
                            <div className='flex flex-col items-start gap-5 text-lg'>
                                <Link
                                    href="/"
                                    onClick={closeDialog}
                                    className={`${path == "/" && "text-blue-700 border-b-2 border-blue-700"}`}
                                >
                                    Ana Sayfa
                                </Link>
                                <Link
                                    href="/profile"
                                    onClick={closeDialog}
                                    className={`${path == "/profile" && "text-blue-700 border-b-2 border-blue-700"}`}
                                >
                                    Enerji Tüketimim
                                </Link>
                                <Link
                                    href="/explore"
                                    onClick={closeDialog}
                                    className={`${path == "/explore" && "text-blue-700 border-b-2 border-blue-700"}`}
                                >
                                    Tüm Firmalar
                                </Link>
                            </div>
                            <div className='w-full h-[1px] bg-slate-300' />
                            <div>
                                <h2
                                    className='text-lg'
                                >
                                    Bizi Takip Edin
                                </h2>
                                <div className='flex gap-3 mt-1'>
                                    <a
                                        href='https://www.instagram.com/furkanucgul.dev/'
                                        target='_blank'
                                    >
                                        Instagram
                                    </a>
                                    <a
                                        href='https://www.facebook.com/profile.php?id=61552285312163'
                                        target='_blank'
                                    >
                                        Facebook
                                    </a>
                                    <a
                                        href='https://twitter.com/furkanucguljs'
                                        target='_blank'
                                    >
                                        Twitter
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <DialogTitle>
                    <div className='flex justify-between'>
                        <h2>
                            Apollo Mobil Uygulamasını İndir
                        </h2>
                        <button
                            onClick={handleClose}
                        >
                            <CloseIcon />
                        </button>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <div className='text-center'>
                        Ekrandaki QR kodunu telefon kamerana okut
                    </div>
                    <div className='relative w-full min-h-[350px]'>
                        <Image
                            src="https://www.apolloiot.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmobile-app-qr.5252d13a.webp&w=1080&q=75"
                            fill
                            className='object-contain'
                            alt='qr'
                        />
                    </div>
                    <div className="flex flex-col items-center text-center gap-y-4 relative z-[1]">
                        <span className="font-manrope font-medium text-[19px] tracking-[0.029px]  ">
                            Ya da uygulama mağazasından direkt indir
                        </span>
                        <div className="flex flex-row flex-wrap gap-x-5">
                            <a
                                href="https://apps.apple.com/tr/app/apollo-iot/id1662834954"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    alt="app-store"
                                    loading="lazy"
                                    width={601}
                                    height={196}
                                    decoding="async"
                                    data-nimg={1}
                                    className="w-[120px] object-contain rounded-[8px] hover:opacity-[0.8]"
                                    src="https://www.apolloiot.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapp-store-icon.ee7b9b8a.png&w=640&q=75"
                                    style={{ color: "transparent" }}
                                />
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.iotapollo.apollo"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    alt="google-play"
                                    loading="lazy"
                                    width={666}
                                    height={196}
                                    decoding="async"
                                    data-nimg={1}
                                    className="w-[134px] object-contain rounded-[8px] hover:opacity-[0.8]"
                                    src="https://www.apolloiot.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay-store-icon.ba820a9a.png&w=750&q=75"
                                    style={{ color: "transparent" }}
                                />
                            </a>
                        </div>
                    </div>

                </DialogContent>
            </Dialog>
        </nav >
    )
}

export default Navbar
