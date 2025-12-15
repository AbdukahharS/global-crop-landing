import { useTranslation } from 'react-i18next'
import Banks from '../assets/banks.png'
import AccurateData from '../assets/accurate-data.png'
import Support from '../assets/support.png'
import Transparency from '../assets/transparency.png'

const HowItWorks = () => {
  const { t } = useTranslation()

  return (
    <div className='relative min-h-screen pt-40 sm:pt-60 lg:pt-80 pb-20 sm:pb-32 lg:pb-40'>
      <div className='z-10'>
        <div className='flex flex-col lg:flex-row justify-around gap-8 sm:gap-12 lg:gap-8 mt-12 sm:mt-20 lg:mt-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32'>
          <div className='flex flex-col gap-8 sm:gap-12 lg:gap-28'>
            <div className='bg-[#FFFFFF73] border border-primary pt-8 sm:pt-10 lg:pt-12 pl-12 sm:pl-16 md:pl-20 lg:pl-24 pb-6 sm:pb-8 pr-6 sm:pr-8 rounded-[25px] sm:rounded-[30px] lg:rounded-[40px] relative w-full max-w-full lg:max-w-[670px]'>
              <img
                src={Banks}
                className='absolute top-0 left-0 -translate-x-[30%] sm:-translate-x-[35%] lg:-translate-x-[50%] -translate-y-[25%] sm:-translate-y-[30%] w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[233px] lg:h-[231px] object-contain rotate-[-4.26deg]'
              />
              <p className='font-semibold text-primary text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px]'>
                {t('howItWorks.banks.title')}
              </p>
              <p className='font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] mt-2'>
                {t('howItWorks.banks.description')}
              </p>
            </div>

            <div className='bg-[#FFFFFF73] border border-primary pt-8 sm:pt-10 lg:pt-12 pl-6 sm:pl-8 pb-6 sm:pb-8 pr-12 sm:pr-16 md:pr-20 lg:pr-24 rounded-[25px] sm:rounded-[30px] lg:rounded-[40px] relative w-full max-w-full lg:max-w-[670px]'>
              <img
                src={Support}
                className='absolute top-0 left-0 -translate-x-[35%] sm:-translate-x-[40%] lg:-translate-x-[60%] -translate-y-[25%] sm:-translate-y-[45%] w-[120px] h-[140px] sm:w-[180px] sm:h-[210px] md:w-[210px] md:h-[250px] lg:w-[250px] lg:h-[300px] object-contain rotate-[4.26deg]'
              />
              <p className='font-semibold text-primary text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px]'>
                {t('howItWorks.support.title')}
              </p>
              <p className='font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] mt-2'>
                {t('howItWorks.support.description')}
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-8 sm:gap-12 lg:gap-28'>
            <div className='bg-[#FFFFFF73] border border-primary pt-8 sm:pt-10 lg:pt-12 pl-12 sm:pl-16 md:pl-20 lg:pl-24 pb-6 sm:pb-8 pr-6 sm:pr-8 rounded-[25px] sm:rounded-[30px] lg:rounded-[40px] relative w-full max-w-full lg:max-w-[670px]'>
              <img
                src={Transparency}
                className='absolute top-0 right-0 -translate-y-[25%] sm:-translate-y-[30%] lg:-translate-y-[35%] translate-x-[30%] sm:translate-x-[35%] lg:translate-x-[40%] w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[233px] lg:h-[231px] object-contain rotate-[-4.26deg]'
              />
              <p className='font-semibold text-primary text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px]'>
                {t('howItWorks.transparency.title')}
              </p>
              <p className='font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] mt-2'>
                {t('howItWorks.transparency.description')}
              </p>
            </div>
            <div className='bg-[#FFFFFF73] border border-primary pt-8 sm:pt-10 lg:pt-12 pl-6 sm:pl-8 pb-6 sm:pb-8 pr-12 sm:pr-16 md:pr-20 lg:pr-24 rounded-[25px] sm:rounded-[30px] lg:rounded-[40px] relative w-full max-w-full lg:max-w-[670px]'>
              <img
                src={AccurateData}
                className='absolute top-0 right-0 -translate-y-[25%] sm:-translate-y-[30%] lg:-translate-y-[35%] translate-x-[30%] sm:translate-x-[35%] lg:translate-x-[40%] w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[233px] lg:h-[231px] object-contain rotate-[4.26deg]'
              />
              <p className='font-semibold text-primary text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px]'>
                {t('howItWorks.accurateData.title')}
              </p>
              <p className='font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] mt-2'>
                {t('howItWorks.accurateData.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
