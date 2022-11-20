import './Teenused.css';
import { Link } from 'react-router-dom';

function Teenused() {
    return ( 
        <div className="main_body">
            <div className="variant1">
                <p>
                    <h1>Soojustamine</h1>
                    &emsp;&emsp;Meie teenuste hulka kuuluvad puistevilla ja PUR vahuga hoonete soojustamine, mis on odav ja efektiivne lahendus.
                    Mõlemat materjali on võimalik läbi voolikute juhtida ka kitsematesse vahedesse, et kõik kohad saaksid ilusti soojustatud.
                    See tagab majale hea soojapidavuse ning seeläbi kahanevad ka küttekulud. Samuti paraneb soojustamisega maja sisekliima ja väärtus.
                </p>
                <img src="https://media.voog.com/0000/0048/6114/photos/Lumekoristus%20katuselt_large.jpg" alt="Greenec" />
            </div>
            <div className="horizontal_line"></div>
            <div className="variant2">
            <img src="https://media.voog.com/0000/0048/6114/photos/Lumekoristus%20katuselt_large.jpg" alt="Greenec" />
                <p>
                    <h1>Puistevill</h1>
                    &emsp;&emsp;Puistevill on samasugune vill nagu rull- või plaatvill, kuid purustatud kujul ning see on kokku pressitud kilepakendisse.
                    Pakend tühjendatakse masinasse, mis tükeldab villa ja suunab läbi voolikute kohtadesse, mis vajavad soojustamist.
                    See on soodne ja efektiivne viis, kuidas soojustada oma kodu. 
                    Paigaldades jääb villakiudude vahele õhuline ruum, mis tagab suurepärase hingamise ning soojuspidavuse.
                    Lisaks tagab see ka hea heli isolatsiooni.
                    <br /><br />
                    <Link to="/puistevill">
                        <button>Loe lähemalt</button>
                    </Link>
                </p>
            </div>
            <div className="horizontal_line"></div>
            <div className="variant1">
                <p>
                    <h1>PUR vaht</h1>
                    &emsp;&emsp;Puistevill on samasugune vill nagu rull- või plaatvill, kuid purustatud kujul ning see on kokku pressitud kilepakendisse.
                    Pakend tühjendatakse masinasse, mis tükeldab villa ja suunab läbi voolikute kohtadesse, mis vajavad soojustamist.
                    See on soodne ja efektiivne viis, kuidas soojustada oma kodu. 
                    Paigaldades jääb villakiudude vahele õhuline ruum, mis tagab suurepärase hingamise ning soojuspidavuse.
                    Lisaks tagab see ka hea heli isolatsiooni.
                    <br /><br />
                    <Link to="/pur-vaht">
                        <button>Loe lähemalt</button>
                    </Link>
                </p>
                <img src="https://media.voog.com/0000/0048/6114/photos/Lumekoristus%20katuselt_large.jpg" alt="Greenec" />
            </div>
        </div>
     );
}

export default Teenused;