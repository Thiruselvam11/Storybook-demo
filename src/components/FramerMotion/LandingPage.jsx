import React from 'react'
import Demo from '../FramerMotion/Demo'
import { motion } from "framer-motion"

function LandingPage() {
  return (
    <div>
         <motion.div className='main__container'>
  
  <motion.h1 
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{
        delay:0.5,
        duration: 2,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      animate={{opacity:1, scale: 1}}
      whileInView={{ opacity: 1 }}
  >I'm animated</motion.h1>
  <motion.p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</motion.p>
  <motion.div className="demo_container">
  <Demo />
  <Demo />
  
  </motion.div>
  </motion.div>
    </div>
  )
}

export default LandingPage