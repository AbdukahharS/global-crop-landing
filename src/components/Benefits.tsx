import Banks from '../assets/banks.png'
import AccurateData from '../assets/accurate-data.png'
import Support from '../assets/support.png'
import Transparency from '../assets/transparency.png'

const Benefits = () => {
  return (
    <div className='pt-96 w-full overflow-x-hidden relative pb-64'>
      <h2 className='text-center font-semibold text-[32px]'>
        Преимущества <span className='text-primary'>Global Crop</span>
      </h2>
      <div className='flex flex-row justify-around gap-8 mt-32 px-32'>
        <div className='pt-36'>
          <div className='bg-[#33860008] pt-12 pl-24 pb-8 pr-8 rounded-[40px] relative w-[670px]'>
            <img
              src={Banks}
              className='absolute top-0 left-0 -translate-[45%] w-[233px] h-[231px] object-contain rotate-[-4.26deg]'
            />
            <p className='font-semibold text-primary text-[32px]'>Банки</p>
            <p className='font-medium text-[28px]'>
              Доверяют нашим данным при выдаче кредитов
            </p>
          </div>
          <span className='font-bold text-[160px] text-[#33860012] mt-8'>
            GLOBAL
          </span>
          <div className='bg-[#33860008] pt-12 pl-24 pb-8 pr-8 rounded-[40px] relative w-[670px]'>
            <img
              src={Transparency}
              className='absolute top-0 left-0 -translate-[45%] w-[233px] h-[231px] object-contain rotate-[-4.26deg]'
            />
            <p className='font-semibold text-primary text-[32px]'>
              Прозрачность и надёжность
            </p>
            <p className='font-medium text-[28px]'>Наша надежность и доверие</p>
          </div>
        </div>
        <div>
          <div className='bg-[#33860008] pt-12 pl-8 pb-8 pr-24 rounded-[40px] relative w-[670px]'>
            <img
              src={AccurateData}
              className='absolute top-0 right-0 -translate-y-[40%] translate-x-[40%] w-[233px] h-[231px] object-contain rotate-[4.26deg]'
            />
            <p className='font-semibold text-primary text-[32px]'>
              Точные данные
            </p>
            <p className='font-medium text-[28px]'>
              Актуальная информация о посевах
            </p>
          </div>
          <span className='font-bold text-[160px] text-[#33860012] mt-8'>
            CROP
          </span>
          <div className='bg-[#33860008] pt-12 pl-8 pb-8 pr-24 rounded-[40px] relative w-[670px]'>
            <img
              src={Support}
              className='absolute top-0 right-0 -translate-y-[40%] translate-x-[40%] w-[250px] h-[300px] object-contain rotate-[4.26deg]'
            />
            <p className='font-semibold text-primary text-[32px]'>
              Поддержка 24/7
            </p>
            <p className='font-medium text-[28px]'>
              Всегда на связи с нашими клиентами
            </p>
          </div>
        </div>
        <div className='shadow-circle top-[784px] left-[-34px]'></div>
        <div className='shadow-circle top-[1234px] left-0'></div>
        <div className='shadow-circle top-[1234px] right-[27px]'></div>
        <div className='shadow-circle top-[684px] right-[50px]'></div>
      </div>
    </div>
  )
}

export default Benefits
