import React from 'react'
import Herosection from './Herosection' 
import Multicard from './Multicard'
// import Threecard from './threecard'
import Homesection from './Herosection'
import Homesection_second from './Homesection_second'
import Lastsection from './Lastsection'
import { FaQq } from 'react-icons/fa'
import Faqsection from './Faqsection'
const Body = () => {
  return (
    <div>
      <Herosection/>
      <Multicard/>
      <Homesection_second/>
      <Lastsection/>
    <Faqsection/>
    </div>
  )
}

export default Body
