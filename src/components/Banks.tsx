import LooperLeft from '../assets/looper-left.svg'
import LooperRight from '../assets/looper-right.svg'
import AgrobankLogo from '../assets/agrobank-logo-full.svg'
import AngleRight from '../assets/angle-right.svg'

const Banks = () => {
  return (
    <div className='relative pb-10'>
      <img
        src={LooperLeft}
        alt=''
        className='absolute left-0 top-1/2 transform -translate-y-1/2 -z-10'
      />
      <img
        src={LooperRight}
        alt=''
        className='absolute right-0 top-1/2 transform -translate-y-1/3 -z-10'
      />
      <h2 className='text-center font-semibold text-[32px]'>
        Для <span className='text-primary'>банков</span> и{' '}
        <span className='text-primary'>партнеров</span>
      </h2>
      <div className='bg-[#33860008] py-10 px-16 w-full max-w-[894px] mx-auto rounded-[30px] mt-20'>
        <p className='font-semibold text-2xl text-center leading-normal'>
          <span className='text-primary'>Global Crop</span> предоставляет
          объективные данные для оценки сельхозземель и минимизации рисков при
          выдаче кредитов.” Можно добавить
        </p>
      </div>
      <img src={AgrobankLogo} alt='' className='mx-auto mt-16' />
      <button className='bg-primary text-white font-semibold text-xl flex flex-row items-center px-14 py-[18px] rounded-full gap-6 mt-20 mx-auto'>
        Связаться с отделом партнерств
        <img src={AngleRight} alt='' />
      </button>
    </div>
  )
}

export default Banks
