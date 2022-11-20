import React from 'react';
import './Kontakt.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Kontakt() {
    return ( 
        <div className="kontakt">
            <div className="left">
                <h1>Kontaktandmed</h1>
                <h2>
                    Greenec OÜ
                    <br /><br />
                    <FontAwesomeIcon color="rgb(37, 82, 37)" fixedWidth icon={faPhone} /> Telefon: +372 56 97 00 76
                    <br />
                    <FontAwesomeIcon color="rgb(37, 82, 37)" fixedWidth icon={faEnvelope} /> E-post: info@greenec.ee
                    <br />
                    <FontAwesomeIcon color="rgb(37, 82, 37)" fixedWidth icon={faLocationDot} /> Aadress: Tuule 4, Nõo, 61601, Tartu maakond
                    <br /><br />
                    Reg nr: 16350311
                    <br />
                    KMKR nr: EE100863574
                    <br />
                    Arvelduskonto SEB pangas: EE471010220034281018
                    <br /><br /><br />
                    <img src="logo2_green.png" alt="Logo" title="Greenec OÜ" />
                </h2>
            </div>
            <div className="center_vertical_line"></div>
            <form>
                <div><h1>Küsi pakkumist</h1></div>
                <div className="inputBox">
                    <input type="text" placeholder=" " className="form_input" id="eesnimi" name="eesnimi" required />
                    <label className="form_label" htmlFor="eesnimi">Eesnimi</label>
                </div>
                <div className="inputBox">
                    <input type="text" placeholder=" " className="form_input" id="perenimi" name="perenimi" required />
                    <label className="form_label" htmlFor="perenimi">Perekonnanimi</label>
                </div>
                <div className="inputBox">
                    <input type="text" placeholder=" " className="form_input" id="telefon" name="telefon" required />
                    <label className="form_label" htmlFor="telefon">Telefoni number</label>
                </div>
                <div className="inputBox">
                    <input type="text" placeholder=" " className="form_input" id="epost" name="epost" required />
                    <label className="form_label" htmlFor="epost">E-posti aadress</label>
                </div>
                <div className="inputBox">
                    <select id="teenus" className="form_select" name="teenus" required>
                        <option selected disabled></option>
                        <option value="puistevill">Puistevilla paigaldamine</option>
                        <option value="pur-vaht">PUR vahu paigaldamine</option>
                    </select>
                    <label className="form_label" htmlFor="teenus">Tellitav teenus</label>
                </div>
                <div className="inputBox">
                    <input type="text" placeholder=" " className="form_input" id="kogus" name="kogus" />
                    <label className="form_label" htmlFor="kogus">Kogus (m<sup>3</sup>)</label>
                </div>
                <div className="inputBox">
                    <input type="text" placeholder=" " className="form_input" id="paksus" name="paksus" />
                    <label className="form_label" htmlFor="paksus">Kihi paksus (cm)</label>
                </div>
                <div className="inputBox">
                    <input type="text" placeholder=" " className="form_input" id="aadress" name="aadress" />
                    <label className="form_label" htmlFor="aadress">Aadress</label>
                </div>
                <div className="inputBox">
                    <input type="text" placeholder=" " className="form_input" id="kuupaev" name="kuupaev" />
                    <label className="form_label" htmlFor="kuupaev">Kuupäev</label>
                </div>
                <div className="inputBox">
                    <textarea id="muu" placeholder=" " className="form_input" name="muu" />
                    <label className="form_label" htmlFor="muu">Muu informatsioon</label>
                </div>
                <button type="submit">Saada</button>
            </form>
        </div>
     );
}

export default Kontakt;