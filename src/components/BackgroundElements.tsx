import LandsBg from '../assets/lands-bg.webp'
import SoilBg from '../assets/soil-bg.webp'
import Clouds from '../assets/clouds.webp'
import CropBg from '../assets/crop.webp'
import BenefitsBg1 from '../assets/benefits.webp'
import BenefitsBg2 from '../assets/bg2.webp'
import BenefitsBg3 from '../assets/bg3.webp'
import BenefitsBg4 from '../assets/bg4.webp'
import StartBg from '../assets/start.webp'
import LooperLeft from '../assets/looper-left.svg'
import LooperRight from '../assets/looper-right.svg'

/**
 * Gradient overlay helper
 */
const Gradient = ({
  top,
  direction = 'top',
  className = '',
}: {
  top: string
  direction?: 'top' | 'bottom'
  className?: string
}) => (
  <div
    className={`w-full h-[20vh] absolute left-0 -z-10 ${className}`}
    style={{
      top,
      background:
        direction === 'top'
          ? 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)'
          : 'linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
    }}
  />
)

/**
 * PageBackground Component
 * 
 * A single, continuous background layer for the entire landing page.
 * Elements are positioned absolutely relative to the page document, forming a fixed "track"
 * that stays consistent even if content sections are reordered.
 * 
 * Layout Assumption:
 * - Hero: 0-100vh
 * - Soil Types: 100-200vh
 * - How It Works: 200-300vh
 * - Benefits: 300-700vh (Allocated 400vh so each of the 4 images gets 100vh)
 * - Banks: 700-800vh
 * - Start: 800-900vh
 */
const PageBackground = () => {
  return (
    <div id='page-background' className="absolute inset-0 w-full overflow-hidden pointer-events-none -z-50" style={{ height: '900vh' }} aria-hidden="true">
      
      {/* ==================== HERO SECTION (0 - 100vh) ==================== */}
      <img
        src={LandsBg}
        alt=""
        className="absolute w-full h-[100vh] top-0 left-0 object-cover opacity-80 -z-10"
      />
      <Gradient top="80vh" direction="bottom" />

      {/* ==================== SOIL TYPES SECTION (100 - 200vh) ==================== */}
      <div className="absolute w-full h-[100vh] top-[100vh] left-0">
        <img
          src={SoilBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <Gradient top="0" direction="top" />
        {/* Clouds positioned at the bottom relative to this section */}
        <img
          src={Clouds}
          alt=""
          className="absolute w-full h-auto bottom-0 left-0 translate-y-[50%] z-[1]"
        />
      </div>

      {/* ==================== HOW IT WORKS SECTION (200 - 300vh) ==================== */}
      <div className="absolute w-full h-[100vh] top-[200vh] left-0">
        <img
          src={LooperLeft}
          alt=""
          className="absolute left-0 bottom-0 translate-y-1/2 -z-[9] hidden lg:block"
        />
        <img
          src={LooperRight}
          alt=""
          className="absolute right-0 bottom-0 translate-y-1/2 -z-[9] hidden lg:block"
        />
        <img
          src={CropBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40 -z-10"
        />
        <div
          className="w-full h-[20vh] absolute left-0 bottom-0 -z-10"
          style={{
            background: 'linear-gradient(360deg, #FFFFFF 12.61%, rgba(255, 255, 255, 0) 100%)',
          }}
        />
      </div>

      {/* ==================== BENEFITS SECTION (300 - 700vh) ==================== */}
      {/* Allocating 400vh for Benefits so each image gets 100vh */}
      <div className="absolute w-full h-[400vh] top-[300vh] left-0">
        {/* Stacked background images, each taking 1/4 of this 400vh section -> 100vh each */}
        <img
          src={BenefitsBg1}
          alt=""
          className="absolute left-0 w-full h-[25%] object-cover opacity-20 top-0 -z-10"
        />
        <img
          src={BenefitsBg2}
          alt=""
          className="absolute left-0 w-full h-[25%] object-cover opacity-20 top-[25%] -z-10"
        />
        <img
          src={BenefitsBg3}
          alt=""
          className="absolute left-0 w-full h-[25%] object-cover opacity-20 top-[50%] -z-10"
        />
        <img
          src={BenefitsBg4}
          alt=""
          className="absolute left-0 w-full h-[25%] object-cover opacity-20 top-[75%] -z-10"
        />

        {/* Gradients interleaved at 100vh intervals */}
        <Gradient top="0" direction="top" />
        
        {/* 1st image bottom / 2nd image top */}
        <Gradient top="100vh" direction="bottom" className="-translate-y-full" />
        <Gradient top="100vh" direction="top" />
        
        {/* 2nd image bottom / 3rd image top */}
        <Gradient top="200vh" direction="bottom" className="-translate-y-full" />
        <Gradient top="200vh" direction="top" />
        
        {/* 3rd image bottom / 4th image top */}
        <Gradient top="300vh" direction="bottom" className="-translate-y-full" />
        <Gradient top="300vh" direction="top" />
        
        {/* 4th image bottom */}
        <Gradient top="400vh" direction="bottom" className="-translate-y-full" />
      </div>

      {/* ==================== BANKS SECTION (700 - 800vh) ==================== */}
      <div className="absolute w-full h-[100vh] top-[700vh] left-0">
        <img
          src={LooperLeft}
          alt=""
          className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden lg:block"
        />
        <img
          src={LooperRight}
          alt=""
          className="absolute right-0 top-1/2 transform -translate-y-1/3 hidden lg:block"
        />
      </div>

      {/* ==================== START SECTION (800 - 900vh) ==================== */}
      <div className="absolute w-full h-[100vh] top-[800vh] left-0">
        <img
          src={StartBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[13%] -z-10"
        />
        <Gradient top="0" direction="top" />
        <Gradient top="80vh" direction="bottom" />
      </div>

    </div>
  )
}

export default PageBackground
