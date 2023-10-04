import React from 'react';
import { Image } from 'react-bootstrap';
import "./styles/Logo.scss";
const logo = require("../../assets/logo.png");
const character = require("../../assets/yae.png");

const Logo = () => {
  	return (
		<div className="cover-div" >
			
			<div className="logo-div" >
				<div className="left-div" />
				<div className="right-div" />
			</div>

			<div className="logo-image">
				<Image
						src={logo}
						className='logo'
				/>
			</div>

		</div>
  	);
};

export default Logo;
