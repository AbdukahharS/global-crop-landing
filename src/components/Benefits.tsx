import React, { useState } from 'react'
import BG1 from '../assets/benefits.png'
import BG2 from '../assets/bg2.png'
import BG3 from '../assets/bg3.png'
import BG4 from '../assets/bg4.png'
import item1 from '../assets/item1.png'
import item2 from '../assets/item2.png'
import item3 from '../assets/item3.png'
import item4 from '../assets/item4.png'
import item5 from '../assets/item5.png'
import Img1 from '../assets/feature1.png'
import ChartIcon from '../assets/Chart.svg'
import CloudSunIcon from '../assets/Cloud Sun.svg'
import InboxLineIcon from '../assets/Inbox Line.svg'
import MapIcon from '../assets/Map.svg'
import PieChartIcon from '../assets/Pie Chart 2.svg'
import SatelliteIcon from '../assets/Satellite.svg'
import UserCircleIcon from '../assets/User Circle.svg'
import MapPointWaveIcon from '../assets/Map Point Wave.svg'

const Benefits = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      Icon: SatelliteIcon,
      title: 'Дистанционный Спутниковый Мониторинг Состояния Полей',
      desciption:
        'Следите за состоянием растительности в разных зонах, не выезжая в поле. Используйте 10 готовых вегетационных индексов для принятия разумных решений. Благодаря регулярным и высокоточным снимкам Sentinel-2 и PlanetScope без облаков и теней, вы сможете отслеживать посевы в реальном времени с разрешением до 3 м, что позволит быстро реагировать на любые угрозы.',
      image: Img1,
    },
    {
      Icon: CloudSunIcon,
      title: 'Фазы роста',
      desciption:
        'Загрузите файл с границами участков или нарисуйте их вручную. Укажите информацию о текущем и предыдущих сезонах',
      image: Img1,
    },
    {
      Icon: MapPointWaveIcon,
      title: 'Карта рисков',
      desciption:
        'Загрузите файл с границами участков или нарисуйте их вручную. Укажите информацию о текущем и предыдущих сезонах',
      image: Img1,
    },
    {
      Icon: MapIcon,
      title: 'Карты Дифференцированного Внесения',
      desciption:
        'Загрузите файл с границами участков или нарисуйте их вручную. Укажите информацию о текущем и предыдущих сезонах',
      image: Img1,
    },
    {
      Icon: InboxLineIcon,
      title: 'Журнал Работ',
      desciption:
        'Загрузите файл с границами участков или нарисуйте их вручную. Укажите информацию о текущем и предыдущих сезонах',
      image: Img1,
    },
    {
      Icon: ChartIcon,
      title: 'Оценка Урожайности',
      desciption:
        'Загрузите файл с границами участков или нарисуйте их вручную. Укажите информацию о текущем и предыдущих сезонах',
      image: Img1,
    },
    {
      Icon: CloudSunIcon,
      title: 'Анализ Погоды',
      desciption:
        'Загрузите файл с границами участков или нарисуйте их вручную. Укажите информацию о текущем и предыдущих сезонах',
      image: Img1,
    },
    {
      Icon: PieChartIcon,
      title: 'Автоматические Отчёты',
      desciption:
        'Загрузите файл с границами участков или нарисуйте их вручную. Укажите информацию о текущем и предыдущих сезонах',
      image: Img1,
    },
    {
      Icon: UserCircleIcon,
      title: 'Управление Командой',
      desciption:
        'Загрузите файл с границами участков или нарисуйте их вручную. Укажите информацию о текущем и предыдущих сезонах',
      image: Img1,
    },
  ]
  const items = [
    {
      title: 'Получайте комплексную аналитику посевов',
      description:
        'Мы собираем комплексные данные из разных источников и превращаем их в понятную и доступную информацию. Анализируйте историю полей, погодные условия и состояние здоровья посевов для принятия быстрых и эффективных решений.',
      img: item1,
    },
    {
      title: 'Следите за здоровьем посевов с помощью спутниковых снимков',
      description:
        'Забудьте про лишние выезды в поле. Спутниковый мониторинг посевов поможет отслеживать состояние растений, выявлять проблемные участки, контролировать изменения растительности и уровень влаги в почве — всё с экрана вашего устройства.',
      img: item2,
    },
    {
      title: 'Получайте уведомления о рисках своевременно',
      description:
        'Мы предупредим вас о потенциальных угрозах ещё до того, как они перерастут в серьёзные проблемы. Контролируйте изменения в состоянии растительности и защитите свои поля и урожаи.',
      img: item3,
    },
    {
      title: 'Оптимизируйте использование ресурсов',
      description:
        'Не тратьте лишние ресурсы! Используйте карты дифференцированного внесения (VRA), чтобы экономить удобрения, воду, семена и топливо. Тратьте меньше — собирайте больше.',
      img: item4,
    },
    {
      title: 'Настраивайте индивидуальные отчёты',
      description:
        'Настройте индивидуальные отчёты для удобного доступа к информации о полях. Формируйте и делитесь отчётами с командой и партнёрами в пару кликов.',
      img: item5,
    },
  ]
  return (
    <div className='relative min-h-screen px-20'>
      <img
        src={BG1}
        alt='Benefits Background'
        className='absolute inset-0 object-cover w-full h-1/4 -z-10 opacity-20 top-0'
      />
      <img
        src={BG2}
        alt='Benefits Background'
        className='absolute inset-0 object-cover w-full h-1/4 -z-10 opacity-20 top-1/4'
      />
      <img
        src={BG3}
        alt='Benefits Background'
        className='absolute inset-0 object-cover w-full h-1/4 -z-10 opacity-20 top-1/2'
      />
      <img
        src={BG4}
        alt='Benefits Background'
        className='absolute inset-0 object-cover w-full h-1/4 -z-10 opacity-20 top-3/4'
      />
      <div
        className='w-screen h-[20vh] absolute top-0 left-0 z-[-9]'
        style={{
          background:
            'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>
      <div
        className='w-screen h-[20vh] absolute top-1/4 -translate-y-full left-0 z-[-9]'
        style={{
          background:
            'linear-gradient(3600deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>
      <div
        className='w-screen h-[20vh] absolute top-1/4 left-0 z-[-9]'
        style={{
          background:
            'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>
      <div
        className='w-screen h-[20vh] absolute top-1/2 -translate-y-full left-0 z-[-9]'
        style={{
          background:
            'linear-gradient(3600deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>
      <div
        className='w-screen h-[20vh] absolute top-1/2 left-0 z-[-9]'
        style={{
          background:
            'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>
      <div
        className='w-screen h-[20vh] absolute top-3/4 -translate-y-full left-0 z-[-9]'
        style={{
          background:
            'linear-gradient(3600deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>
      <div
        className='w-screen h-[20vh] absolute top-3/4 left-0 z-[-9]'
        style={{
          background:
            'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>
      <div
        className='w-screen h-[20vh] absolute bottom-0 left-0 z-[-9]'
        style={{
          background:
            'linear-gradient(3600deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>
      <div className='mx-auto max-w-[1480px] grid grid-cols-2 auto-rows-[364px] gap-x-24 gap-y-16 mt-96'>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div className='border border-primary rounded-[40px] bg-white/70 py-7 px-9 flex flex-col'>
              <h4 className='text-primary text-[32px] font-semibold'>
                {item.title}
              </h4>
              <div className='font-medium text-[22px] flex-1 flex items-center'>
                {item.description}
              </div>
            </div>
            <div className='border border-primary rounded-[40px] overflow-hidden relative'>
              <img
                src={item.img}
                alt={item.title}
                className='absolute inset-0 object-cover w-full h-full'
              />
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className='mx-auto max-w-[1480px] mt-52'>
        <h2 className='font-medium text-[32px] text-center'>
          Топ Возможности Нашей Платформы для{' '}
          <span className='font-semibold text-primary'>
            Мониторинга Посевов
          </span>
        </h2>
        <div className='flex flex-row gap-12 w-full mt-16'>
          <div className='flex-1 flex flex-col h-auto gap-6'>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`bg-white/60 py-6 px-8 rounded-[30px] border-[1.5px] border-[#80B361] cursor-pointer transition-all duration-300 ${
                  index === activeStep
                    ? 'flex-1 shadow-[0_0_15px_0_#3386004D]'
                    : ''
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className='flex items-center gap-5'>
                  <img src={step.Icon} alt={step.title} />
                  <h3 className='font-semibold text-primary text-[22px]'>
                    {step.title}
                  </h3>
                </div>
                <p
                  className={`transition-[max-height,margin-top] duration-400 overflow-hidden text-lg font-medium will-change-[margin,max-height] ${
                    index === activeStep ? 'mt-5 max-h-96' : 'max-h-0 mt-0'
                  }`}
                >
                  {step.desciption}
                </p>
              </div>
            ))}
          </div>
          <div className='flex-1 h-[740px] border-[1.5px] border-primary bg-[#EEF5FC] rounded-[40px] overflow-hidden relative'>
            <img
              src={Img1}
              alt='Img1'
              className='absolute inset-0 w-full h-auto top-1/2 -translate-y-1/2 object-cover bg-transparent'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
