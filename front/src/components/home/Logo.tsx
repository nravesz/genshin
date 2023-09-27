import React from 'react';
import { Image } from 'react-bootstrap';
import "./styles/Logo.scss";
const logo = require("../../assets/logo.png");

const Logo = () => {
  	return (
		<div
			className="logo-div"
		>
				<Image
					src={logo}
					className='logo'
				/>
			<div>Character planner</div>
		</div>
  	);
};

export default Logo;
