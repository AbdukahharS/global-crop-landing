import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='absolute top-[30%] sm:top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 text-center w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[80%] px-3 sm:px-4 md:px-6'>
        <h2 className='font-semibold text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-[38px] lg:mx-10 xl:mx-40'>
          <span className='text-primary font-extrabold text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-[52px]'>
            Global Crop
          </span>{' '}
          — {t('hero.title')}
        </h2>
        <p className='text-xs sm:text-sm md:text-lg lg:text-xl xl:text-[28px] w-full text-center block mt-3 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10 font-semibold px-1 sm:px-2'>
          <span className='text-primary font-bold'>Global Crop</span>{' '}
          {t('hero.description')}
        </p>
      </div>
      <button
        className='py-3 px-5 sm:py-4 sm:px-6 md:py-5 md:px-7 lg:py-7 lg:px-8 rounded-xl sm:rounded-2xl lg:rounded-[30px] w-[85%] sm:w-[90%] md:w-auto md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-5xl text-primary font-semibold text-xs sm:text-sm md:text-lg lg:text-xl xl:text-[28px] absolute left-1/2 -translate-x-1/2 bottom-[20vh] sm:bottom-[10vh] md:bottom-[15vh] lg:bottom-[20vh] translate-y-1/2 z-10 text-center hover:opacity-90 transition-opacity'
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #338600 268.95%)',
        }}
      >
        {t('hero.cta')}
      </button>
    </>
  )
}

export default Hero
