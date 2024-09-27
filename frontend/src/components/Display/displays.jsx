/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { set } from 'immutable';
import './display.css'
import React, { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const Display = ({data}) => {
    const [display, setDisplay] = useState(0);
   
    const nextDisplay = () =>{
        setDisplay(display === data, length - 1 ? 0 : display + 1)
    }
    const prevDisplay = () =>{
        setDisplay(display === 0 ? data.length - 1 : display -1);
    }
    return(
        <div className='slide-container'>
            <BsArrowLeftCircleFill className='left-arrow' onClick={prevDisplay}/>
            {data.map((item, index)=>{
                return <img src={item.src} alt={item.alt} key={index} className='slide'/>
            })}
            <BsArrowRightCircleFill className='right-arrow' onClick={nextDisplay}/>
            
        </div>


    )
}

export default Display