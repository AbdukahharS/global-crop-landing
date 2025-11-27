import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams, useNavigate } from 'react-router-dom'
import GlobalCropLogo from '../assets/globalcrop-logo.svg'
import LoginIcon from '../assets/login.svg'
import GlobeIcon from '../assets/global.svg'

const Navbar = () => {
  const { t } = useTranslation()
  const { lang } = useParams<{ lang: string }>()
  const navigate = useNavigate()
  const [showLangMenu, setShowLangMenu] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const links = [
    { name: t('navbar.about'), href: '#' },
    { name: t('navbar.services'), href: '#' },
    { name: t('navbar.technologies'), href: '#' },
    { name: t('navbar.contact'), href: '#' },
  ]

  const languages = [
    { code: 'uz-lat', name: "O'zbekcha" },
    { code: 'uz-cyr', name: 'Ўзбекча' },
    { code: 'ru', name: 'Русский' },
    { code: 'en', name: 'English' },
  ]

  const handleLanguageChange = (langCode: string) => {
    navigate(`/${langCode}`)
    setShowLangMenu(false)
  }

  return (
    <>
      <div className='bg-primary text-white top-3 sm:top-7 mx-3 sm:mx-6 lg:mx-12 py-2 sm:py-2.5 px-4 sm:px-6 lg:px-9 rounded-full flex flex-row justify-between items-center absolute w-[calc(100%-24px)] sm:w-[calc(100%-48px)] lg:w-[calc(100%-96px)] gap-3 sm:gap-0 z-50'>
        <div className='flex flex-row items-center gap-2 sm:gap-[4vw] 2xl:gap-[8vw]'>
          <div className='flex items-center gap-2 sm:gap-3 lg:gap-5'>
            <img
              src={GlobalCropLogo}
              alt='Global Crop Logo'
              className='h-7 sm:h-10 lg:h-12'
            />
            <span className='font-bold text-xs sm:text-lg lg:text-[22px] tracking-wide whitespace-nowrap'>
              GLOBAL CROP
            </span>
          </div>
          <div className='hidden xl:flex items-center gap-6 2xl:gap-24'>
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='text-white font-medium hover:underline text-base lg:text-lg whitespace-nowrap'
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className='flex flex-row gap-2 sm:gap-4 lg:gap-[4vw] items-center'>
          {/* Hamburger menu for mobile/tablet */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className='xl:hidden flex flex-col gap-1 p-2'
            aria-label='Toggle menu'
          >
            <span className='w-5 h-0.5 bg-white transition-all'></span>
            <span className='w-5 h-0.5 bg-white transition-all'></span>
            <span className='w-5 h-0.5 bg-white transition-all'></span>
          </button>

          <div className='relative'>
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className='flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors duration-200 rounded-full px-2 sm:px-3 py-2'
            >
              <img src={GlobeIcon} alt='Globe Icon' className='size-5 sm:size-[22px]' />
            </button>
            {showLangMenu && (
              <>
                <div
                  className='fixed inset-0 z-40'
                  onClick={() => setShowLangMenu(false)}
                />
                <div className='absolute top-full right-0 sm:translate-x-1/2 mt-3 bg-white text-black rounded-2xl shadow-2xl py-2 min-w-[180px] sm:min-w-[200px] z-50 border border-gray-100 overflow-hidden'>
                  {languages.map((language, index) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className={`block w-full text-left px-4 sm:px-5 py-2.5 sm:py-3 transition-all duration-150 ${
                        lang === language.code
                          ? 'bg-primary/10 text-primary font-semibold border-l-4 border-primary'
                          : 'hover:bg-gray-50 border-l-4 border-transparent'
                      } ${index !== 0 ? 'border-t border-gray-100' : ''}`}
                    >
                      <div className='flex items-center justify-between'>
                        <span className='text-sm sm:text-base'>{language.name}</span>
                        {lang === language.code && (
                          <svg
                            className='w-4 h-4 sm:w-5 sm:h-5 text-primary'
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
          <button className='hidden sm:flex items-center bg-secondary py-2 sm:py-2.5 px-4 sm:px-6 rounded-full font-semibold text-xs sm:text-base hover:bg-secondary/90 transition-colors duration-200 whitespace-nowrap'>
            <img
              src={LoginIcon}
              alt='Login Icon'
              className='inline-block mr-1.5 sm:mr-2 size-5 sm:size-8'
            />
            {t('navbar.login')}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {showMobileMenu && (
        <>
          <div
            className='fixed inset-0 z-40'
            onClick={() => setShowMobileMenu(false)}
          />
          <div className='xl:hidden fixed top-[60px] sm:top-[90px] left-3 right-3 sm:left-6 sm:right-6 bg-white text-black rounded-2xl shadow-2xl py-4 z-50 border border-gray-100'>
            <div className='flex flex-col gap-2'>
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className='px-5 py-3 font-medium hover:bg-gray-50 transition-colors border-l-4 border-transparent hover:border-primary'
                  onClick={() => setShowMobileMenu(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className='border-t border-gray-100 mt-2 pt-2'>
                <button className='flex items-center bg-secondary text-white py-2.5 px-5 rounded-full font-semibold text-sm mx-5 w-[calc(100%-40px)]'>
                  <img
                    src={LoginIcon}
                    alt='Login Icon'
                    className='inline-block mr-2 size-6'
                  />
                  {t('navbar.login')}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Navbar
