import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faBars, faLaptopCode, faTimes } from '@fortawesome/free-solid-svg-icons'
import ReactTypingEffect from 'react-typing-effect';

import { Link } from 'react-router-dom'
import "./Navbar.css"


function Navbar() {
	const [click, setClick] = useState(false);
	const handleClick = (popUp) => {
		setClick(!click);
	}

	const ReactTypingEffectDemo = () => {
		return (
			<ReactTypingEffect
				text={["Hi!! There,,", "Star Devs ✨", "We make sleek websites"]} //text=["Hello.", "World!"]
				eraseDelay={4000}
				cursor="♦"
				typingDelay={2000}
			/>
		);
	};


	return (

		<div className="container-fluid section1">
			<div className="navbar navbar_logo">
				<div>
					<Link to="/" className="navbar_logo">
						<h3>StarDevs <FontAwesomeIcon icon={faLaptopCode} />
						</h3>
					</Link>
				</div>

			</div>


			<div className="home container-fluid">
				{/* <BackgroundSlider
					className="home_slider"
					images={["https://bit.ly/34i1tsF", "https://bit.ly/2Sm4qmk"]}
					duration={5} transition={5} /> */}
				<h4 className="home_typer container" > {ReactTypingEffectDemo()}</h4>
			</div>

		</div>
	)
}

export default Navbar;
