import LooperLeft from '../assets/looper-left.svg'
import LooperRight from '../assets/looper-right.svg'
import AgrobankLogo from '../assets/agrobank-logo-full.svg'
import AngleRight from '../assets/angle-right.svg'

const Banks = () => {
  return (
    <div className='relative pb-10 px-4 sm:px-6'>
      <img
        src={LooperLeft}
        alt=''
        className='absolute left-0 top-1/2 transform -translate-y-1/2 -z-10 hidden lg:block'
      />
      <img
        src={LooperRight}
        alt=''
        className='absolute right-0 top-1/2 transform -translate-y-1/3 -z-10 hidden lg:block'
      />
      <h2 className='text-center font-semibold text-2xl sm:text-3xl lg:text-[32px] px-4'>
        Для <span className='text-primary'>банков</span> и{' '}
        <span className='text-primary'>партнеров</span>
      </h2>
      <div className='bg-[#33860008] py-6 sm:py-8 lg:py-10 px-6 sm:px-10 lg:px-16 w-full max-w-[894px] mx-auto rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] mt-12 sm:mt-16 lg:mt-20'>
        <p className='font-semibold text-lg sm:text-xl lg:text-2xl text-center leading-normal'>
          <span className='text-primary'>Global Crop</span> предоставляет
          объективные данные для оценки сельхозземель и минимизации рисков при
          выдаче кредитов." Можно добавить
        </p>
      </div>
      <img src={AgrobankLogo} alt='' className='mx-auto mt-10 sm:mt-12 lg:mt-16 w-auto h-12 sm:h-16 lg:h-auto' />
      <button className='bg-primary text-white font-semibold text-base sm:text-lg lg:text-xl flex flex-row items-center justify-center px-8 sm:px-12 lg:px-14 py-3 sm:py-4 lg:py-[18px] rounded-full gap-4 sm:gap-5 lg:gap-6 mt-12 sm:mt-16 lg:mt-20 mx-auto w-full sm:w-auto'>
        <span className='text-center'>Связаться с отделом партнерств</span>
        <img src={AngleRight} alt='' className='w-4 h-4 sm:w-5 sm:h-5' />
      </button>
    </div>
  )
}

export default Banks
