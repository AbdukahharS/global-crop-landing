import Hero from '../components/Hero'
import SoilTypes from '../components/SoilTypes'
import HowItWorks from '../components/HowItWorks'
import Benefits from '../components/Benefits'
import Banks from '../components/Banks'
import Start from '../components/Start'
import Footer from '../components/Footer'

import LandsBg from '../assets/lands-bg.png'

function HomePage() {
  return (
    <>
      <img
        src={LandsBg}
        alt='Lands Background'
        className='absolute inset-0 object-cover w-full h-full -z-10 opacity-80'
      />
      <Hero />
      <div
        className='absolute w-full inset-0 h-[20vh] top-[80vh]'
        style={{
          background:
            'linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>
      <SoilTypes />
      <HowItWorks />
      <Benefits />
      <Banks />
      <Start />
      <Footer />
    </>
  )
}

export default HomePage
