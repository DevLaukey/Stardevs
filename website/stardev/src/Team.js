import { faUserMd, faUserAstronaut, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import "./Team.css"
import { Link } from 'react-router-dom'
import Aos from "aos";
import "aos/dist/aos.css";

function Team() {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div className="team container-fluid">
			<div className="team_header jumbotron">
				<h1 className="project_headerText">Our Team</h1>
			</div>
			<div className="project_Body container-fluid">
				<div className="project_icons container-fluid">

					<Link to="/" about="blank" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos="slide-up" >
						<h1 className="project_iconsItems project_radius"><FontAwesomeIcon
							icon={faUser}
						/></h1>
						<div className="team_text">
							<h2 >Lead Developer</h2>
							<p>Laukey Mwaura</p>
							<h5>We don't just build websites,</h5>
							<h5> we build websites that SELLS </h5>
						</div>

					</Link>
					<br />
					<Link to="/" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos="slide-up"><h1 className="project_iconsItems  project_radius" ><FontAwesomeIcon

						icon={faUserMd}
					/></h1>
						<h2 className="team_text">Assistant Developer</h2>
						<div className="team_text">
							<p >Joan Kareh</p>

							<h5>We love what we do and</h5>
							<h5> we do what our clients</h5>
							<h5>love & work with great clients </h5>
							<h5>all over the world</h5>
							<h5> to create thoughtful </h5>
							<h5>and purposeful websites.</h5>
						</div>
					</Link>
					<br />
					<Link data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos="slide-up">
						<h1 className="project_iconsItems  project_radius"><FontAwesomeIcon

							icon={faUserAstronaut}
						/></h1>
						<h2 className="team_text">Developer</h2>
						<div className="team_text">

							<p>John Doe</p>
							<h5> successful website does three things:</h5>
							<h5>It attracts the right kinds of visitors.</h5>
							<h5>Guides them to the main services
</h5>
							<h5>or product you offer.</h5>
							<h5>Collect Contact details for</h5>
							<h5>future ongoing relation.</h5>
						</div>
					</Link>
				</div>
			</div>
		</div >
	)
}

export default Team
