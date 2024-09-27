/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './ImageSlider.css';

const ImageSlider = ({images}) => {

    return (
        <div className='image-slider-container'>
        <Carousel
            autoPlay={true}
            swipeable={true}
            showThumbs={false}
            showArrows={true}
            showStatus={false}
            infiniteLoop={true}
            >
                {images.map((image, index) => {
                    return (
                        <div key={index} className='images-within-slider'>
                            <img src={image.src} alt={image.alt} />
                        </div>
                    )
                })}
        </Carousel>
        </div>
    )

}

export default ImageSlider;