const Hero = () => {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-w-[930px] px-4'>
      <h2 className='font-semibold text-4xl/normal'>
        <span className='text-primary font-bold'>Global Crop</span> — анализируй
        землю, развивай урожай, получай финансирование
      </h2>
      <p className="text-xl/normal max-w-2xl text-center mx-auto mt-10 font-medium">
        Мы помогаем <span className="text-primary">фермерам</span> узнать потенциал своих участков и облегчить доступ
        к кредитам
      </p>
      <div className="flex gap-7 mt-[60px] justify-center">
        <button className="bg-primary text-white text-lg font-semibold w-[310px] py-2.5 rounded-full">Как это работает ?</button>
        <button className="bg-white border-2 border-primary text-primary text-lg font-semibold w-[310px] py-2.5 rounded-full">Проверить свой участок</button>
      </div>
    </div>
  )
}

export default Hero
