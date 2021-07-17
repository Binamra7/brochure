import React from 'react'
import '../styles/popup.css'
import Close from "../images/test_photo.png";


function popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                {/* <button className="btn btn-danger close-btn" onClick={() => props.setTrigger(false)}>
                    <img className="close-image" src={Close} />
                </button> */}
                
                    {/* <img className="close-image" src={Close}
                        onClick={() => props.setTrigger(false)}
                    /> */}
                <div className="all" onClick={() => props.setTrigger(false)}>

                    <div className="box"></div>
                        <div className="cross1"></div>
                        <div className="cross2"></div>
                </div>
                
                {props.children}
            </div>
        </div>
    ) : "";
}

export default popup
