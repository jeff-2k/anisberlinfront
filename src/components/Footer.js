import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./Footer.css"

import { Link } from 'react-router-dom'
import  LinkedinLogo from '../components/images/linkedin-icon-01.png'

const Footer = (props) => {
  return (
    <div className='footerbg mt-5 mx-auto'>
      <div className='row container mx-auto d-flex justify-content-center '>
        <div className='col-sm footer container mx-auto '>
          <h4>CUSTOMER SERVICE</h4>
          <div className='footerListOut mb-1'>
          <div>
            <a href="/" className='footerListIN'>Contact Us</a>
          </div>
          <div>
            <a href="/" className='footerListIN'>Order Status</a>
          </div>
          <div>
            <a href="/" className='footerListIN'>Shipping</a>
          </div>
          <div>
            <a href="/" className='footerListIN'>Delivery Information</a>
          </div>
          <div>
            <a href="/" className='footerListIN'>Common Questions</a>
          </div>
          </div>
        </div>
        <div className='col-sm footer'>
          <h4>ABOUT US</h4>
          <div>
            <div className='footerListOut mb-1'>
            </div>
            <div>
              <a href="/" className='footerListIN'>Store & Events</a>
            </div>
            <div>
              <a href="/" className='footerListIN'>Get Email Updates</a>
            </div>
            <div>
              <a href="/" className='footerListIN'>Exchange Policy</a>
            </div>
            <div>
              <a href="/" className='footerListIN'>Privacy Policy</a>
            </div>
            <div>
              <a href="/" className='footerListIN'>Terms & Conditions</a>
            </div>
          </div>
        </div>


        <div className='creators col ml-5 mt-0 '>
        <h4 className="d-flex justify-content-start ml-5 ">CREATED BY:</h4> 

        <div className="creators-name col-10 ml-4  align-items-center">
        <a href="https://www.linkedin.com/in/elvis-dourado-9507a490/" className='linkdin'>
        Elvis Dourado
        <img src={LinkedinLogo} alt='linkedin-creator-logo'/>
        </a>
        <br/>

        <a href="https://www.linkedin.com/in/jefferson-inácio-b232211a0/" className='linkdin'>
        Jefferson Inácio
        <img src={LinkedinLogo} alt='linkedin-creator-logo'/>
        </a>
        <br/>

        <a href="https://www.linkedin.com/in/romulo-albanus-9b6834212/" className='linkdin'>
        Romulo Albanus
        <img src={LinkedinLogo} alt='linkedin-creator-logo'/>
        </a>
        <br/>

        </div>
        </div>
      </div>
      <p className="mt-3 mb-0 pb-3 d-flex justify-content-center">Copyright © 2021 Anis  /  All rights reserved.</p>
    </div>
  )
}

export default Footer