import React from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { height } from '@mui/system';

const Icons = () => {
  return (
    <div className='icons__container' style={{display:"flex", flexDirection:"row"}} width={100} height={100}>
        <ArrowCircleLeftIcon />
        <ArrowCircleRightIcon />
    </div>
  )
}

export default Icons