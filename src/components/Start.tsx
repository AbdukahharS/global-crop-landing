const Start = () => {
  return (
    <div className='relative pt-48 sm:pt-64 lg:pt-96 overflow-x-hidden pb-40 sm:pb-60 lg:pb-80 px-4 sm:px-6'>
      <div className='shadow-circle top-[150px] sm:top-[250px] lg:top-[350px] right-0 sm:right-[-5px] lg:right-[-8px]'></div>
      <div className='shadow-circle top-[400px] sm:top-[600px] lg:top-[800px] right-[50%] sm:right-[40%] lg:right-[427px]'></div>
      <div className='shadow-circle top-[350px] sm:top-[550px] lg:top-[750px] left-[50%] sm:left-[40%] lg:left-[475px]'></div>
      <div className='shadow-circle top-[180px] sm:top-[280px] lg:top-[400px] left-0 sm:left-[-20px] lg:left-[-43px]'></div>
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
