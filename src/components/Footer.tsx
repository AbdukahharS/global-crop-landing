import GlobalcropLogo from '../assets/globalcrop-logo-white.svg'
import Telegram from '../assets/telegram.svg'
import Discord from '../assets/discord.svg'
import Instagram from '../assets/instagram.svg'
import AngleRight from '../assets/angle-right.svg'

const Footer = () => {
  return (
    <footer className='bg-primary text-white flex flex-col items-center py-16 rounded-t-[60px]'>
      <img src={GlobalcropLogo} />
      <div className='flex flex-row mt-16 gap-28'>
        <div className='flex flex-col gap-10'>
          <button className='flex flex-row items-center gap-6'>
            <img src={Telegram} alt='Telegram' />
            <img src={AngleRight} alt='Angle Right' />
          </button>
          <button className='flex flex-row items-center gap-6'>
            <img src={Discord} alt='Discord' />
            <img src={AngleRight} alt='Angle Right' />
          </button>
          <button className='flex flex-row items-center gap-6'>
            <img src={Instagram} alt='Instagram' />
            <img src={AngleRight} alt='Angle Right' />
          </button>
        </div>
        <div className='text-lg font-medium flex flex-col gap-4'>
          <p className='font-semibold'>Главная</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div>
        <div className='text-lg font-medium flex flex-col gap-4'>
          <p className='font-semibold'>О нас</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div>
        <div className='text-lg font-medium flex flex-col gap-4'>
          <p className='font-semibold'>Магазин</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div>
        <div className='text-lg font-medium flex flex-col gap-4'>
          <p className='font-semibold'>Конфиденциальность</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div>
      </div>
      <h2 className='font-bold text-[160px] text-[#FFFFFF12]'>GLOBAL CROP</h2>
    </footer>
  )
}

export default Footer
