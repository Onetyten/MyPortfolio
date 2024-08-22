import React from 'react'
import Intro_nav from '../Intro/Intro_nav'
import Intro_text from '../Intro/Intro_text'
import Skill_card from './Skill_card'

export default function Skills() {
  return (
    <div className='min-h-screen bg-my-blue max-w-full relative' id='Skills'>
      <h3 className=' text-white text-3xl lg:text-5xl font-bold block text-center pt-10'>My Skills</h3>
      <div className='flex justify-center flex-wrap w-full pl-10 py-10 lg:p-16' >

        <Skill_card name="React" src ="Images/Skill icons/icons8-react-a-javascript-library-for-building-user-interfaces-96.png" skillPoint = "h-3/6" percent="60%"/>
        <Skill_card name="HTML" src ="Images/Skill icons/icons8-html-480.svg" skillPoint = "h-full" percent="100"/>
        <Skill_card name="CSS" src ="Images/Skill icons/icons8-css-480.svg" skillPoint = "h-3/6" percent="80%"/>
        <Skill_card name="JavaScript" src ="Images/Skill icons/icons8-javascript.svg" skillPoint = "h-4/6" percent="80%"/>
        <Skill_card name="Tailwind" src ="Images/Skill icons/icons8-tailwindcss.svg" skillPoint = "h-4/6" percent="80%"/>
        <Skill_card name="Python" src ="Images/Skill icons/icons8-python-480.svg" skillPoint = "h-3/6" percent="60%"/>
        <Skill_card name="Figma" src ="Images/Skill icons/icons8-figma-480.svg" skillPoint = "h-4/6" percent="80%" />
        <Skill_card name="Github" src ="Images/Skill icons/icons8-github-480.png" skillPoint = "h-3/6" percent="60%"/>
        

        
      </div>
      







    </div>
  )
}
