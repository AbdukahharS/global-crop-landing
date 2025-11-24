import { useTranslation } from 'react-i18next'
import BG from '../assets/crop.png'
import Banks from '../assets/banks.png'
import AccurateData from '../assets/accurate-data.png'
import Support from '../assets/support.png'
import Transparency from '../assets/transparency.png'
import LooperLeft from '../assets/looper-left.svg'
import LooperRight from '../assets/looper-right.svg'

const HowItWorks = () => {
  const { t } = useTranslation()

  return (
    <div className='relative min-h-screen pt-80 h-fit'>
      <img
        src={LooperLeft}
        alt=''
        className='absolute left-0 bottom-0 translate-y-1/2 -z-[9] hidden lg:block'
      />
      <img
        src={LooperRight}
        alt=''
        className='absolute right-0 bottom-0 translate-y-1/2 -z-[9] hidden lg:block'
      />
      <img
        src={BG}
        alt='Soil Background'
        className='opacity-40 absolute -z-10 w-full min-h-screen h-full top-0 left-0 object-cover'
      />
      <div className='z-10'>
        <h2 className='text-center font-semibold text-2xl sm:text-3xl lg:text-[32px]'>
          {t('howItWorks.title')} <span className='text-primary'>Global Crop</span>
        </h2>
        <div className='flex flex-col lg:flex-row justify-around gap-8 sm:gap-12 lg:gap-8 mt-16 sm:mt-24 lg:mt-32 px-4 sm:px-8 lg:px-32'>
          <div className='lg:pt-16'>
            <div className='bg-[#FFFFFF73] border border-primary pt-10 sm:pt-12 pl-16 sm:pl-20 lg:pl-24 pb-6 sm:pb-8 pr-6 sm:pr-8 rounded-[25px] sm:rounded-[30px] lg:rounded-[40px] relative w-full lg:w-[670px]'>
              <img
                src={Banks}
                className='absolute top-0 left-0 -translate-x-[35%] sm:-translate-x-[35%] lg:-translate-[45%] -translate-y-[30%] sm:-translate-y-[25%] w-[130px] h-[130px] sm:w-[200px] sm:h-[200px] lg:w-[233px] lg:h-[231px] object-contain rotate-[-4.26deg]'
              />
              <p className='font-semibold text-primary text-xl sm:text-2xl lg:text-[32px]'>
                {t('howItWorks.banks.title')}
              </p>
              <p className='font-medium text-lg sm:text-xl lg:text-[28px]'>
                {t('howItWorks.banks.description')}
              </p>
            </div>
            <div className='bg-[#FFFFFF73] border border-primary pt-10 sm:pt-12 pl-16 sm:pl-20 lg:pl-24 pb-6 sm:pb-8 pr-6 sm:pr-8 rounded-[25px] sm:rounded-[30px] lg:rounded-[40px] relative w-full lg:w-[670px] mt-64'>
              <img
                src={Transparency}
                className='absolute top-0 left-0 -translate-x-[35%] sm:-translate-x-[35%] lg:-translate-[45%] -translate-y-[30%] sm:-translate-y-[25%] w-[130px] h-[130px] sm:w-[200px] sm:h-[200px] lg:w-[233px] lg:h-[231px] object-contain rotate-[-4.26deg]'
              />
              <p className='font-semibold text-primary text-xl sm:text-2xl lg:text-[32px]'>
                {t('howItWorks.transparency.title')}
              </p>
              <p className='font-medium text-lg sm:text-xl lg:text-[28px]'>
                {t('howItWorks.transparency.description')}
              </p>
            </div>
          </div>
          <div>
            <div className='bg-[#FFFFFF73] border border-primary pt-10 sm:pt-12 pl-6 sm:pl-8 pb-6 sm:pb-8 pr-16 sm:pr-20 lg:pr-24 rounded-[25px] sm:rounded-[30px] lg:rounded-[40px] relative w-full lg:w-[670px]'>
              <img
                src={AccurateData}
                className='absolute top-0 right-0 -translate-y-[30%] sm:-translate-y-[35%] lg:-translate-y-[40%] translate-x-[30%] sm:translate-x-[35%] lg:translate-x-[40%] w-[130px] h-[130px] sm:w-[200px] sm:h-[200px] lg:w-[233px] lg:h-[231px] object-contain rotate-[4.26deg]'
              />
              <p className='font-semibold text-primary text-xl sm:text-2xl lg:text-[32px]'>
                {t('howItWorks.accurateData.title')}
              </p>
              <p className='font-medium text-lg sm:text-xl lg:text-[28px]'>
                {t('howItWorks.accurateData.description')}
              </p>
            </div>
            <div className='bg-[#FFFFFF73] border border-primary pt-10 sm:pt-12 pl-6 sm:pl-8 pb-6 sm:pb-8 pr-16 sm:pr-20 lg:pr-24 rounded-[25px] sm:rounded-[30px] lg:rounded-[40px] relative w-full lg:w-[670px] mt-44'>
              <img
                src={Support}
                className='absolute top-0 right-0 -translate-y-[30%] sm:-translate-y-[35%] lg:-translate-y-[40%] translate-x-[30%] sm:translate-x-[35%] lg:translate-x-[40%] w-[140px] h-[170px] sm:w-[210px] sm:h-[250px] lg:w-[250px] lg:h-[300px] object-contain rotate-[4.26deg]'
              />
              <p className='font-semibold text-primary text-xl sm:text-2xl lg:text-[32px]'>
                {t('howItWorks.support.title')}
              </p>
              <p className='font-medium text-lg sm:text-xl lg:text-[28px]'>
                {t('howItWorks.support.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background:
            'linear-gradient(360deg, #FFFFFF 12.61%, rgba(255, 255, 255, 0) 100%)',
        }}
        className='w-full h-[20vh] absolute left-0 bottom-0 -z-10'
      ></div>
    </div>
  )
}

export default HowItWorks
