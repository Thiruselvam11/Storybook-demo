import React from 'react'
import {motion} from 'framer-motion'

function Demo(){
    return(
       <motion.div
          style={{
            width:300,
            height:150,
            borderRadius:30,
            backgroundColor:"#fff"
          }}
          animate={{
            rotate: 180,
            y:50

          }}
          transition={{
            type:"spring",
            damping:10,
            mass:0.75,
            stiffness:100,
            delay: 1
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
            opacity:0.8,
          }}
       >
       </motion.div>
    );
}

export default Demo;