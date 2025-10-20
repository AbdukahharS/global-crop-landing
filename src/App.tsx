import Circles from './components/Circles'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Analyse from './components/Analyse'
import Benefits from './components/Benefits'
import Banks from './components/Banks'
import Start from './components/Start'

import LandsBg from './assets/lands-bg.png'
import Clouds from './assets/clouds.png'

function App() {
  return (
    <div className='pt-[100vh]'>
      <img
        src={LandsBg}
        alt='Lands Background'
        className='absolute inset-0 object-cover w-full h-full -z-10 opacity-5'
      />
      <Navbar />
      <Circles />
      <Hero />
      <img
        src={Clouds}
        alt='Clouds'
        className='absolute top-[100vh] -translate-y-1/2'
      />
      <HowItWorks />
      <Analyse />
      <Benefits />
      <Banks />
      <Start />
    </div>
  )
}

export default App
