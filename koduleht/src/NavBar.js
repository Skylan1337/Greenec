import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<div className="header">
			<img src="logo1_white.png" alt="Logo" title="Greenec OÜ" className="logo" />
			<div className="nav_links">
				<ul>
					<Link to=""><li className="special">Avaleht</li></Link>
					<Link to="teenused">
						<li className="special">
							Teenused
							<div className="nav_dropdown">
								<ul>
									<Link to="puistevill" style={{ textDecoration: 'none' }}><li>Puistevilla paigaldamine</li></Link>
									<Link to="pur-vaht" style={{ textDecoration: 'none' }}><li>PUR vahu paigaldamine</li></Link>
								</ul>
							</div>
						</li>
					</Link>
					<Link to="tehtud-tood"><li className="special">Tehtud tööd</li></Link>
					<Link to="kontakt"><li className="special">Kontakt</li></Link>
				</ul>
			</div>
		</div>
	);
}

export default NavBar;