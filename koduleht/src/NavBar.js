import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className="header">
			<img src="logo192.png" alt="Logo" title="Greenec OÜ" className="logo" />
			<div className="nav_links">
				<ul>
					<Link to=""><li>Avaleht</li></Link>
					<Link to="teenused">
						<li>
							Teenused
							<div className="nav_dropdown">
								<ul>
									<Link to="puistevill"><li>Puistevilla paigaldamine</li></Link>
									<Link to="pur-vaht"><li>PUR vahu paigaldamine</li></Link>
								</ul>
							</div>
						</li>
					</Link>
					<Link to="tehtud-tood"><li>Tehtud tööd</li></Link>
					<Link to="kontakt"><li>Kontakt</li></Link>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;