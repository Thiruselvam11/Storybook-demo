import './App.css'
import React from 'react'
import LandingPage from './components/FramerMotion/LandingPage';
import { motion } from "framer-motion"
import Navbar from './components/FramerMotion/Navbar/Navbar';



function App() {

  return(
    <motion.div className='main_div'>
      <Navbar />
      <LandingPage />
     <div className='btn__container'>
     </div>
      
    </motion.div>


  )
}
export default App;

 