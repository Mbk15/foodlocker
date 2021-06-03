import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cta1 from '../../Images/cta1.webp'
import cta2 from '../../Images/cta2.webp'
import cta3 from '../../Images/cta3.webp'

import './Cta.css'


const Cta = () => {

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <div>
            <Slider {...settings}>

                <div className="cta-carousel-item">
                    <img src={cta1} alt="" />
                </div>
                <div className="cta-carousel-item">
                    <img src={cta2} alt="" />
                </div>
                <div className="cta-carousel-item">
                    <img src={cta3} alt="" />
                </div>
               
               
            </Slider>
        </div>
    )
}

export default Cta;