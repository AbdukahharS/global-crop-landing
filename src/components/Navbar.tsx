import GlobalCropLogo from '../assets/globalcrop-logo.svg'
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
    <div className='bg-primary text-white top-3 sm:top-7 mx-3 sm:mx-6 lg:mx-12 py-2 sm:py-2.5 px-4 sm:px-6 lg:px-9 rounded-full flex flex-row justify-between items-center absolute w-[calc(100%-24px)] sm:w-[calc(100%-48px)] lg:w-[calc(100%-96px)] gap-3 sm:gap-0'>
      <div className='flex items-center gap-2 sm:gap-3 lg:gap-5'>
        <img
          src={GlobalCropLogo}
          alt='Global Crop Logo'
          className='h-8 sm:h-10 lg:h-12'
        />
        <span className='font-bold text-sm sm:text-lg lg:text-[22px] tracking-wide'>
          GLOBAL CROP
        </span>
      </div>
      <div className='hidden xl:flex items-center gap-8 lg:gap-14'>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className='text-white font-medium hover:underline text-base lg:text-lg'
          >
            {link.name}
          </a>
        ))}
      </div>
      <button className='flex items-center bg-secondary py-2 sm:py-2.5 px-4 sm:px-6 rounded-full font-semibold text-sm sm:text-base'>
        <img
          src={LoginIcon}
          alt='Login Icon'
          className='inline-block mr-2 w-4 h-4'
        />
        Войти
      </button>
    </div>
  )
}

export default Navbar
