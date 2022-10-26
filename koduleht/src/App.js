import './App.css';

function App() {
  return (
    <div className="header">
			<img src="logo192.png" alt="Logo" title="Greenec OÜ" className="logo" />
			<div className="nav_links">
				<ul>
					<li><a href="#" title="Avaleht">Avaleht</a></li>
					<li>
						<a href="#" title="Teenused">Teenused</a>
						<div className="nav_dropdown">
							<ul>
								<a href="#" title="Puistevilla paigaldamine"><li>Puistevilla paigaldamine</li></a>
								<a href="#" title="PUR vahu paigaldamine"><li>PUR vahu paigaldamine</li></a>
							</ul>
						</div>
					</li>
					<li><a href="#" title="Tehtud tööd">Tehtud tööd</a></li>
					<li><a href="#" title="Kontakt">Kontakt</a></li>
				</ul>
			</div>
		</div>
  );
}

export default App;
