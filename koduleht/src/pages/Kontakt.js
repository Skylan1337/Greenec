import React from 'react';
import './Kontakt.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Kontakt() {
    return ( 
        <div className="kontakt">
            <div className="left">
                <form>
                    <div className="inputBox">
                        <input type="text" id="eesnimi" name="eesnimi" required />
                        <span>Eesnimi</span>
                    </div>
                    <div className="inputBox">
                        <input type="text" id="perenimi" name="perenimi" required />
                        <span>Perenimi</span>
                    </div>
                    <div className="inputBox">
                        <input type="text" id="telefon" name="telefon" required />
                        <span>Telefoni number</span>
                    </div>
                    <div className="inputBox">
                        <input type="text" id="epost" name="epost" required />
                        <span>E-posti aadress</span>
                    </div>
                    <div className="inputBox">
                        <select id="teenus" name="teenus" required>
                            <option selected hidden value=""></option>
                            <option value="puistevill">Puistevilla paigaldamine</option>
                            <option value="pur-vaht">PUR vahu paigaldamine</option>
                        </select>
                        <span>Tellitav teenus</span>
                    </div>
                    <div className="inputBox">
                        <input type="text" id="kogus" name="kogus" required />
                        <span>Soovitav kogus (m3)</span>
                    </div>
                    <div className="inputBox">
                        <input type="text" id="paksus" name="paksus" required />
                        <span>Kihi paksus</span>
                    </div>
                    <div className="inputBox">
                        <input type="text" id="aadress" name="aadress" required />
                        <span>Aadress</span>
                    </div>
                    <div className="inputBox">
                        <input type="text" id="aeg" name="aeg" required />
                        <span>Kuupäev</span>
                    </div>
                    <div className="inputBox">
                        <textarea id="muu" name="muu" required />
                        <span>Muu informatsioon</span>
                    </div>
                    <button type="submit">Saada</button>
                </form>
            </div>
            <div className="right">
                Kontaktandmed
                <br/>
                Greenec OÜ
                <br />
                Telefoni number: 53 46 81 02
                <br />
                E-posti aadress: info@greenec.ee
                
                <FontAwesomeIcon icon={faCoffee} />
            </div>
        </div>
     );
}

export default Kontakt;