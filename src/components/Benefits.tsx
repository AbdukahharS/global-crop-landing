import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import BG1 from '../assets/benefits.png'
import BG2 from '../assets/bg2.png'
import BG3 from '../assets/bg3.png'
import BG4 from '../assets/bg4.png'
import item1 from '../assets/item1.png'
import item2 from '../assets/item2.png'
import item3 from '../assets/item3.png'
import item4 from '../assets/item4.png'
import item5 from '../assets/item5.png'
import Img1 from '../assets/feature1.png'
import Img2 from '../assets/feature2.png'
import Img3 from '../assets/feature3.png'
import Img4 from '../assets/feature4.png'
import Img5 from '../assets/feature5.png'
import Img6 from '../assets/feature6.png'
import Img7 from '../assets/feature7.png'
import Img8 from '../assets/feature8.png'
import Img9 from '../assets/feature9.webp'
import ChartIcon from '../assets/Chart.svg'
import CloudSunIcon from '../assets/Cloud Sun.svg'
import InboxLineIcon from '../assets/Inbox Line.svg'
import MapIcon from '../assets/Map.svg'
import PieChartIcon from '../assets/Pie Chart 2.svg'
import SatelliteIcon from '../assets/Satellite.svg'
import UserCircleIcon from '../assets/User Circle.svg'
import MapPointWaveIcon from '../assets/Map Point Wave.svg'

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img9, Img8]

const Benefits = () => {
  const { t } = useTranslation()
  const [activeStep, setActiveStep] = useState(0)

  const icons = [
    SatelliteIcon,
    CloudSunIcon,
    MapPointWaveIcon,
    MapIcon,
    InboxLineIcon,
    ChartIcon,
    CloudSunIcon,
    PieChartIcon,
    UserCircleIcon,
  ]

  const steps = (
    t('benefits.features.list', { returnObjects: true }) as Array<{
      title: string
      description: string
    }>
  ).map((step, index) => ({
    Icon: icons[index],
    title: step.title,
    description: step.description,
    image: images[index],
  }))

  const itemImages = [item1, item2, item3, item4, item5]

  const items = (
    t('benefits.items', { returnObjects: true }) as Array<{
      title: string
      description: string
    }>
  ).map((item, index) => ({
    title: item.title,
    description: item.description,
    img: itemImages[index],
  }))

  return (
    <div className='relative min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20'>
      <img
        src={BG1}
        alt='Benefits Background'
        className='absolute inset-0 object-cover w-full h-1/4 -z-10 opacity-20 top-0'
      />
      <img
        src={BG2}
        alt='Benefits Background'
        className='absolute inset-0 object-cover w-full h-1/4 -z-10 opacity-20 top-1/4'
      />
      <img
        src={BG3}
        alt='Benefits Background'
        className='absolute inset-0 object-cover w-full h-1/4 -z-10 opacity-20 top-1/2'
      />
      <img
        src={BG4}
        alt='Benefits Background'
        className='absolute inset-0 object-cover w-full h-1/4 -z-10 opacity-20 top-3/4'
      />
      <div
        className='w-screen h-[20vh] absolute top-0 left-0 z-[-9]'
        style={{
          background:
            'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>
      <div
        className='w-screen h-[20vh] absolute top-1/4 -translate-y-full left-0 z-[-9]'
        style={{
          background:
            'linear-gradient(3600deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>
      <div
        className='w-screen h-[20vh] absolute top-1/4 left-0 z-[-9]'
        style={{
          background:
            'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>
      <div
        className='w-screen h-[20vh] absolute top-1/2 -translate-y-full left-0 z-[-9]'
        style={{
          background:
            'linear-gradient(3600deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>
      <div
        className='w-screen h-[20vh] absolute top-1/2 left-0 z-[-9]'
        style={{
          background:
            'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>
      <div
        className='w-screen h-[20vh] absolute top-3/4 -translate-y-full left-0 z-[-9]'
        style={{
          background:
            'linear-gradient(3600deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>
      <div
        className='w-screen h-[20vh] absolute top-3/4 left-0 z-[-9]'
        style={{
          background:
            'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>
      <div
        className='w-screen h-[20vh] absolute bottom-0 left-0 z-[-9]'
        style={{
          background:
            'linear-gradient(3600deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>
      <div className='mx-auto max-w-[1480px] grid grid-cols-1 md:grid-cols-2 auto-rows-auto md:auto-rows-[300px] lg:auto-rows-[364px] gap-x-6 sm:gap-x-12 lg:gap-x-24 gap-y-8 sm:gap-y-12 lg:gap-y-16 mt-40 sm:mt-60 lg:mt-80 xl:mt-96'>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div className='border border-primary rounded-3xl sm:rounded-[40px] bg-white/70 py-5 px-6 sm:py-7 sm:px-9 flex flex-col min-h-[250px] md:min-h-0'>
              <h4 className='text-primary text-xl sm:text-2xl lg:text-[28px] xl:text-[32px] font-semibold'>
                {item.title}
              </h4>
              <div className='font-medium text-base sm:text-lg lg:text-xl xl:text-[22px] flex-1 flex items-center mt-3 sm:mt-4'>
                {item.description}
              </div>
            </div>
            <div className='border border-primary rounded-3xl sm:rounded-[40px] overflow-hidden relative min-h-[250px] md:min-h-0'>
              <img
                src={item.img}
                alt={item.title}
                className='absolute inset-0 object-cover w-full h-full'
              />
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className='mx-auto max-w-[1480px] mt-32 sm:mt-40 lg:mt-52'>
        <h2 className='font-medium text-xl sm:text-2xl md:text-[28px] lg:text-[32px] text-center px-4'>
          {t('benefits.features.title')}{' '}
          <span className='font-semibold text-primary'>
            {t('benefits.features.title').includes('Мониторинга Посевов')
              ? ''
              : ''}
          </span>
        </h2>
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-12 w-full mt-8 sm:mt-12 lg:mt-16'>
          <div className='flex-1 flex flex-col gap-4 sm:gap-6 lg:h-[900px] xl:h-[950px]'>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`bg-white/60 py-2 px-2.5 sm:py-4 sm:px-6 rounded-2xl sm:rounded-[30px] border-[1.5px] border-[#80B361] cursor-pointer transition-all duration-300 ${
                  index === activeStep
                    ? 'flex-1 shadow-[0_0_15px_0_#3386004D]'
                    : 'flex-initial'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className='flex items-center gap-3 sm:gap-5'>
                  <img
                    src={step.Icon}
                    alt={step.title}
                    className='w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0'
                  />
                  <h3 className='font-semibold text-primary text-base sm:text-lg lg:text-xl xl:text-[22px]'>
                    {step.title}
                  </h3>
                </div>
                <p
                  className={`transition-[max-height,margin-top] duration-400 overflow-hidden text-sm sm:text-base lg:text-lg font-medium will-change-[margin,max-height] ${
                    index === activeStep
                      ? 'mt-3 sm:mt-5 max-h-96'
                      : 'max-h-0 mt-0'
                  }`}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className='flex-none lg:flex-1 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[740px] border-[1.5px] border-primary bg-[#EEF5FC] rounded-3xl sm:rounded-[40px] overflow-hidden relative'>
            <img
              src={images[activeStep]}
              alt={`Img${activeStep + 1}`}
              className='absolute inset-0 w-full h-auto top-1/2 -translate-y-1/2 object-cover bg-transparent'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
