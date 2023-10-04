import React from 'react';
import { Image } from 'react-bootstrap';
import "./styles/Banner.scss";
const logo = require("../../assets/logo.png");
const character = require("../../assets/yae.png");

const Banner = () => {
  	return (
		<div className="banner-div" >
            <div className="banner-text" > Character planner </div>
            
            <Image
                src={logo}
                className='logo-image'
            />
		</div>
  	);
};

export default Banner;
