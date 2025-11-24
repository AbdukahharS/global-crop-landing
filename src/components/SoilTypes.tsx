import { useTranslation } from 'react-i18next'
import BG from '../assets/soil-bg.png'
import Clouds from '../assets/clouds.png'
import Img1 from '../assets/img-1.png'
import { useState } from 'react'

const SoilTypes = () => {
  const { t } = useTranslation()
  const [activeStep, setActiveStep] = useState(0)

  const steps = t('steps', { returnObjects: true }) as Array<{
    title: string
    description: string
  }>

  return (
    <div className='relative'>
      <img
        src={BG}
        alt='Soil Types Background'
        className='-z-10 w-screen h-screen object-cover'
      />
      <div
        className='absolute inset-0 w-full top-0 h-[20vh]'
        style={{
          background:
            'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>
      <div className='z-10 absolute max-w-7xl -translate-x-1/2 left-1/2 w-full top-0 pt-5'>
        <h2 className='text-primary font-semibold text-[32px] text-center'>
          {t('soilTypes.title')}
        </h2>
        <div className='h-[80vh] flex flex-row gap-12 w-full mt-16'>
          <div className='flex-1 flex flex-col h-auto gap-6'>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`bg-white/60 py-6 px-8 rounded-[30px] border-[1.5px] border-[#80B361] cursor-pointer transition-all duration-300 ${
                  index === activeStep
                    ? 'flex-1 shadow-[0_0_15px_0_#3386004D]'
                    : ''
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className='flex items-center gap-5'>
                  <div className='bg-primary size-[38px] rounded-full text-white font-semibold text-[22px] flex items-center justify-center'>
                    {index + 1}
                  </div>
                  <h3 className='font-semibold text-primary text-[22px]'>
                    {step.title}
                  </h3>
                </div>
                <p
                  className={`transition-[max-height,margin-top] duration-400 overflow-hidden text-lg font-medium will-change-[margin,max-height] ${
                    index === activeStep ? 'mt-5 max-h-96' : 'max-h-0 mt-0'
                  }`}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className='flex-1 w-full h-full border-[1.5px] border-primary bg-[#EEF5FC] rounded-[40px] overflow-hidden relative'>
            <img
              src={Img1}
              alt='Img1'
              className='absolute inset-0 w-full h-auto top-1/2 -translate-y-1/2 object-cover bg-transparent'
            />
          </div>
        </div>
      </div>
      <img
        src={Clouds}
        alt='Clouds'
        className='absolute w-full h-auto bottom-0 left-0 translate-y-[50%] z-[1]'
      />
    </div>
  )
}

export default SoilTypes
