import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import BG from '../assets/soil-bg.png'
import Clouds from '../assets/clouds.png'
import Img1 from '../assets/img-1.png'
import Img2 from '../assets/img-2.png'
import Img3 from '../assets/img-3.png'
import Img4 from '../assets/img-4.png'
import Img5 from '../assets/img-5.png'
import Img6 from '../assets/img-6.png'

const images = [Img1, Img2, Img3, Img4, Img5, Img6]

const SoilTypes = () => {
  const { t } = useTranslation()
  const [activeStep, setActiveStep] = useState(0)

  const steps = t('steps', { returnObjects: true }) as Array<{
    title: string
    description: string
  }>

  return (
    <div className='relative min-h-screen'>
      <img
        src={BG}
        alt='Soil Types Background'
        className='-z-10 w-screen h-screen object-cover absolute inset-0'
      />
      <div
        className='absolute inset-0 w-full top-0 h-[20vh]'
        style={{
          background:
            'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>
      <div className='z-10 relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-5 sm:py-8 lg:py-12'>
        <h2 className='text-primary font-semibold text-xl sm:text-2xl md:text-[28px] lg:text-[32px] text-center'>
          {t('soilTypes.title')}
        </h2>
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-12 w-full mt-8 sm:mt-12 lg:mt-16 lg:h-[75vh] lg:min-h-[500px]'>
          <div className='flex-1 flex flex-col h-auto gap-4 sm:gap-6'>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`bg-white/60 py-4 px-5 sm:py-6 sm:px-8 rounded-2xl sm:rounded-[30px] border-[1.5px] border-[#80B361] cursor-pointer transition-all duration-300 ${
                  index === activeStep
                    ? 'shadow-[0_0_15px_0_#3386004D]'
                    : ''
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className='flex items-center gap-3 sm:gap-5'>
                  <div className='bg-primary size-8 sm:size-[38px] rounded-full text-white font-semibold text-lg sm:text-[22px] flex items-center justify-center flex-shrink-0'>
                    {index + 1}
                  </div>
                  <h3 className='font-semibold text-primary text-base sm:text-xl lg:text-[22px]'>
                    {step.title}
                  </h3>
                </div>
                <p
                  className={`transition-[max-height,margin-top] duration-400 overflow-hidden text-sm sm:text-base lg:text-lg font-medium will-change-[margin,max-height] ${
                    index === activeStep ? 'mt-3 sm:mt-5 max-h-96' : 'max-h-0 mt-0'
                  }`}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className='flex-none lg:flex-1 h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto w-full border-[1.5px] border-primary bg-[#EEF5FC] rounded-3xl sm:rounded-[40px] overflow-hidden relative'>
            <img
              src={images[activeStep]}
              alt={`Img${activeStep + 1}`}
              className='absolute inset-0 w-full h-auto top-1/2 -translate-y-1/2 object-cover bg-transparent'
            />
          </div>
        </div>
      </div>
      <img
        src={Clouds}
        alt='Clouds'
        className='absolute w-full h-auto bottom-0 left-0 translate-y-[50%] z-[1] pointer-events-none'
      />
    </div>
  )
}

export default SoilTypes
