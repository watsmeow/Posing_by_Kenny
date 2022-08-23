import React from 'react';
import { useState, useEffect } from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import {ApiSlides} from '../api/SliderAPI';
import './Slider.css'

function Slider() {
    const[slides] = useState(ApiSlides);
    const[activeSlide, setActiveSlide] = useState(0)
    const nextSlide = () => {
        if (activeSlide === slides.length -1) {
            setActiveSlide(0)
        } else {
            setActiveSlide(activeSlide +1)
        }
    };
    const prevSlide = () => {
        if (activeSlide === 0) {
            setActiveSlide(slides.length -1)
        } else {
            setActiveSlide(activeSlide -1)
        }
    }

    const header2 = 'text-[25px] font-bold';
    const paragraph = 'text-[15px]';
    const header3 = 'text-[20px]'
    const arrowStyle = 'rounded-full bg-darkgrey flex justify-center items-center shadow-sm hover:cursor-pointer';
  return (
    <div className='parentDiv h-[540px] bg-white flex items-center justify-between'>
        <div className={arrowStyle}>
            <ArrowLeftOutlined style={{ fontSize: "50px" }} onClick={prevSlide} />
        </div>
        {slides.map((slides, index) => {
            if (index === activeSlide) {
                return (
                    <div className='wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#363A3F] border-10px overflow-hidden relative'>
                    <div className='slide flex items-center justify-center h-[100%]'>
                        <div className='forImage flex flex-1 justify-center items-center h-[100%]'>
                            <img 
                            className='object-cover'
                            src={slides.src} 
                            alt="slide" />
                        </div>
                        <div className='description flex flex-col flex-1 justify-center items-center'>
                            <h2 className={header2}>{slides.content.h2}</h2>
                            <p className={paragraph}>{slides.content.p}</p>
                            <h3 className={header3}>{slides.content.h3}</h3>
                            <button className='btn'>Select Options</button>
                        </div>
                    </div>
                </div>
                )
            }
        })}


        <div className={arrowStyle}>
            <ArrowRightOutlined style={{ fontSize: "50px" }} onClick={nextSlide}/>
        </div>
    </div>
  )
}

export default Slider