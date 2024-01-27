import Image from 'next/image'

const HomeHead = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center lg:justify-between'>
            <div className='flex flex-col gap-5 lg:w-1/2'>
                <h1 className='text-5xl lg:text-7xl font-[600]'>
                    Enerji Yönetiminde Yeni Bir Çağ
                </h1>
                <p className='text-[#6b686e] text-lg'>
                    Enerji Platformu olan Apollo IoT, yapay zeka teknolojisi kullanarak enerji maliyetlerinizi düşürme imkanı sunar.
                </p>
                <div className='relative'>
                    <input
                        className='outline-none px-3 py-3 sm:px-5 sm:py-5 w-full border border-[#e1e1e1] rounded-full pr-[180px] sm:text-lg'
                        type="text"
                        placeholder='E-Posta'
                    />
                    <button className='bg-[#191919] px-3 py-3 sm:py-5 text-white rounded-full absolute right-0 sm:text-lg'>
                        10 Gün Ücretsiz Dene
                    </button>
                </div>
            </div>
            <div className='lg:w-1/2'>
                <Image
                    src="/dashboard-image.webp"
                    width={578}
                    height={570}
                    alt='hero_image'
                />
            </div>
        </div>
    )
}

export default HomeHead