const Hero = () => {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-w-[930px] px-4 sm:px-6 w-full'>
      <h2 className='font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl/normal'>
        <span className='text-primary font-bold'>Global Crop</span> — анализируй
        землю, развивай урожай, получай финансирование
      </h2>
      <p className="text-base sm:text-lg lg:text-xl/normal max-w-2xl text-center mx-auto mt-6 sm:mt-8 lg:mt-10 font-medium px-2">
        Мы помогаем <span className="text-primary">фермерам</span> узнать потенциал своих участков и облегчить доступ
        к кредитам
      </p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 mt-8 sm:mt-12 lg:mt-[60px] justify-center items-center">
        <button className="bg-primary text-white text-base sm:text-lg font-semibold w-full sm:w-[280px] lg:w-[310px] py-2.5 rounded-full">Как это работает ?</button>
        <button className="bg-white border-2 border-primary text-primary text-base sm:text-lg font-semibold w-full sm:w-[280px] lg:w-[310px] py-2.5 rounded-full">Проверить свой участок</button>
      </div>
    </div>
  )
}

export default Hero
