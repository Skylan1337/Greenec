import React from 'react';
import './Popup.css';

function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup_outer' onClick={() => props.setTrigger(false)}></div>
            <div className='popup_inner'>
                <button className='close_btn' onClick={() => props.setTrigger(false)}>&times;</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup;