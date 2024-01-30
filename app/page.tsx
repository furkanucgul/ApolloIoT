import BrandSlide from '@/components/HomePage/BrandSlide';
import HomeHead from '@/components/HomePage/HomeHead';
import Link from 'next/link';

const page = () => {
  return (
    <main className='flex flex-col px-4 sm:px-6 lg:px-16 font_manrope pt-20 max-w-[1500px]'>
      <HomeHead />
      <BrandSlide />

      <section className='flex items-center justify-center'>
        <Link
          href="/profile"
          className='bg-gradient-to-r from-blue-800 to-blue-500 px-7 py-4 rounded-md text-white font-semibold w-fit'
        >
          Enerjini Hemen Takip Et!
        </Link>
      </section>
    </main>

  )
}

export default page