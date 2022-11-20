import React from 'react';
import './Puistevill.css';

function Puistevill() {
    return ( 
        <div className="main_body">
            <div className="variant1">
                <p>
                    <h1>Info</h1>
                    Puistevill on samasugune vill nagu rull- või plaatvill, kuid purustatud kujul ning see on kokku pressitud kilepakendisse.
                    Pakend tühjendatakse masinasse, mis tükeldab villa ja suunab läbi voolikute kohtadesse, mis vajavad soojustamist.
                    See on soodne ja efektiivne viis, kuidas soojustada oma kodu.
                    Paigaldades jääb villakiudude vahele õhuline ruum, mis tagab suurepärase hingamise ning soojuspidavuse.
                    Lisaks tagab see ka hea heli isolatsiooni.
                </p>
                <img src="https://media.voog.com/0000/0048/6114/photos/Lumekoristus%20katuselt_large.jpg" alt="Greenec" />
            </div>
            <div className="horizontal_line"></div>
            <div className="eelised">
                <h1>Puistevilla paigaldamise eelised</h1>
                <ul>
                    <li>Kiirelt ja lihtsalt paigaldatav</li>
                    <li>Võimalik soojustada kitsastes kohtades</li>
                    <li>Suurepärane soojuspidavus</li>
                    <li>Mittepõlev materjal</li>
                    <li>Hea heli isolatsioon</li>
                    <li>Keskkonnasõbralik</li>
                    <li>Soodne hind</li>
                </ul>
            </div>
            <div className="horizontal_line"></div>
            <div className="vill">
                <h1>Meie kasutatavad villad</h1>
                <div className="villad">
                    <div className='kast'>
                        <img src="https://espak.ee/epood/wp-content/uploads/BLT_heledal_taustal.jpg" alt="Greenec" />
                        <h2>Kivivill</h2>
                        <p>Tselluvill on purustatud ajalehest valmistatud soojustusmaterjal mida on kasutatud üle 70-ne aasta.
                            Tselluvill on üks parimaid soojustusmaterjale mida kasutada hoonete soojustamiseks
                        </p>
                    </div>
                    <div className='kast'>
                        <img src="https://kb.img-bcg.eu/dynamic/timg/7/b/7b33a6221b74f46625099cff01f3209f.jpg" alt="Greenec" />
                        <h2>Tselluvill</h2>
                        <p>Tselluvill on purustatud ajalehest valmistatud soojustusmaterjal mida on kasutatud üle 70-ne aasta.
                            Tselluvill on üks parimaid soojustusmaterjale mida kasutada hoonete soojustamiseks
                        </p>
                    </div>
                    <div className='kast'>
                        <img src="https://www.knaufinsulation.ee/sites/ki_ee/files/styles/product_main_image/public/externals/33ae7fc79f605e492f95d7bc4a16d88a.png?itok=N3cCvCAI" alt="Greenec" />
                        <h2>Klaasvill</h2>
                        <p>Tselluvill on purustatud ajalehest valmistatud soojustusmaterjal mida on kasutatud üle 70-ne aasta.
                            Tselluvill on üks parimaid soojustusmaterjale mida kasutada hoonete soojustamiseks
                        </p>
                   </div>
                   <div className='kast'>
                        <img src="https://www.knaufinsulation.ee/sites/ki_ee/files/styles/product_main_image/public/externals/33ae7fc79f605e492f95d7bc4a16d88a.png?itok=N3cCvCAI" alt="Greenec" />
                        <h2>Klaasvill</h2>
                        <p>Tselluvill on purustatud ajalehest valmistatud soojustusmaterjal mida on kasutatud üle 70-ne aasta.
                            Tselluvill on üks parimaid soojustusmaterjale mida kasutada hoonete soojustamiseks
                        </p>
                   </div>
                </div>
            </div>
        </div>
     );
}

export default Puistevill;