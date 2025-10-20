import TypesBg from '../assets/types.png'
import Laptop from '../assets/laptop.png'
import AngleRight from '../assets/angle-right.svg'
import Clouds from '../assets/clouds.png'

const Analyse = () => {
  return (
    <div className='mt-32 sm:mt-40 lg:mt-56 relative pl-4 sm:pl-6'>
      <h2 className='text-center font-semibold text-2xl sm:text-3xl lg:text-[32px]'>
        Примеры анализа <span className='text-primary'>участка</span>
      </h2>
      <div className='mt-16 sm:mt-24 lg:mt-32 flex flex-col lg:flex-row justify-center lg:justify-end gap-6 sm:gap-8 lg:gap-10 items-center'>
        <div className='w-full lg:w-[815px] relative'>
          <img
            src={TypesBg}
            alt='Типы почвы'
            className='absolute top-1/2 left-1/2 -translate-1/2 -z-20 opacity-50 lg:opacity-100'
          />
          <h3 className='font-semibold text-2xl sm:text-3xl lg:text-[32px] text-center lg:text-left'>Типы почвы</h3>
          <div className='mt-5 sm:mt-6 lg:mt-7 space-y-3 sm:space-y-4'>
            <div className='bg-[#3386000D] py-4 sm:py-5 px-6 sm:px-8 lg:px-10 rounded-[15px] sm:rounded-[20px] w-full sm:w-[280px] lg:w-[335px] text-center ml-auto font-semibold text-lg sm:text-xl lg:text-[22px] text-primary'>
              Подходящие культуры
            </div>
            <div className='bg-[#3386000D] py-4 sm:py-5 px-6 sm:px-8 lg:px-10 rounded-[15px] sm:rounded-[20px] w-full sm:w-[280px] lg:w-[335px] text-center font-semibold text-lg sm:text-xl lg:text-[22px] text-primary'>
              Уровень плодородия
            </div>
            <div className='bg-[#3386000D] py-4 sm:py-5 px-6 sm:px-8 lg:px-10 rounded-[15px] sm:rounded-[20px] w-full sm:w-[280px] lg:w-[335px] text-center ml-auto font-semibold text-lg sm:text-xl lg:text-[22px] text-primary'>
              Прогноз урожайности
            </div>
            <div className='bg-[#3386000D] py-4 sm:py-5 px-6 sm:px-8 lg:px-10 rounded-[15px] sm:rounded-[20px] w-full sm:w-[280px] lg:w-[335px] text-center font-semibold text-lg sm:text-xl lg:text-[22px] text-primary'>
              Риски засухи/эрозии
            </div>
          </div>
          <button className='bg-primary text-white flex flex-row items-center justify-center font-semibold text-base sm:text-lg lg:text-xl py-3 sm:py-4 px-8 sm:px-10 lg:px-12 rounded-full mt-12 sm:mt-20 lg:mt-32 gap-4 sm:gap-6 w-full sm:w-auto mx-auto lg:mx-0'>
            <span className='text-center'>Получить отчет по своему участвку</span> <img src={AngleRight} className='w-4 h-4 sm:w-5 sm:h-5' />
          </button>
        </div>
        <div className='w-full lg:w-[815px] relative mt-8 lg:mt-0'>
          <img
            src={Laptop}
            alt='Лаптоп'
            className='relative lg:absolute top-0 left-0 lg:-translate-y-1/2 w-full h-auto'
          />
        </div>
      </div>
      <img
        src={Clouds}
        alt='Clouds'
        className='absolute top-[112%] -translate-y-1/2 -z-10 w-full h-auto hidden lg:block'
      />
    </div>
  )
}

export default Analyse
