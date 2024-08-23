import { useState } from 'react'
import Intro from './Components/Intro/Intro'
import Skills from './Components/Skills/Skills'
import Portfolio from './Components/Portfolio/Portfolio'
import Education from './Components/Education/Education'
import Contact from './Components/Contact/Contact'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter basename='/MyPortfolio/'>
    <div className='overflow-x-hidden overflow-y-scroll no-scrollbar bg-my-blue'>

      <div className='border-2 border-my-yellow rounded-3xl'>

      


        <Intro/>
        <Skills/>
        <Portfolio/>
        <Education/>
        <Contact/>
        
       
      </div>
   
 


    </div>
    </BrowserRouter>
  )
}

export default App
