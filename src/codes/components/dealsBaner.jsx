import React from 'react'
import "../css/dealsBanner.css"
import phone from "../assets/images/phone.png"

const DealsBaner = () => {
  return (
    <div className='dealsBannerMain'>
        <div className="phoneImage">
            <img src={phone} alt="" />
        </div>
        <div className="phoneDescription">
            <p>xxx y zzz abcabc abcabc acac bb acbbacfgb</p>
        </div>
        <div className="shopBtn"></div>
    </div>
  )
}

export default DealsBaner