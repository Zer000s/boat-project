import React from "react";
import {AiOutlineInstagram} from "react-icons/ai";
import {FaTelegram} from "react-icons/fa";
import {SlSocialVkontakte} from "react-icons/sl";

export default function Footer() {
    return (
        <div className="footer tint">
            <div className="footer-phone">
                <a href="tel:+79787460471" className="link">+7(978)746-04-71</a>
            </div>

            <div className="footer-social">
                <a href="https://instagram.com/tarhankut_" className="icon-link" target="_blank" rel="noreferrer"><AiOutlineInstagram className="icon" onClick={()=>{alert("Не забудьте включить VPN")}}/></a>
                <a href="https://t.me/tarkhankut_trip" className="icon-link" target="_blank" rel="noreferrer"><FaTelegram className="icon"/></a>
                <a href="https://vk.com/crimea.tarhankut82" className="icon-link" target="_blank" rel="noreferrer"><SlSocialVkontakte className="icon"/></a>
            </div>
        </div>
    );
}