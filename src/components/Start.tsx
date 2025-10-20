const Start = () => {
  return (
    <div className='relative pt-96 overflow-x-hidden pb-80'>
      <div className='shadow-circle top-[350px] right-[-8px]'></div>
      <div className='shadow-circle top-[800px] right-[427px]'></div>
      <div className='shadow-circle top-[750px] left-[475px]'></div>
      <div className='shadow-circle top-[400px] left-[-43px]'></div>
      <h2 className='font-semibold text-4xl text-center'>
        Начни <span className='text-primary'>анализ</span> своей земли уже
        сегодня
      </h2>
      <p className='text-center font-medium text-xl mt-5'>
        Бесплатный первый отчёт для новых пользователей
      </p>
      <button className='bg-primary text-white font-semibold text-lg py-2.5 px-12 rounded-full mx-auto block mt-16'>
        Отправить участок на анализ
      </button>
    </div>
  )
}

export default Start
