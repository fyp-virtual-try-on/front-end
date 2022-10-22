import React from 'react'
import './Intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Vector1 from '../../images/Vector1.png'
import Vector2 from '../../images/Vector2.png'
import girls from '../../images/girls.png'
import crown from '../../images/crown.png'
import  thumbup from '../../images/thumbup.png'
import  glassesimoji from '../../images/glassesimoji.png'

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
            <img src={glassesimoji} alt="" />
            <div style={{top:'-4%', left:'68%' ,    transform: 'scale(0.85)'}}>
              <FloatingDiv image={crown} txt1='style' txt2='Outfits'/>
            </div>
            <div style={{top:'18rem', left:'0rem' ,    transform: 'scale(0.85)'}}>
              <FloatingDiv image={thumbup} txt1='Integration with' txt2='Online Stores'/>
            </div>
<div className="blur" style={{background:"rgb(238 210 255)"}}></div>
<div className="blur" style={{background:'#c1f5ff',top:'17rem',width:'30rem',height:'13rem',left:'-9rem'}}></div>

        </div>

    </div>
  )
}

export default Intro