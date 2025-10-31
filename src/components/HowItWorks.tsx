import BG from '../assets/crop.png'
import DataIcon from '../assets/data.png'
import SystemIcon from '../assets/system.png'
import MoneyIcon from '../assets/money.png'

const HowItWorks = () => {
  return (
    <div className='relative pt-80'>
      <img
        src={BG}
        alt='Soil Background'
        className='opacity-40 absolute -z-10 w-full h-[90%] top-[10%] object-contain'
      />
      <h2 className='font-medium text-[32px] text-center'>
        Как это работает <span className='text-primary'>Global Crop</span>
      </h2>
      <div className='mt-[74px] flex flex-row justify-center gap-16'>
        <div className='flex flex-col justify-between bg-[#FFFFFF73] w-[440px] items-center pt-11 pb-32 rounded-[40px] px-6 border border-primary gap-24 relative'>
          <h3 className='text-primary font-semibold text-4xl text-center'>
            Внести данные о своем участке
          </h3>
          <p className='font-medium text-[28px]'>Координаты, площадь</p>
          <div></div>
          <img
            src={DataIcon}
            alt='Data Icon'
            className='absolute left-0 bottom-0 w-[268px] translate-y-1/4 -translate-x-1/4'
          />
        </div>
        <div className='flex flex-col justify-between bg-[#FFFFFF73] w-[440px] items-center pt-11 pb-32 rounded-[40px] px-6 border border-primary gap-24 relative'>
          <h3 className='text-primary font-semibold text-4xl text-center'>
            Внести данные о своем участке
          </h3>
          <p className='font-medium text-[28px]'>Координаты, площадь</p>
          <div></div>
          <img
            src={SystemIcon}
            alt='Data Icon'
            className='absolute left-0 bottom-0 w-[268px] translate-y-1/4 -translate-x-1/4'
          />
        </div>
        <div className='flex flex-col justify-between bg-[#FFFFFF73] w-[440px] items-center pt-11 pb-32 rounded-[40px] px-6 border border-primary gap-24 relative'>
          <h3 className='text-primary font-semibold text-4xl text-center'>
            Внести данные о своем участке
          </h3>
          <p className='font-medium text-[28px]'>Координаты, площадь</p>
          <div></div>
          <img
            src={MoneyIcon}
            alt='Data Icon'
            className='absolute left-0 bottom-0 w-[268px] translate-y-1/4 -translate-x-1/4'
          />
        </div>
      </div>
      <div
        style={{
          background:
            'linear-gradient(360deg, #FFFFFF 12.61%, rgba(255, 255, 255, 0) 100%)',
        }}
        className='w-full h-[20vh] mt-20'
      ></div>
    </div>
  )
}

export default HowItWorks
