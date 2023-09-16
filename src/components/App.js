import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Video from "./Video";
import Galary from "./Galary";
import {Routes, Route, Link} from "react-router-dom";


export default function App() {
  return (
    <>
      <div className="navigation tint">
        <ul>
          <li><Link className="li" to="/">ГЛАВНАЯ</Link></li>
          <li><Link className="li" to="/galary">ФОТО</Link></li>
          <li><Link className="li" to="/video">ВИДЕО</Link></li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<><Header/> <Body/> <Footer/></>}/>
        <Route path="/galary" element={<><Galary/> <Footer/></>} />
        <Route path="/video" element={<><Video/> <Footer/></>}/>
      </Routes>
    </>
  );
}