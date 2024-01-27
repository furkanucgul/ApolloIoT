import BrandSlide from '@/components/HomePage/BrandSlide';
import HomeHead from '@/components/HomePage/HomeHead';

const page = () => {
  return (
    <main className='flex flex-col px-4 sm:px-6 lg:px-16 font_manrope pt-20 max-w-[1500px]'>
      <HomeHead />
      <BrandSlide />
    </main>

  )
}

export default page