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
                
                {props.children}
            </div>
        </div>
    ) : "";
}

export default popup
