import GlobalCropBg from '../assets/globalcrop-bg.svg'
import DataIcon from '../assets/data.png'
import SystemIcon from '../assets/system.png'
import MoneyIcon from '../assets/money.png'

const HowItWorks = () => {
  return (
    <div className='mt-32 sm:mt-48 lg:mt-72 relative px-4 sm:px-6'>
      <div className='shadow-circle hidden lg:block top-[1013px] left-[30px]'></div>
      <div className='shadow-circle hidden lg:block top-[313px] left-[46px]'></div>
      <div className='shadow-circle hidden lg:block top-[613px] right-[94px]'></div>
      <h2 className='text-center font-semibold text-2xl sm:text-3xl lg:text-[32px]'>
        Как работает <span className='text-primary'>Global Crop</span>
      </h2>
      <img
        src={GlobalCropBg}
        alt='Global Crop Background'
        className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10 opacity-50 lg:opacity-100 w-[150%] sm:w-full'
      />
      <div className='flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-12 lg:gap-20 px-4 sm:px-8 lg:px-44 mt-16 sm:mt-32 lg:mt-52'>
        <div className='w-full lg:w-auto'>
          <div className='bg-[#33860008] relative py-8 sm:py-10 lg:py-14 pr-4 sm:pr-5 lg:pr-7 pl-8 sm:pl-12 lg:pl-16 rounded-[20px] sm:rounded-[30px] lg:rounded-[40px]'>
            <img
              src={DataIcon}
              alt='Data Icon'
              className='h-[160px] w-[140px] sm:h-[240px] sm:w-[210px] lg:h-[320px] lg:w-[282px] absolute top-0 left-0 -translate-x-1/3 sm:-translate-x-1/2 lg:-translate-2/3 -translate-y-1/4 sm:-translate-y-1/3'
            />
            <div>
              <span className='text-primary font-medium text-2xl sm:text-3xl lg:text-[42px] mr-2 sm:mr-3 lg:mr-5'>
                1.
              </span>
              <span className='text-primary font-semibold text-xl sm:text-2xl lg:text-[32px]'>
                Получи подробный отчёт
              </span>
            </div>
            <div>
              <span className='text-transparent font-medium text-2xl sm:text-3xl lg:text-[42px] mr-2 sm:mr-3 lg:mr-5'>
                1.
              </span>
              <span className='font-medium text-lg sm:text-xl lg:text-[28px]'>
                Используй его для кредита
              </span>
            </div>
          </div>
          <div className='bg-[#33860008] relative py-8 sm:py-10 lg:py-14 pr-4 sm:pr-5 lg:pr-7 pl-8 sm:pl-12 lg:pl-16 rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] mt-16 sm:mt-28 lg:mt-44'>
            <img
              src={MoneyIcon}
              alt='Money Icon'
              className='h-[140px] w-[125px] sm:h-[210px] sm:w-[185px] lg:h-[283px] lg:w-[250px] absolute bottom-0 left-0 -translate-x-1/3 sm:-translate-x-1/2 lg:-translate-x-2/3 translate-y-1/4 sm:translate-y-1/3 lg:translate-y-1/2'
            />
            <div>
              <span className='text-primary font-medium text-2xl sm:text-3xl lg:text-[42px] mr-2 sm:mr-3 lg:mr-5'>
                2.
              </span>
              <span className='text-primary font-semibold text-xl sm:text-2xl lg:text-[32px]'>
                Получи подробный отчёт
              </span>
            </div>
            <div>
              <span className='text-transparent font-medium text-2xl sm:text-3xl lg:text-[42px] mr-2 sm:mr-3 lg:mr-5'>
                2.
              </span>
              <span className='font-medium text-lg sm:text-xl lg:text-[28px]'>
                Используй его для кредита
              </span>
            </div>
          </div>
        </div>
        <div className='bg-[#33860008] relative py-8 sm:py-10 lg:py-14 pl-4 sm:pl-5 lg:pl-7 pr-8 sm:pr-12 lg:pr-16 rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] w-full lg:w-auto'>
          <img
            src={SystemIcon}
            alt='System Icon'
            className='h-[145px] w-[145px] sm:h-[210px] sm:w-[210px] lg:h-[290px] lg:w-[290px] absolute top-0 right-0 -translate-y-1/4 sm:-translate-y-1/3 lg:-translate-y-1/2 translate-x-1/4 sm:translate-x-1/3 lg:translate-x-1/2'
          />
          <div>
            <span className='text-primary font-medium text-2xl sm:text-3xl lg:text-[42px] mr-2 sm:mr-3 lg:mr-5'>
              2.
            </span>
            <span className='text-primary font-semibold text-xl sm:text-2xl lg:text-[32px]'>
              Получи подробный отчёт
            </span>
          </div>
          <div>
            <span className='text-transparent font-medium text-2xl sm:text-3xl lg:text-[42px] mr-2 sm:mr-3 lg:mr-5'>
              2.
            </span>
            <span className='font-medium text-lg sm:text-xl lg:text-[28px]'>
              Используй его для кредита
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
