import GlobalCropLogo from '../assets/globalcrop-logo.svg'
import AgrobankLogo from '../assets/agrobank-logo.png'
import LoginIcon from '../assets/login.svg'

const Navbar = () => {
  const links = [
    { name: 'О проекте', href: '#' },
    { name: 'Продукция', href: '#' },
    { name: 'Услуги', href: '#' },
    { name: 'Технологии', href: '#' },
    { name: 'Контакты', href: '#' },
  ]
  return (
    <div className='bg-primary text-white top-7 mx-12 py-2.5 px-9 rounded-full flex justify-between items-center absolute w-[calc(100%-96px)]'>
      <div className='flex items-center gap-14'>
        <div className='flex items-center gap-5'>
          <img src={GlobalCropLogo} alt='Global Crop Logo' className='h-12' />
          <span className='font-bold text-[22px] tracking-wide'>
            GLOBAL CROP
          </span>
        </div>
        <div className='flex items-center gap-5'>
          <img src={AgrobankLogo} alt='Agrobank Logo' className='size-[38px]' />
          <span className='font-bold text-[22px] tracking-wide'>AGROBANK</span>
        </div>
      </div>
      <div className='flex items-center gap-14'>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className='text-white font-medium hover:underline text-lg'
          >
            {link.name}
          </a>
        ))}
      </div>
      <button className='flex items-center bg-secondary py-2.5 px-6 rounded-full font-semibold'>
        <img src={LoginIcon} alt='Login Icon' className='inline-block mr-2' />
        Войти
      </button>
    </div>
  )
}

export default Navbar
