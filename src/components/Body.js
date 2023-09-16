import React from "react";
import boat from "../access/boat.svg";

export default function Body() {
    return (
        <>
            <div className="body" id="body">
                <div className="about">
                    <div className="about-text">
                        <h1>СПИСОК УСЛУГ</h1>
                    </div>
                    <div className="about-div">
                        <div className="about-div-box">
                            <div className="boat">
                                <img className="image-boat" src={boat} alt="boat"/>
                                <h2 className="text-boat">ПРОГУЛКА НА КАТЕРЕ</h2>
                                <p className="text-boat-price">1 - 1.5 ЧАСА С КУПАНИЕМ В ОТКРЫТОМ МОРЕ <a className="text-boat-discription" href="#null">1000 ₽</a></p>
                                <p className="text-boat-bonus">ПРОМОКОД "ТАРХАНКУТ" ДАЁТ 15% СКИДКИ</p>
                            </div>

                            <div className="boat">
                                <img className="image-boat" src={boat} alt="boat"/>
                                <h2 className="text-boat">ИНДИВИДУАЛЬНАЯ ПРОГУЛКА НА КАТЕРЕ</h2>
                                <p className="text-boat-price">1 - 1.5 ЧАСА С КУПАНИЕМ В ОТКРЫТОМ МОРЕ <a className="text-boat-discription" href="#null">5000 ₽</a></p>
                            </div>

                            <div className="boat">
                                <img className="image-boat" src={boat} alt="boat"/>
                                <h2 className="text-boat">РЫБАЛКА</h2>
                                <p className="text-boat-price">ЗА 1 ЧАС <a className="text-boat-discription" href="#null">3000 ₽</a></p>
                            </div>

                            <div className="boat">
                                <img className="image-boat" src={boat} alt="boat"/>
                                <h2 className="text-boat">ДАЙВИНГ</h2>
                                <p className="text-boat-price">1 ЧЕЛОВЕК <a className="text-boat-discription" href="#null">3500 ₽</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}