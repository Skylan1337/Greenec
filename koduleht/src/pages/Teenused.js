import './Teenused.css';

function Teenused() {
    return ( 
        <div className="main_body">
            <div className="soojustamine">
                <p>
                    <h1>Soojustamine</h1>
                    &emsp;&emsp;Üks kõige olulisem nüanss ja tegevus ehituse juures on soojustamine.
                    Puistevill on üks populaarsemaid soojustusmaterjale mida kasutatakse.
                    See on hinnatud just tänu headele soojus omadustele ning hinna ja kvaliteedi suhtele.
                    Puistevill on hingav, mittepõlev, hea isolaator ning seejuures tagab hea nii soojus-kui ka heliisolatsiooni. 
                    Me aitame muuta sinu kodu soojaks ja hubaseks pakkudes kvaliteetsed puistevilla paigaldust. 
                </p>
                <img src="https://media.voog.com/0000/0048/6114/photos/Lumekoristus%20katuselt_large.jpg" alt="Greenec" />
            </div>
            <div className="horizontal_line"></div>
            <div className="teenus">
                <div className="puistevill">
                    <h1>Puistevill</h1>
                    <div className="content">
                        <img src="https://northstarinsulation.ca/wp-content/uploads/2020/04/blown-insulation.jpg" alt="Greenec" />
                        <ul>
                            <li>Hingav</li>
                            <li>Odav</li>
                            <li>Mittepõlev</li>
                            <li>Hea isolaator (soojus, heli)</li>
                            <li>123</li>
                            <li>456</li>
                        </ul>
                   </div>
                </div>
                <div className="pur-vaht">
                    <h1>PUR vaht</h1>
                    <div className="content">
                        <img src="https://northstarinsulation.ca/wp-content/uploads/2020/04/blown-insulation.jpg" alt="Greenec" />
                        <ul>
                            <li>Hallituse ja seene tõke</li>
                            <li>Energiasäästlik</li>
                            <li>Veekindlus (suletud)</li>
                            <li>456</li>
                            <li>123</li>
                            <li>456</li>
                        </ul>
                   </div>
                </div>
            </div>
        </div>
     );
}

export default Teenused;