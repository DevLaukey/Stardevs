import React, { useEffect } from 'react'
import "./Contact.css"

import Aos from "aos";
import "aos/dist/aos.css";
function Contact() {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (

		<div className="contact container-fluid">
			<div className="team_header jumbotron">
				<h1 className="project_headerText">Get In Touch</h1>
			</div>
			<div className="container-fluid contactform" data-aos="flip-up">
				<form action="https://formspree.io/f/mdopkvyv" method="post">
					<div className="container-fluid row ">
						<h3 className="col">First name
						<input className="form-control contact_form" type="textarea" name="first_name" /></h3>
						<h3 className="col">
							last name
						<input className="form-control contact_form" type="textarea" name="last_name" />
						</h3>

					</div>
					<div className="row container-fluid" >
						<h3 className="col">
							Email Address
							<input className="form-control contact_form" type="email" name="_replyto" />
						</h3>
					</div>
					<div className="row container-fluid" >
						<h3 className="col">
							Message
							<textarea className="form-control contact_form" type="text" name="_message" />
						</h3>
					</div>
					<div className="container-fluid contact_button" >

						<button className="btn btn-secondary btn-centre contact_button" type="submit" value="Send" >Send</button>
					</div>
					<div className="container-fluid">
						<div className="contact_number ">
							<h3>Call: +254 737 530 113</h3>

						</div>
					</div>

				</form>
			</div>
		</div>
	)
}

export default Contact;