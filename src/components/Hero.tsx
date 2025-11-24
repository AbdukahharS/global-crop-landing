const Hero = () => {
  return (
    <>
      <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 text-center w-full max-w-[90%] lg:max-w-[80%] px-4 sm:px-6'>
        <h2 className='font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[38px] lg:mx-20 xl:mx-40'>
          <span className='text-primary font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px]'>
            Global Crop
          </span>{' '}
          — қишлоқ хўжалиги маҳсулотларини етиштиришда замонавий
          технологиялардан фойдаланиш тизими.
        </h2>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-[28px] w-full text-center block mt-4 sm:mt-6 lg:mt-8 xl:mt-10 font-semibold px-2'>
          <span className='text-primary font-bold'>Global Crop</span> кишлок
          хужалигида мухим карорларни кабул килишда тахлилий маълумотларни
          такдим этувчи тизимдир. Биз қишлоқ хўжалигида фазовий спектрал
          маълумотларга асосланган ва сунъий интеллектдан фойдаланган холдаги
          ечимларни ишлаб чиқишга ихтисослашган тизим хисобланамиз.
        </p>
      </div>
      <div
        className='py-4 px-4 sm:py-5 sm:px-6 lg:py-7 lg:px-8 rounded-xl sm:rounded-2xl lg:rounded-[30px] w-[90%] sm:w-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl text-primary font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-[28px] absolute left-1/2 -translate-x-1/2 bottom-[10vh] sm:bottom-[15vh] lg:bottom-[20vh] translate-y-1/2 z-10 text-center'
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #338600 268.95%)',
        }}
      >
        Биз билан бирга ер майдонлари ва ҳосил мониторингини мобил қурилмангиз
        орқали юқори аниқликда амалга оширинг.
      </div>
    </>
  )
}

export default Hero
