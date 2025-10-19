import TypesBg from '../assets/types.png'
import Laptop from '../assets/laptop.png'
import AngleRight from '../assets/angle-right.svg'
import Clouds from '../assets/clouds.png'

const Analyse = () => {
  return (
    <div className='mt-56 relative'>
      <h2 className='text-center font-semibold text-[32px]'>
        Примеры анализа <span className='text-primary'>участка</span>
      </h2>
      <div className='mt-32 flex flex-row justify-end gap-10 items-center'>
        <div className='w-[815px] relative'>
          <img
            src={TypesBg}
            alt='Типы почвы'
            className='absolute top-1/2 left-1/2 -translate-1/2 -z-20'
          />
          <h3 className='font-semibold text-[32px]'>Типы почвы</h3>
          <div className='mt-7'>
            <div className='bg-[#3386000D] py-5 px-10 rounded-[20px] w-[335px] text-center ml-auto font-semibold text-[22px] text-primary'>
              Подходящие культуры
            </div>
            <div className='bg-[#3386000D] py-5 px-10 rounded-[20px] w-[335px] text-center font-semibold text-[22px] text-primary'>
              Уровень плодородия
            </div>
            <div className='bg-[#3386000D] py-5 px-10 rounded-[20px] w-[335px] text-center ml-auto font-semibold text-[22px] text-primary'>
              Прогноз урожайности
            </div>
            <div className='bg-[#3386000D] py-5 px-10 rounded-[20px] w-[335px] text-center font-semibold text-[22px] text-primary'>
              Риски засухи/эрозии
            </div>
          </div>
          <button className='bg-primary text-white flex flex-row items-center font-semibold text-xl py-4 px-12 rounded-full mt-32 gap-6'>
            Получить отчет по своему участвку <img src={AngleRight} />
          </button>
        </div>
        <div className='w-[815px] relative'>
          <img
            src={Laptop}
            alt='Лаптоп'
            className='absolute top-0 left-0 -translate-y-1/2'
          />
        </div>
      </div>
      <img
        src={Clouds}
        alt='Clouds'
        className='absolute top-[112%] -translate-y-1/2 -z-10'
      />
    </div>
  )
}

export default Analyse
