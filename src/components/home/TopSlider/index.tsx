import React from 'react'
import Slider from 'react-slick'
import { TopSliderStyle, TopSliderSass } from './styles'


var settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    fade: true,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false
            }
        }
    ]
}

const TopSlider = () => (
    <div>
        <section className="top-slider">
            <Slider {...settings}>
                <div className="top-slider__item"><img src="../../../../static/slider1.png" alt="" /></div>
                <div className="top-slider__item"><img src="../../../../static/slider1.png" alt="" /></div>
                <div className="top-slider__item"><img src="../../../../static/slider1.png" alt="" /></div>
            </Slider>
        </section>
        {/* <style jsx>{TopSliderStyle}</style> */}
        <style jsx>{TopSliderSass}</style>
    </div>  
)

export default TopSlider