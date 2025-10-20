import GlobalcropLogo from '../assets/globalcrop-logo-white.svg'
import Telegram from '../assets/telegram.svg'
import Discord from '../assets/discord.svg'
import Instagram from '../assets/instagram.svg'
import AngleRight from '../assets/angle-right.svg'

const Footer = () => {
  return (
    <footer className='bg-primary text-white flex flex-col items-center py-10 sm:py-12 lg:py-16 rounded-t-[30px] sm:rounded-t-[45px] lg:rounded-t-[60px] px-4 sm:px-6'>
      <img src={GlobalcropLogo} className='h-12 sm:h-16 lg:h-auto' />
      <div className='flex flex-col lg:flex-row mt-10 sm:mt-12 lg:mt-16 gap-8 sm:gap-12 lg:gap-28 w-full lg:w-auto'>
        <div className='flex flex-row lg:flex-col gap-6 sm:gap-8 lg:gap-10 justify-center'>
          <button className='flex flex-row items-center gap-3 sm:gap-4 lg:gap-6'>
            <img src={Telegram} alt='Telegram' className='w-8 h-8 sm:w-10 sm:h-10 lg:w-auto lg:h-auto' />
            <img src={AngleRight} alt='Angle Right' className='w-4 h-4 lg:w-auto lg:h-auto' />
          </button>
          <button className='flex flex-row items-center gap-3 sm:gap-4 lg:gap-6'>
            <img src={Discord} alt='Discord' className='w-8 h-8 sm:w-10 sm:h-10 lg:w-auto lg:h-auto' />
            <img src={AngleRight} alt='Angle Right' className='w-4 h-4 lg:w-auto lg:h-auto' />
          </button>
          <button className='flex flex-row items-center gap-3 sm:gap-4 lg:gap-6'>
            <img src={Instagram} alt='Instagram' className='w-8 h-8 sm:w-10 sm:h-10 lg:w-auto lg:h-auto' />
            <img src={AngleRight} alt='Angle Right' className='w-4 h-4 lg:w-auto lg:h-auto' />
          </button>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 lg:gap-28 text-center lg:text-left'>
          <div className='text-base sm:text-lg font-medium flex flex-col gap-3 sm:gap-4'>
            <p className='font-semibold'>Главная</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>
          <div className='text-base sm:text-lg font-medium flex flex-col gap-3 sm:gap-4'>
            <p className='font-semibold'>О нас</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>
          <div className='text-base sm:text-lg font-medium flex flex-col gap-3 sm:gap-4'>
            <p className='font-semibold'>Магазин</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>
          <div className='text-base sm:text-lg font-medium flex flex-col gap-3 sm:gap-4'>
            <p className='font-semibold'>Конфиденциальность</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>
        </div>
      </div>
      <h2 className='font-bold text-5xl sm:text-7xl lg:text-[160px] text-[#FFFFFF12] mt-8 sm:mt-12 lg:mt-0'>GLOBAL CROP</h2>
    </footer>
  )
}

export default Footer
