import Banks from '../assets/banks.png'
import AccurateData from '../assets/accurate-data.png'
import Support from '../assets/support.png'
import Transparency from '../assets/transparency.png'

const Benefits = () => {
  return (
    <div className='pt-48 sm:pt-64 lg:pt-96 w-full overflow-x-hidden relative pb-32 sm:pb-48 lg:pb-64 px-4 sm:px-6'>
      <h2 className='text-center font-semibold text-2xl sm:text-3xl lg:text-[32px]'>
        Преимущества <span className='text-primary'>Global Crop</span>
      </h2>
      <div className='flex flex-col lg:flex-row justify-around gap-8 sm:gap-12 lg:gap-8 mt-16 sm:mt-24 lg:mt-32 px-4 sm:px-8 lg:px-32'>
        <div className='lg:pt-36'>
          <div className='bg-[#33860008] pt-10 sm:pt-12 pl-16 sm:pl-20 lg:pl-24 pb-6 sm:pb-8 pr-6 sm:pr-8 rounded-[25px] sm:rounded-[30px] lg:rounded-[40px] relative w-full lg:w-[670px]'>
            <img
              src={Banks}
              className='absolute top-0 left-0 -translate-x-[35%] sm:-translate-x-[35%] lg:-translate-[45%] -translate-y-[30%] sm:-translate-y-[25%] w-[130px] h-[130px] sm:w-[200px] sm:h-[200px] lg:w-[233px] lg:h-[231px] object-contain rotate-[-4.26deg]'
            />
            <p className='font-semibold text-primary text-xl sm:text-2xl lg:text-[32px]'>Банки</p>
            <p className='font-medium text-lg sm:text-xl lg:text-[28px]'>
              Доверяют нашим данным при выдаче кредитов
            </p>
          </div>
          <span className='font-bold text-6xl sm:text-8xl lg:text-[160px] text-[#33860012] my-4 sm:my-6 lg:my-8 block'>
            GLOBAL
          </span>
          <div className='bg-[#33860008] pt-10 sm:pt-12 pl-16 sm:pl-20 lg:pl-24 pb-6 sm:pb-8 pr-6 sm:pr-8 rounded-[25px] sm:rounded-[30px] lg:rounded-[40px] relative w-full lg:w-[670px]'>
            <img
              src={Transparency}
              className='absolute top-0 left-0 -translate-x-[35%] sm:-translate-x-[35%] lg:-translate-[45%] -translate-y-[30%] sm:-translate-y-[25%] w-[130px] h-[130px] sm:w-[200px] sm:h-[200px] lg:w-[233px] lg:h-[231px] object-contain rotate-[-4.26deg]'
            />
            <p className='font-semibold text-primary text-xl sm:text-2xl lg:text-[32px]'>
              Прозрачность и надёжность
            </p>
            <p className='font-medium text-lg sm:text-xl lg:text-[28px]'>Наша надежность и доверие</p>
          </div>
        </div>
        <div>
          <div className='bg-[#33860008] pt-10 sm:pt-12 pl-6 sm:pl-8 pb-6 sm:pb-8 pr-16 sm:pr-20 lg:pr-24 rounded-[25px] sm:rounded-[30px] lg:rounded-[40px] relative w-full lg:w-[670px]'>
            <img
              src={AccurateData}
              className='absolute top-0 right-0 -translate-y-[30%] sm:-translate-y-[35%] lg:-translate-y-[40%] translate-x-[30%] sm:translate-x-[35%] lg:translate-x-[40%] w-[130px] h-[130px] sm:w-[200px] sm:h-[200px] lg:w-[233px] lg:h-[231px] object-contain rotate-[4.26deg]'
            />
            <p className='font-semibold text-primary text-xl sm:text-2xl lg:text-[32px]'>
              Точные данные
            </p>
            <p className='font-medium text-lg sm:text-xl lg:text-[28px]'>
              Актуальная информация о посевах
            </p>
          </div>
          <span className='font-bold text-6xl sm:text-8xl lg:text-[160px] text-[#33860012] my-4 sm:my-6 lg:my-8 block'>
            CROP
          </span>
          <div className='bg-[#33860008] pt-10 sm:pt-12 pl-6 sm:pl-8 pb-6 sm:pb-8 pr-16 sm:pr-20 lg:pr-24 rounded-[25px] sm:rounded-[30px] lg:rounded-[40px] relative w-full lg:w-[670px]'>
            <img
              src={Support}
              className='absolute top-0 right-0 -translate-y-[30%] sm:-translate-y-[35%] lg:-translate-y-[40%] translate-x-[30%] sm:translate-x-[35%] lg:translate-x-[40%] w-[140px] h-[170px] sm:w-[210px] sm:h-[250px] lg:w-[250px] lg:h-[300px] object-contain rotate-[4.26deg]'
            />
            <p className='font-semibold text-primary text-xl sm:text-2xl lg:text-[32px]'>
              Поддержка 24/7
            </p>
            <p className='font-medium text-lg sm:text-xl lg:text-[28px]'>
              Всегда на связи с нашими клиентами
            </p>
          </div>
        </div>
        <div className='shadow-circle hidden lg:block top-[784px] left-[-34px]'></div>
        <div className='shadow-circle hidden lg:block top-[1234px] left-0'></div>
        <div className='shadow-circle hidden lg:block top-[1234px] right-[27px]'></div>
        <div className='shadow-circle hidden lg:block top-[684px] right-[50px]'></div>
      </div>
    </div>
  )
}

export default Benefits
