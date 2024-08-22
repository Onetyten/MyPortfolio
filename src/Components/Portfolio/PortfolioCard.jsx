import React from 'react'
import PortfolioText from './PortfolioText'
import { useState } from 'react'


export default function PortfolioCard(props) {
  const {src,name,desc,link} = props

  const[showInfo,SetShowInfo] = useState(false)

  function HideText(){
    SetShowInfo(false)
  }

  function ShowText(){
    SetShowInfo(true)
  }
  
  return (
    <a href={link}>
        <div  className="lg:w-96  w-72 h-72 bg-my-blue  flex-row grid justify-center  items-center flex-wrap px-5  lg:mr-7   mr-0 rounded-xl lg:rounded-3xl mb-10  bg-cover bg-no-repeat bg-center hover:bg-blend-multiply" style={{ backgroundImage: `url(${src})` }} onMouseEnter={ShowText} onMouseLeave={HideText}>

        {showInfo && (<PortfolioText name = {name} desc = {desc} showInfo ={showInfo} />)}

        </div>
      
    </a>

  
  )
}