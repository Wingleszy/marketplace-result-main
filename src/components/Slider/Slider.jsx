import React from 'react'
import './slider.css'
import slider from '../../img/slider.jpg'
import link from '../../img/Link.svg'
import image1 from '../../img/Rectangle 5 (1).png'
import image2 from '../../img/Rectangle 6 (1).png'

export default function Slider() {
  return (
    <div className='main__slider'>
        <img src={slider} className='slider__bg'/>
        <div className="slider__desc">
          <div className="slider__desc_text">
            <h3>Интегрированная защита и система питания овощных культур в защищенном грунте</h3>
            <button><img src={link} alt="" />Читать больше</button>
          </div>
          <div className="slider__images">
            <div className="images__row">
              <img src={image1} alt="" />
              <div className="row__box"></div>
            </div>
            <div className="images__row reversed">
              <img src={image2} alt="" />
              <div className="row__box"></div>
            </div>
          </div>
        </div>
    </div>
  )
}
