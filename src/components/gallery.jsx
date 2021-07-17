import React from 'react'
import Popup from "../components/popup"
import { Container, Nav } from 'react-bootstrap';
import "../styles/gallery.css";

import Photo1 from "../images/photo-1.jpg";
import Photo2 from "../images/photo-2.jpg";
import Photo3 from "../images/photo-3.jfif";
import Photo4 from "../images/photo-4.jpg";

import Sketch1 from "../images/sketch-1.jfif";
import Sketch2 from "../images/sketch-2.jpg";
import Sketch3 from "../images/sketch-3.jpg";
import Sketch4 from "../images/sketch-4.jpg";

import Painting1 from "../images/painting-1.jpg";
import Painting2 from "../images/painting-2.jpg";
import Painting3 from "../images/painting-3.jpg";
import Painting4 from "../images/painting-4.jpg";


import Image1 from "../images/sketch-4.jpg";
import Image2 from "../images/sketch-4.jpg";


function gallery() {

    const handleClick = (image) => {
        return <img className="clickedImg" src={image}/>
    }    

     return (
        // <Container>

        <div
            className="gallery1 row fluid" /*onClick={() => {
                alert("hello world")
                }}*/>
                    
            {/* </div> */}
            <div 
                className="top-margin">
                <div className="text1">
                    Photography
                </div>
                
                 <img
                     onClick={handleClick(Photo1)}
                     src={Photo1} className="first" />
                 <img
                     onClick={handleClick(Photo3)}
                     src={Photo3} className="first" />
                <img src={Photo4} className="first" />
                <img src={Photo2} className="first"/>
            </div>
            {/* <hr/> */}

            
            <div className="second">

                <div className="text2">
                        Paintings
                        </div>
                    <img src={Painting4} className="first"/>
                <img src={Painting3} className="first" />
                    <img src={Painting1} className="first"/>
                    <img src={Painting2} className="first"/>
                
            </div>
                    {/* <hr/> */}
            
            <div className="third">

                <div className="text3">
                        Sketches
                        </div>
                    
                
                <img src={Sketch4} className="first"/>
                <img src={Sketch2} className="first"/>
                <img src={Sketch1} className="first" />
                <img src={Sketch3} className="first"/>

                
            </div>
                    
            




            {/* </div> */}
            {/* <div className="first"></div>
            <div className="first"></div>
            <div className="first"></div>
            <div className="first"></div>
            <div className="first"></div>
            <div className="first"></div>
            <div className="first"></div> */}
            
        </div>
         /* </Container>  */
    )
}

export default gallery
