import React from 'react';
import './Avaleht.css';
import { Link } from 'react-router-dom';
import ImageSlider from './ImageSlider';

function Avaleht() {
    return ( 
        <div className="main_body">
            <div className="meist">
                <p>
                    <h1>Meist</h1>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nostrum tempore ipsam amet quaerat minima veniam neque sunt modi quod, magnam necessitatibus a labore dolorum quae eum culpa laboriosam repudiandae vitae dolore facilis placeat?
                    Dicta eveniet iusto ea nihil suscipit earum!
                    Earum nam asperiores amet minima repellat placeat, molestiae repudiandae laboriosam modi unde itaque doloremque cupiditate accusamus!
                    Accusantium esse exercitationem porro.
                </p>
                <img src="https://media.voog.com/0000/0048/6114/photos/Lumekoristus%20katuselt_large.jpg" alt="Greenec" />
            </div>
            <div className="teenused">
                <h1>Teenused</h1>
                <div className="puistevill">
                    <Link to="puistevill">
                        <img src="https://northstarinsulation.ca/wp-content/uploads/2020/04/blown-insulation.jpg" alt="Greenec" />
                    </Link>
                    <h2>Puistevilla paigaldamine</h2>
                    <p>Soodne ja efektiivne viis hoone soojustamiseks.
                        Materjal on hingav ja suurepärase soojapidavusega.
                    </p>
                </div>
                <div className="purvaht">
                    <Link to="pur-vaht">
                        <img src="https://northstarinsulation.ca/wp-content/uploads/2020/04/blown-insulation.jpg" alt="Greenec" />
                    </Link><h2>PUR vahu paigaldamine</h2>
                    <p>Siia tuleb paar rida teksti,
                           me aitame muuta sinu kodu soojaks
                        ja hubaseks pakkudes.
                    </p>
                </div>
            </div>
            <div className="ImageSlider">
                <Link to="tehtud-tood" style={{ textDecoration: 'none' }}>
                    <h1>Tehtud tööd</h1>
                </Link>
                <ImageSlider />
            </div>
        </div>
     );
}

export default Avaleht;