import React from 'react';
import { Image } from 'react-bootstrap';
import "./styles/Cover.scss";
const logo = require("../../assets/logo.png");
const character = require("../../assets/yae.png");

const Cover = () => {
  	return (
		<div className="principal-div">
				<div className="divider" />
			<div className="logo-div" >
				<Image
					src={logo}
					className='logo-image'
				/>
			</div>

			<div className="character-div">
				<Image
					src={character}
					className='character-image'
				/>
			</div>

		</div>
  	);
};

export default Cover;
