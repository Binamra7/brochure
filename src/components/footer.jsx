import React from 'react'
import '../styles/footer.css'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Container } from 'react-bootstrap';

function footer() {
    return (
        <div className="bottom-margin">
        
            <div className="foot">

            <div className="icon">
                <span>
                    <a href="https://www.facebook.com">

                            <FaFacebook className="social"
                //                 style={{
                // height: '3rem',width: '3rem',color:"white"
                //                 }}
                            />
                    </a>
            </span>
            <span>
            <a href="https://www.instagram.com">

                            <FaInstagram className="social"
                                // style={{ height: '3rem', width: '3rem', color: 'white' }}
                            />
            </a>
            </span>

                </div>

                <div className="copy">

                    <span>
                        &copy;&nbsp;Designed with ❤️️ by Binamra Khadka
                    </span>
                </div>
             
            
            </div>
               
        </div>
    )
}

export default footer
