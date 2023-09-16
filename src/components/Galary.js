import React from "react";
import photo1 from "../access/1.jpg";
import photo2 from "../access/2.png";
import photo3 from "../access/3.jpg";
import photo4 from "../access/4.jpg";
import photo5 from "../access/5.jpg";
import photo6 from "../access/6.jpg";
import photo7 from "../access/7.jpg";
import photo9 from "../access/9.jpg";
import photo10 from "../access/10.jpg";
import photo11 from "../access/11.jpg";
import photo12 from "../access/12.jpg";
import photo13 from "../access/13.jpg";
import photo14 from "../access/14.jpg";
import photo15 from "../access/15.jpg";
import photo16 from "../access/16.jpg";
import photo17 from "../access/17.jpg";
import photo18 from "../access/18.jpg";
import photo19 from "../access/19.jpg";
import photo20 from "../access/20.jpg";
import photo21 from "../access/21.jpg";
import photo22 from "../access/22.jpg";
import photo23 from "../access/23.jpg";
import photo24 from "../access/24.jpg";
import photo25 from "../access/25.jpg";
import photo26 from "../access/26.jpg";
import photo27 from "../access/27.jpg";
import photo28 from "../access/28.jpg";
import photo29 from "../access/29.jpg";
import photo30 from "../access/30.jpg";
import photo31 from "../access/31.jpg";
import photo32 from "../access/32.jpg";
import photo33 from "../access/33.jpg";
import photo34 from "../access/34.jpg";
import photo35 from "../access/35.jpg";

const photo = [
    photo1, photo2,
    photo3, photo4,
    photo5, photo6,
    photo7, photo9, 
    photo10, photo11, 
    photo12, photo13, 
    photo14, photo15, 
    photo16, photo17, 
    photo18, photo19, 
    photo20, photo21, 
    photo22, photo23,
    photo24, photo25, 
    photo26, photo27, 
    photo28, photo29, 
    photo30, photo31,
    photo32, photo33, 
    photo34, photo35
  ]

export default function Galary() {
    const [loadImage, setLoadImage] = React.useState(true);
    React.useEffect(() => {setTimeout(() => {
        setLoadImage(false)
    }, 700)}, []);

    return (
        <div className="galary">
            <h1>ФОТОГАЛЕРЕЯ</h1>
            <div className="photos">
                {loadImage ?
                    <span className="loader"></span>
                    :
                    photo.map((p) => {return (<img className="photo" key={p} alt="img" src={p}/>);})
                }
            </div>
        </div>
    );
}