import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineWhatsApp, AiFillYoutube, AiTwotoneCustomerService} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Eve's Store All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiOutlineWhatsApp />
        <AiFillYoutube />
        <AiTwotoneCustomerService />
      </p>
    </div>
  )
}

export default Footer