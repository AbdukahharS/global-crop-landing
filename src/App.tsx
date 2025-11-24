import { useEffect } from 'react'
import { Outlet, useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'

const SUPPORTED_LANGUAGES = ['en', 'ru', 'uz-lat', 'uz-cyr']

function App() {
  const { lang } = useParams<{ lang: string }>()
  const navigate = useNavigate()
  const { i18n, t } = useTranslation()

  useEffect(() => {
    if (lang && SUPPORTED_LANGUAGES.includes(lang)) {
      i18n.changeLanguage(lang)
    } else {
      navigate('/uz-lat', { replace: true })
    }
  }, [lang, i18n, navigate])

  useEffect(() => {
    document.title = t('documentTitle')
  }, [t, lang])

  return (
    <div className='pt-[100vh]'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
