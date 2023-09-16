import React from "react";
import {SiGooglemaps} from "react-icons/si";

export default function Header() {
    let link = "https://yandex.ru/maps/?ll=32.497956%2C45.345150&mode=poi&poi%5Bpoint%5D=32.497959%2C45.345188&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D57146995366&z=20.97";

    return (
        <div className="header tint" id="header">
            <div className="header-box-text">
                <h1>ПРОГУЛКИ НА КАТЕРАХ</h1>
                <p>Морские прогулки на катере по самым красивым местам мыса Тарханкут в Оленевке</p>
                <a href={link} target="_blank" rel="noreferrer" className="link"><SiGooglemaps className="icon"/>Черноморский р-н, с.Оленевка</a> 
                <br/>
                <br/>
                <a href="tel:+79787460471" className="link">+7(978)746-04-71 - Евгений</a>
                <div><a className="podrobnee" href="#body">ПОДРОБНЕЕ</a></div>
                <div><a href="https://wa.me/79787460471" target="_blank" rel="noreferrer" className="link">ОСТАВИТЬ ЗАЯВКУ</a></div>
            </div>
        </div>
    );
}