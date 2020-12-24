import React from 'react';
import './Footer.css'
import RunLine from './RunLine/RunLine';

import {
    faInstagram,
    faFacebook,
    faVk,
    faTelegram,
    faWhatsapp,
    faFacebookMessenger
}
    from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-description">
                <div data-wow-duration="3s" className="footer-description__block wow animate__animated animate__fadeInLeft">
                    <span className="first-block-info">Главная задача Abroadz — сделать процесс иммиграции и получения международного опыта максимально простым и понятным</span>
                </div>
                <div data-wow-duration="3s" className="footer-description__block wow animate__animated animate__fadeInRight">
                    <span className="second-block-info">Мы рассказываем о том, как поступить в зарубежные вузы, найти работу, открыть бизнес, получить паспорт другой страны и обо многом другом. А также помогаем пройти каждый шаг на этом пути.</span><br />
                    <div className="arrow-circle">Оставить заявку на консультацию <svg class="arrow-circle-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <g fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                            <circle class="arrow-circle-iconcircle" cx="16" cy="16" r="15.12"></circle>
                            <path class="arrow-circle-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                        </g>
                    </svg></div>
                </div>
            </div>
            <div className="running-line">
                <RunLine/>
            </div>
            <div className="contacts-footer">
                <div className="abroadz-2020">© 2020 Abroadz.</div>
                <div className="soc-network">
                <ul className="head-list">
                    <li>
                        <a href="https://facebook.com" ><FontAwesomeIcon icon={faFacebook} className="brands-icon-footer" /></a>
                    </li>

                    <li>
                        <a href="https://instagram.com/bec0sh"><FontAwesomeIcon icon={faInstagram} className="brands-icon-footer" /></a>
                    </li>

                    <li>
                        <a href="https://vk.com"><FontAwesomeIcon icon={faVk} className="brands-icon-footer" /></a>
                    </li>

                    <li>
                        <a href="https://te.me"><FontAwesomeIcon icon={faTelegram} className="brands-icon-footer" /></a>
                    </li>

                    <li>
                        <a href="https://wa.me"><FontAwesomeIcon icon={faWhatsapp} className="brands-icon-footer" /></a>
                    </li>

                    <li>
                        <a href="https://m.me"><FontAwesomeIcon icon={faFacebookMessenger} className="brands-icon-footer" /></a>
                    </li>

                    <li>
                        <a href="https://gmail.com"><FontAwesomeIcon icon={faEnvelope} className="brands-icon-footer" /></a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;