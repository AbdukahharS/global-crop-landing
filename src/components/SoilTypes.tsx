import BG from '../assets/soil-bg.png'
import Laptop from '../assets/laptop.png'
import Clouds from '../assets/clouds.png'

const SoilTypes = () => {
  return (
    <div className='relative'>
      <img
        src={BG}
        alt='Soil Types Background'
        className='-z-10 w-screen h-auto'
      /> 
      <div
        className='absolute inset-0 w-full top-0 h-[20vh]'
        style={{
          background:
            'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>
      <div className='absolute top-1/5 left-0'>
        <h2 className='font-semibold text-[32px] pl-[10vw]'>Типы почвы</h2>
        <div className='mt-[10%]'>
          <div className='bg-[#FFFFFF80] w-[335px] py-[18px] rounded-[20px] font-semibold text-[22px] text-center text-primary ml-[5vw]'>
            Уровень плодородия
          </div>
          <div className='bg-[#FFFFFF80] w-[335px] py-[18px] rounded-[20px] font-semibold text-[22px] text-center text-primary ml-[30vw]'>
            Подходящие культуры
          </div>
          <div className='bg-[#FFFFFF80] w-[335px] py-[18px] rounded-[20px] font-semibold text-[22px] text-center text-primary ml-[10vw]'>
            Типы эройзии и почвы
          </div>
          <div className='bg-[#FFFFFF80] w-[335px] py-[18px] rounded-[20px] font-semibold text-[22px] text-center text-primary ml-[35vw]'>
            Прогноз урожайности
          </div>
        </div>
      </div>
      <img src={Laptop} alt="Laptop" className='absolute w-[40vw] h-auto bottom-1/2 translate-y-3/5 right-0 z-[1]' />
      <img src={Clouds} alt="Clouds" className='absolute w-full h-auto bottom-0 left-0 translate-y-full z-[0] inset-0' />
    </div>
  )
}

export default SoilTypes
