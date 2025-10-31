import BG from '../assets/start.png'

const Start = () => {
  return (
    <div className='relative my-40 pt-48 sm:pt-64 lg:pt-96 overflow-x-hidden pb-40 sm:pb-60 lg:pb-80 px-4 sm:px-6'>
      <img
        src={BG}
        className='absolute top-0 left-0 w-screen h-full -z-10 opacity-[13%]'
      />
      <div
        className='w-screen h-[20vh] absolute top-0 left-0 z-[-9]'
        style={{
          background:
            'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>
      <div
        className='w-screen h-[20vh] absolute bottom-0 left-0 z-[-9]'
        style={{
          background:
            'linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>
      <h2 className='font-semibold text-2xl sm:text-3xl lg:text-4xl text-center px-4'>
        Начни <span className='text-primary'>анализ</span> своей земли уже
        сегодня
      </h2>
      <p className='text-center font-medium text-lg sm:text-xl mt-4 sm:mt-5 px-4'>
        Бесплатный первый отчёт для новых пользователей
      </p>
      <button className='bg-primary text-white font-semibold text-base sm:text-lg py-2.5 px-8 sm:px-10 lg:px-12 rounded-full mx-auto block mt-10 sm:mt-12 lg:mt-16 w-full sm:w-auto'>
        Отправить участок на анализ
      </button>
    </div>
  )
}

export default Start
