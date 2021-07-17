import { useState } from "react";
import Popup from "../components/popup";
import { Container, Nav } from "react-bootstrap";
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

function Gallery() {
  const [Button, setButton] = useState(false);
  const [PopImage, setPopImage] = useState("");

  return (
    <div className="gallery1 row fluid">
      <Popup Image trigger={Button} setTrigger={setButton}>
        <div className="pop">
          {/* <h1 style={{ color: "black" }}>hello world</h1>
                <p>this is a text</p> */}
          <img src={PopImage} className="popup-image" />
          {/* <br/><br/>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quisquam, quaerat hic natus illo cupiditate doloribus nobis pariatur cum, perspiciatis ipsam a libero tempora repellat incidunt deleniti aperiam optio nisi?
                  </p> */}
                  <div className="box"></div>
                    <div className="cross1"></div>
                      <div className="cross2"></div>
                  
        </div>
      </Popup>
      <div className="top-margin">
        <div className="text1">Photography</div>

        <img
          onClick={() => {
            setPopImage(Photo1);
            setButton(true);
          }}
          src={Photo1}
          className="first"
        />
        <img
          onClick={() => {
            setPopImage(Photo3);
            setButton(true);
          }}
          src={Photo3}
          className="first"
        />
        <img
          onClick={() => {
            setPopImage(Photo4);
            setButton(true);
          }}
          src={Photo4}
          className="first"
        />
        <img
          onClick={() => {
            setPopImage(Photo2);
            setButton(true);
          }}
          src={Photo2}
          className="first"
        />
      </div>

      <div className="second">
        <div className="text2">Paintings</div>
        <img
          onClick={() => {
            setPopImage(Painting4);
            setButton(true);
          }}
          src={Painting4}
          className="first"
        />
        <img
          onClick={() => {
            setPopImage(Painting3);
            setButton(true);
          }}
          src={Painting3}
          className="first"
        />
        <img
          onClick={() => {
            setPopImage(Painting1);
            setButton(true);
          }}
          src={Painting1}
          className="first"
        />
        <img
          onClick={() => {
            setPopImage(Painting2);
            setButton(true);
          }}
          src={Painting2}
          className="first"
        />
      </div>

      <div className="third">
        <div className="text3">Sketches</div>

        <img
          onClick={() => {
            setPopImage(Sketch4);
            setButton(true);
          }}
          src={Sketch4}
          className="first"
        />
        <img
          onClick={() => {
            setPopImage(Sketch2);
            setButton(true);
          }}
          src={Sketch2}
          className="first"
        />
        <img
          onClick={() => {
            setPopImage(Sketch1);
            setButton(true);
          }}
          src={Sketch1}
          className="first"
        />
        <img
          onClick={() => {
            setPopImage(Sketch3);
            setButton(true);
          }}
          src={Sketch3}
          className="first"
        />
      </div>
    </div>
  );
}

export default Gallery;
