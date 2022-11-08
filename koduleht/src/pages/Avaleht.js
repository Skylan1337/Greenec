import React from 'react';
import './Avaleht.css';
import { Link } from 'react-router-dom';
import ImageSlider from './Avaleht/ImageSlider';

function Avaleht() {
    return ( 
        <div className="main_body">
            <div className="meist">
                <p>
                    <h1>Meist</h1>
                    &emsp;&emsp;Üks kõige olulisem nüanss ja tegevus ehituse juures on soojustamine.
                    Puistevill on üks populaarsemaid soojustusmaterjale mida kasutatakse.
                    See on hinnatud just tänu headele soojus omadustele ning hinna ja kvaliteedi suhtele.
                    Puistevill on hingav, mittepõlev, hea isolaator ning seejuures tagab hea nii soojus-kui ka heliisolatsiooni. 
                    Me aitame muuta sinu kodu soojaks ja hubaseks pakkudes kvaliteetsed puistevilla paigaldust. 
                </p>
                <img src="https://media.voog.com/0000/0048/6114/photos/Lumekoristus%20katuselt_large.jpg" alt="Greenec" />
            </div>
            <div className="horizontal_line"></div>
            <div className="teenused">
                <h1>Meie teenused</h1>
                <Link to="puistevill" style={{ textDecoration: 'none' }}>
                    <div className="puistevill">
                        <img src="https://northstarinsulation.ca/wp-content/uploads/2020/04/blown-insulation.jpg" alt="Greenec" />
                        <h2>Puistevilla paigaldamine</h2>
                        <p>Siia tuleb paar rida teksti,
                            me aitame muuta sinu kodu soojaks
                            ja hubaseks pakkudes.
                        </p>
                    </div>
                </Link>
                <Link to="pur-vaht" style={{ textDecoration: 'none' }}>
                    <div className="purvaht">
                        <img src="https://northstarinsulation.ca/wp-content/uploads/2020/04/blown-insulation.jpg" alt="Greenec" />
                        <h2>PUR vahu paigaldamine</h2>
                        <p>Siia tuleb paar rida teksti,
                            me aitame muuta sinu kodu soojaks
                            ja hubaseks pakkudes.
                        </p>
                    </div>
                </Link>
            </div>
            <div className="horizontal_line"></div>
            <div className="ImageSlider">
                <Link to="tehtud-tood" style={{ textDecoration: 'none' }}>
                    <h1>Meie tehtud tööd</h1>
                </Link>
                <ImageSlider />
            </div>
        </div>
     );
}

export default Avaleht;