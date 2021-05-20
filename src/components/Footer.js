import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./Footer.css"

import { Link } from 'react-router-dom'
import  LinkedinLogo from '../components/images/linkedin-icon-01.png'

const Footer = (props) => {
  return (
    <div className='footerbg mt-5 mx-auto'>
      <div className='row container mx-auto'>
        <div className='col-sm footer container mx-auto'>
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


        <div className='creators col ml-5 mt-0'>
        <h4>Created by:</h4> 
        <br/>

        <div className="creators-name col-10 ">
        <a href="https://www.linkedin.com/in/elvis-dourado-9507a490/" className='linkdin'>
        Elvis Dourado
        <img src={LinkedinLogo} />
        </a>
        <br/>

        <a href="https://www.linkedin.com/in/jefferson-inácio-b232211a0/" className='linkdin'>
        Jefferson Inácio
        <img src={LinkedinLogo} />
        </a>
        <br/>

        <a href="https://www.linkedin.com/in/romulo-albanus-9b6834212/" className='linkdin'>
        Romulo Albanus
        <img src={LinkedinLogo} />
        </a>
        <br/>

        </div>
        <p className="mt-2 d-flex align-items-end w-5">Copyright © 2021 Anis  /  All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer