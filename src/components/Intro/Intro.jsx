import React from 'react'
import './Intro.css'
import Vector1 from '../../images/Vector1.png'
import Vector2 from '../../images/Vector2.png'
import girls from '../../images/girls.png'

function Intro() {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>YourFit</span>
                <span>Shopping is Finally Easier With Personalized virtual Try-On</span>
                <span>The leading virtual fitting and styling solution for business of all sizes
                Try on items, get accurate size recommendations and style outfits all from within your elevated online store. Benefit from increased conversions, enhanced engagement, and significantly lower product returns.
                </span>
            </div>
            <button className=" button i-button">Login As Guest</button>
        </div>
        <div className="i-right">
            <img src={Vector1}alt="" />
            <img src={Vector2}alt="" />

            <img src={girls}alt="" />

        </div>

    </div>
  )
}

export default Intro