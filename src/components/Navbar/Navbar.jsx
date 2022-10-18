import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">
                Virtual TryOn
            </div>
            <span>toogle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Testimonals</li>

                </ul>
            </div>
      <button className="button">Signin</button>
        </div>
    </div>
  )
}

export default Navbar