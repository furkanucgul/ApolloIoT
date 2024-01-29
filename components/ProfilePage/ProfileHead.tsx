'use client'
import { useState } from "react";
import AddEnergy from "./AddEnergy";
import { useSession } from "next-auth/react";


const ProfileHead = ({ totalConsumption, isSubmitted, setIsSubmitted }: any) => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className='flex flex-col lg:flex-row items-center lg:justify-between py-10'>
        <div className='flex flex-col gap-5 lg:w-1/2'>
          <h1 className='text-3xl font-[500]'>
            Profil Sayfanıza Hoş Geldiniz!
          </h1>
          <p className='text-[#6b686e] text-lg'>
            Aşağıdaki grafiklerden enerji tüketiminizi takip edebilir. Enerji Tüketiminizi Güncelleyebilir. Profil Sayfanızı Buradan Takip Edebilirsiniz. Yapay zeka destekli enerji takip sistemimiz işinizi kolaylaştırır. Enerji giderlerinizde 60% oranında düşüş sağlar.
          </p>
          <h2>
            {session?.user?.company} şirketi'nin toplam tüketimi: <span className="font-semibold">{totalConsumption}vh</span>
          </h2>
        </div>
        <div className='mt-5 lg:mt-0 lg:w-1/2 flex justify-center'>
          <button
            onClick={handleClickOpen}
            className='bg-gradient-to-r from-blue-800 to-blue-500 px-7 py-4 rounded-md text-white font-semibold'
          >
            Yeni Enerji Gir
          </button>
        </div>
      </div>
      <AddEnergy
        open={open}
        setOpen={setOpen}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
      />
    </>
  )
}

export default ProfileHead