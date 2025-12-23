import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import item1 from '../assets/item1.webp'
import item2 from '../assets/item2.webp'
import item3 from '../assets/item3.webp'
import item4 from '../assets/item4.webp'
import item5 from '../assets/item5.webp'
import item1Lat from '../assets/item1 lat.webp'
import item2Lat from '../assets/item2 lat.webp'
import item3Lat from '../assets/item3 lat.webp'
import item4Lat from '../assets/item4 lat.webp'
import item5Lat from '../assets/item5 lat.webp'
import Img1 from '../assets/feature1.webp'
import Img2 from '../assets/feature2.webp'
import Img3 from '../assets/feature3.webp'
import Img4 from '../assets/feature4.webp'
import Img5 from '../assets/feature5.webp'
import Img6 from '../assets/feature6.webp'
import Img7 from '../assets/feature7.webp'
import Img8 from '../assets/feature8.webp'
import Img9 from '../assets/feature9.webp'
import Img1Lat from '../assets/feature1 lat.webp'
import Img2Lat from '../assets/feature2 lat.webp'
import Img3Lat from '../assets/feature3 lat.webp'
import Img4Lat from '../assets/feature4 lat.webp'
import Img5Lat from '../assets/feature5 lat.webp'
import Img6Lat from '../assets/feature6 lat.webp'
import Img7Lat from '../assets/feature7 lat.webp'
import Img8Lat from '../assets/feature8 lat.webp'
import Img9Lat from '../assets/feature9 lat.webp'
import ChartIcon from '../assets/Chart.svg'
import CloudSunIcon from '../assets/Cloud Sun.svg'
import InboxLineIcon from '../assets/Inbox Line.svg'
import MapIcon from '../assets/Map.svg'
import PieChartIcon from '../assets/Pie Chart 2.svg'
import SatelliteIcon from '../assets/Satellite.svg'
import UserCircleIcon from '../assets/User Circle.svg'
import MapPointWaveIcon from '../assets/Map Point Wave.svg'

const Benefits = () => {
  const { t, i18n } = useTranslation()
  const [activeStep, setActiveStep] = useState(0)

  const isLatinLocale = i18n.language === 'en' || i18n.language === 'uz-lat'
  const images = isLatinLocale
    ? [Img1Lat, Img2Lat, Img3Lat, Img4Lat, Img5Lat, Img6Lat, Img7Lat, Img9Lat, Img8Lat]
    : [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img9, Img8]

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
  const itemImages = isLatinLocale
    ? [item1Lat, item2Lat, item3Lat, item4Lat, item5Lat]
    : [item1, item2, item3, item4, item5]

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
    <div id="about" className='relative min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20'>
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
      <div id="technologies" className='mx-auto max-w-[1480px] mt-32 sm:mt-40 lg:mt-52'>
        <h2 className='font-medium text-xl sm:text-2xl md:text-[28px] lg:text-[32px] text-center px-4' dangerouslySetInnerHTML={{ __html:  t('benefits.features.title')}}>
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
          <div className='flex-1 min-h-[400px] border-[1.5px] border-primary bg-[#EEF5FC] rounded-3xl sm:rounded-[40px] overflow-hidden relative'>
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
