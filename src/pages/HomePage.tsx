import Hero from '../components/Hero'
import SoilTypes from '../components/SoilTypes'
import HowItWorks from '../components/HowItWorks'
import Benefits from '../components/Benefits'
import Banks from '../components/Banks'
import Start from '../components/Start'
import Footer from '../components/Footer'
import PageBackground from '../components/BackgroundElements'

function HomePage() {
  return (
    <>
      <PageBackground />
      <Hero />
      <Benefits />
      <HowItWorks />
      <SoilTypes />
      <Banks />
      <Start />
      <Footer />
    </>
  )
}

export default HomePage
