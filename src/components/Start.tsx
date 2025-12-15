import { useTranslation } from 'react-i18next'

const Start = () => {
  const { t } = useTranslation()

  return (
    <div className='relative my-40 pt-40 sm:pt-64 lg:pt-96 overflow-x-hidden pb-36 sm:pb-60 lg:pb-80 px-4 sm:px-6'>
      <h2 className='font-semibold text-2xl sm:text-3xl lg:text-4xl text-center px-4'>
        {t('start.title').split('анализ').map((part, i, arr) =>
          i < arr.length - 1 ? (
            <span key={i}>
              {part}
              <span className='text-primary'>
                {t('start.title').includes('анализ')
                  ? 'анализ'
                  : t('start.title').includes('analysis')
                  ? 'analysis'
                  : 'tahlil'}
              </span>
            </span>
          ) : (
            part
          )
        )}
      </h2>
      <p className='text-center font-medium text-lg sm:text-xl mt-4 sm:mt-5 px-4'>
        {t('start.subtitle')}
      </p>
      <button className='bg-primary text-white font-semibold text-base sm:text-lg py-2.5 px-8 sm:px-10 lg:px-12 rounded-full mx-auto block mt-10 sm:mt-12 lg:mt-16 w-full sm:w-auto'>
        {t('start.cta')}
      </button>
    </div>
  )
}

export default Start
