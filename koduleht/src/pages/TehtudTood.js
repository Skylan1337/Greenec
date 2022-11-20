import React from 'react';
import './TehtudTood.css';
import ImageSlider from './ImageSlider';
import Popup from './PopUp';
import { useState } from 'react';
import pildidFailist from '../pildid.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function TehtudTood() {
    const [button, setButton] = useState(false);
    const [pilt, muudaPilt] = useState("");
    const [uus, uusPilt] = useState();

    const kuvaPilt = (x, index) => {
        if(index < 0) {
            index = pildidFailist.length - 1;
            x = pildidFailist[pildidFailist.length - 1];
        }
        else if(index >= pildidFailist.length) {
            index = 0;
            x = pildidFailist[0];
        }

        setButton(true);
        muudaPilt(x);
        uusPilt(index);
    }

    return (
        <div className='main_body'>
            <div className="ImageSlider">
                <ImageSlider />
            </div>
            <div className='horizontal_line'></div>
            <div className='pildid'>
                {pildidFailist.map((element, index) => 
                    <div key={index}>
                        <img onClick={() => kuvaPilt(element, index)} src={element} alt="" />
                    </div>
                )}
            </div>
            <Popup trigger={button} setTrigger={setButton}>
                <button className='prev_btn' onClick={() => kuvaPilt(pildidFailist[uus - 1], uus - 1)}>
                <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button className='next_btn' onClick={() => kuvaPilt(pildidFailist[uus + 1], uus + 1)}>
                <FontAwesomeIcon icon={faAngleRight} />
                </button>
                <img src={pilt} alt="" />
            </Popup>
        </div>
     );
}

export default TehtudTood;