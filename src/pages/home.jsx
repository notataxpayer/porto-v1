import React from 'react'
import Section1 from "./components/home/section1"
import Section2 from "./components/home/section2"
import Section3 from './components/home/section3'

const home = () => {
  return (
    <div className='w-full'>
        <Section1/>
        <Section2/>
        <Section3/>
    </div>
    
  )
}

export default home