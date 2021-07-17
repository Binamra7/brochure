import React from 'react'
import "../styles/home.css"
import Painting from "../images/4kpainting.jpg";
import Typical from "react-typical";

function home() {
    return (
        <div className="home">
            <img className="image" src={Painting}/>
            <h1>Hi. I am<br />
                <div style={{ color: "#21c5e6" }}>
                <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'Projwal Khadka 👦',
                        1500,
                        'a Painter 🎨',
                        1200,
                        "an Artist 🖌️",
                       
                        1200,
                        "a Photographer 📸",
                        1200
                    ]}

                
                    />
                </div>
                </h1>
                    
        </div>
    )
}

export default home;
