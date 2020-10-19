import React, { useEffect } from 'react'
import "./Projects.css"
import { faAddressBook, faMoneyBill, faPhoneSquare, faClipboardList, faGlobeAfrica, faAnkh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (

		<div className="projects container-fluid">
			<div className="project_header jumbotron">
				<h1 className="project_headerText">Our Projects</h1>
			</div>
			<div className="project_Body container-fluid">
				<div className="project_icons container-fluid">

					<a data-aos="fade-right">
						<h1 className="project_iconsItems">
							<FontAwesomeIcon
								icon={faClipboardList}
							/>
						</h1>
						<h3><a href="https://laukeymwaura.github.io/Joan-2.0/" about="_blank">This is a Personal Portifolio </a></h3>
					</a>
					<a data-aos="fade-up">
						<h1 className="project_iconsItems">
							<FontAwesomeIcon
								icon={faAnkh}
							/>
						</h1>
						<h3><a href="http://yboa.co.ke/" about="_blank">This is a Private Enterprise</a></h3>
					</a>
					<a data-aos="fade-left">
						<h1 className="project_iconsItems">
							<FontAwesomeIcon
								icon={faAddressBook}
							/>
						</h1>
						<h3><a href="https://laukeymwaura.github.io/todo-try-react/" about="_blank">This is a Todo App</a></h3>
					</a>

				</div>
				<div className="project_icons container-fluid">
					<a data-aos="fade-right">
						<h1 className="project_iconsItems">
							<FontAwesomeIcon
								icon={faGlobeAfrica}
							/>
						</h1>
						<h3><a href="https://whatsapp-f994d.web.app/" about="_blank">This is a Messager App</a></h3>
					</a>
					<a data-aos="fade-up">
						<h1 className="project_iconsItems">
							<FontAwesomeIcon
								icon={faPhoneSquare}
							/>
						</h1>
						<h3><a href="https://enigmatic-ridge-52830.herokuapp.com/" about="_blank">This is a Web Confrencing App</a></h3>
					</a>
					<a data-aos="fade-left">
						<h1 className="project_iconsItems">
							<FontAwesomeIcon
								icon={faMoneyBill}
							/>
						</h1>
						<h3><a href="https://victor-100.web.app/" about="_blank">This is an Ecommerce App</a></h3>
					</a>
				</div>

			</div>

		</div>
	)
}

export default Projects
