import GlobalCropBg from '../assets/globalcrop-bg.svg'
import DataIcon from '../assets/data.png'
import SystemIcon from '../assets/system.png'
import MoneyIcon from '../assets/money.png'

const HowItWorks = () => {
  return (
    <div className='mt-72 relative'>
      <div className='shadow-circle top-[1013px] left-[30px]'></div>
      <div className='shadow-circle top-[313px] left-[46px]'></div>
      <div className='shadow-circle top-[613px] right-[94px]'></div>
      <h2 className='text-center font-semibold text-[32px]'>
        Как работает <span className='text-primary'>Global Crop</span>
      </h2>
      <img
        src={GlobalCropBg}
        alt='Global Crop Background'
        className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10'
      />
      <div className='flex flex-row justify-between items-center gap-20 px-44 mt-52'>
        <div>
          <div className='bg-[#33860008] relative py-14 pr-7 pl-16 rounded-[40px]'>
            <img
              src={DataIcon}
              alt='Data Icon'
              className='h-[320px] w-[282px] absolute top-0 left-0 -translate-2/3'
            />
            <div>
              <span className='text-primary font-medium text-[42px] mr-5'>
                1.
              </span>
              <span className='text-primary font-semibold text-[32px]'>
                Получи подробный отчёт
              </span>
            </div>
            <div>
              <span className='text-transparent font-medium text-[42px] mr-5'>
                1.
              </span>
              <span className='font-medium text-[28px]'>
                Используй его для кредита
              </span>
            </div>
          </div>
          <div className='bg-[#33860008] relative py-14 pr-7 pl-16 rounded-[40px] mt-44'>
            <img
              src={MoneyIcon}
              alt='Money Icon'
              className='h-[283px] w-[250px] absolute bottom-0 left-0 -translate-x-2/3 translate-y-1/2'
            />
            <div>
              <span className='text-primary font-medium text-[42px] mr-5'>
                2.
              </span>
              <span className='text-primary font-semibold text-[32px]'>
                Получи подробный отчёт
              </span>
            </div>
            <div>
              <span className='text-transparent font-medium text-[42px] mr-5'>
                2.
              </span>
              <span className='font-medium text-[28px]'>
                Используй его для кредита
              </span>
            </div>
          </div>
        </div>
        <div className='bg-[#33860008] relative py-14 pl-7 pr-16 rounded-[40px]'>
          <img
            src={SystemIcon}
            alt='System Icon'
            className='h-[290px] w-[290px] absolute top-0 right-0 -translate-y-1/2 translate-x-1/2'
          />
          <div>
            <span className='text-primary font-medium text-[42px] mr-5'>
              2.
            </span>
            <span className='text-primary font-semibold text-[32px]'>
              Получи подробный отчёт
            </span>
          </div>
          <div>
            <span className='text-transparent font-medium text-[42px] mr-5'>
              2.
            </span>
            <span className='font-medium text-[28px]'>
              Используй его для кредита
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
