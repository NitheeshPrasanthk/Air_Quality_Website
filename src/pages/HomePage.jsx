import React from 'react'
import Navbar from '../components/Navbar'
import Image from '../assets/wide-angle-shot-white-smoke-coming-out-nuclear-plants.jpg';
import aqiindex from "../assets/aqiscale.jpg"
import "../pages/HomePage.css"
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className='main'>
      <div className='content_1'>
        <img src={Image} alt='image'/>
        <h1 className='content1_title'>KNOW WHAT YOU BREATHE.</h1>
      </div>
      
      <div className='content_2'>
        <div className='subcontent_1'>
        <h1 className='content2_title'>Air Quality Index (AQI) Calculation</h1>
        <p className='content2_context'>The Air Quality Index is based on measurement of particulate matter (PM2.5 and PM10), Ozone (O3), Nitrogen Dioxide (NO2),
         Sulfur Dioxide (SO2) and Carbon Monoxide (CO) emissions.
           Most of the stations on the map are monitoring both PM2.5 and PM10 data, but there are few exceptions where only PM10 is available.
           The Air Quality Index, or AQI, is the system used to warn the public when air pollution is dangerous.
            The AQI tracks ozone (smog) and particle pollution (tiny particles from ash, power plants and factories, vehicle exhaust, soil dust, pollen, and other pollution), 
            as well as four other widespread air pollutants. Newspapers, radio, television, and websites report AQI levels year-round.
            Keeping track of the current air quality information can help you take steps to protect yourself, children, and others from unhealthy levels of air pollution.</p>
         </div>
         <div className='subcontent_2'>
            <div className='aqiimgdiv'>
              <img className='aqiscale' src={aqiindex} alt="aqi-index"/>
            </div>
         </div>
      </div>

    {/* footer    */}
      <Footer />
    
    </div>
  )
}

export default HomePage
