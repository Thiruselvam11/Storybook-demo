import React, { useEffect, useRef, useState } from 'react';


const useElementOnScreen = (options) => {
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
  
  const callbackFunction = (entries) =>{
    const [ entry ] = entries
    setIsVisible(entry.isIntersecting)
  
  }
  
  useEffect(()=>{
    const observer = new IntersectionObserver(callbackFunction, options)
    if(containerRef.current) observer.observe(containerRef.current)
  
    return() =>{
      if(containerRef.current) observer.unobserve(containerRef.current)
    }
  
  }, [containerRef, options])
  
  return [containerRef, isVisible]
  }

function Header() {
    const [ containerRef, isVisible ] = useElementOnScreen({
        root:null,
        rootMargin:"0px",
        threshold: 1.0,
    })
    return(
      <div className='header'>
        <div className='isVisible'>{isVisible? "IN VIEWPORT": "NOT IN VIEWPORT"}</div>
        <div className='section'></div>
        <div className='box' ref={containerRef}><img src="https://images.unsplash.com/photo-1674147122487-422a8f309297?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt='main-image' /></div>
      </div>
    )   
}

export default Header