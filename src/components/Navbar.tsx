import { useTranslation } from 'react-i18next'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import GlobalCropLogo from '../assets/globalcrop-logo.svg'
import LoginIcon from '../assets/login.svg'
import GlobeIcon from '../assets/global.svg'

const Navbar = () => {
  const { t } = useTranslation()
  const { lang } = useParams<{ lang: string }>()
  const navigate = useNavigate()
  const [showLangMenu, setShowLangMenu] = useState(false)

  const links = [
    { name: t('navbar.about'), href: '#' },
    { name: t('navbar.services'), href: '#' },
    { name: t('navbar.technologies'), href: '#' },
    { name: t('navbar.contact'), href: '#' },
  ]

  const languages = [
    { code: 'uz-lat', name: "O'zbekcha (Lotin)" },
    { code: 'uz-cyr', name: 'Ўзбекча (Кирилл)' },
    { code: 'ru', name: 'Русский' },
    { code: 'en', name: 'English' },
  ]

  const handleLanguageChange = (langCode: string) => {
    navigate(`/${langCode}`)
    setShowLangMenu(false)
  }

  return (
    <div className='bg-primary text-white top-3 sm:top-7 mx-3 sm:mx-6 lg:mx-12 py-2 sm:py-2.5 px-4 sm:px-6 lg:px-9 rounded-full flex flex-row justify-between items-center absolute w-[calc(100%-24px)] sm:w-[calc(100%-48px)] lg:w-[calc(100%-96px)] gap-3 sm:gap-0'>
      <div className='flex flex-row items-center gap-[4vw] 2xl:gap-[8vw]'>
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
        <div className='hidden xl:flex items-center gap-10 2xl:gap-24'>
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
      </div>
      <div className='flex flex-row gap-3 sm:gap-4 lg:gap-[4vw] items-center'>
        <div className='relative'>
          <button
            onClick={() => setShowLangMenu(!showLangMenu)}
            className='flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors duration-200 rounded-full px-3 py-2'
          >
            <img src={GlobeIcon} alt='Globe Icon' className='size-5 sm:size-[22px]' />
            {/* <span className='hidden sm:block text-sm font-medium'>
              {languages.find(l => l.code === lang)?.name.split(' ')[0] || 'Lang'}
            </span> */}
          </button>
          {showLangMenu && (
            <>
              <div
                className='fixed inset-0 z-40'
                onClick={() => setShowLangMenu(false)}
              />
              <div className='absolute top-full right-0 translate-x-1/2 mt-3 bg-white text-black rounded-2xl shadow-2xl py-2 min-w-[200px] z-50 border border-gray-100 overflow-hidden'>
                {languages.map((language, index) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    className={`block w-full text-left px-5 py-3 transition-all duration-150 ${
                      lang === language.code
                        ? 'bg-primary/10 text-primary font-semibold border-l-4 border-primary'
                        : 'hover:bg-gray-50 border-l-4 border-transparent'
                    } ${index !== 0 ? 'border-t border-gray-100' : ''}`}
                  >
                    <div className='flex items-center justify-between'>
                      <span className='text-sm sm:text-base'>{language.name}</span>
                      {lang === language.code && (
                        <svg
                          className='w-5 h-5 text-primary'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
        <button className='flex items-center bg-secondary py-2 sm:py-2.5 px-4 sm:px-6 rounded-full font-semibold text-sm sm:text-base hover:bg-secondary/90 transition-colors duration-200'>
          <img
            src={LoginIcon}
            alt='Login Icon'
            className='inline-block mr-2 size-6 sm:size-8'
          />
          {t('navbar.login')}
        </button>
      </div>
    </div>
  )
}

export default Navbar
