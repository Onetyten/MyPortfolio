import React from 'react'
import PortfolioCard from './PortfolioCard'

export default function Portfolio() {



  return (
    <div className='min-h-screen bg-my-blue max-w-full relative' id='Portfolio'>
        <h3 className=' text-white text-3xl lg:text-5xl font-bold block text-center pt-10'>Portfolio</h3>
        <div className='lg:flex grid justify-center flex-wrap w-full px-16 pt-16 pb-8'>
          
                <PortfolioCard src="Images/WebImages/Maury.png" name="Maurys Kitchen"desc ="This dynamic restaurant website streamlines order communication, allowing customers to place table orders instantly transmitted to the kitchen. The centralized dashboard enables efficient delivery." link ="https://mauryskitchen.netlify.app/"  />

                <PortfolioCard src="Images/WebImages/Cara1.png" name="Cara Medical Institute" desc="This medical website is designed to connect you to a medical professional as urgently as possible" link ="https://carahealth.netlify.app/" />

                <PortfolioCard src="Images/WebImages/Apod.png" name="NASA APOD" desc="This NASA Picture of the Day app delivers stunning daily images from space, accompanied by detailed descriptions. Explore the cosmos, discover breathtaking photos, and learn about the universe right from your device with a new image every day." link ="https://cosmicexplorer.netlify.app/" />

                <PortfolioCard src="Images/WebImages/Blackjack.png" name="Caravan Blackjack" desc ="This Blackjack app offers a classic casino experience where you can play the popular card game against the dealer. Test your skills, strategize, and try to hit 21 without going over in this engaging and easy-to-play app." link ="https://mauryskitchen.netlify.app/"/>

                <PortfolioCard src="Images/WebImages/AexusAir.png" name="Aexus Air" desc="This tour agency provides curated travel experiences, offering guided tours to breathtaking destinations in Las Vegas. From adventure-packed itineraries to cultural explorations, we create unforgettable journeys tailored to your preferences." link ="https://mauryskitchen.netlify.app/" />
                
                

           

        </div>

        <div className='w-full flex justify-center'>
          <a href="https://github.com/Onetyten">
            <button className=' text-my-blue text-md  lg:text-xl font-bold text-center lg:p-4 p-3 lg:rounded-2xl rounded-md bg-my-yellow hover:text-white'>
              View more
            </button>
          </a>

        </div>
     










    </div>
  )
}