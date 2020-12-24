import React from 'react';
import './Head.css';

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

const Head = () => {
    return (
            <div className="head">
                <ul className="head-list">
                    <li>
                        <a href="https://facebook.com" ><FontAwesomeIcon icon={faFacebook} className="brands-icon" /></a>
                    </li>

                    <li>
                        <a href="https://instagram.com/bec0sh"><FontAwesomeIcon icon={faInstagram} className="brands-icon" /></a>
                    </li>

                    <li>
                        <a href="https://vk.com"><FontAwesomeIcon icon={faVk} className="brands-icon" /></a>
                    </li>

                    <li>
                        <a href="https://te.me"><FontAwesomeIcon icon={faTelegram} className="brands-icon" /></a>
                    </li>

                    <li>
                        <a href="https://wa.me"><FontAwesomeIcon icon={faWhatsapp} className="brands-icon" /></a>
                    </li>

                    <li>
                        <a href="https://m.me"><FontAwesomeIcon icon={faFacebookMessenger} className="brands-icon" /></a>
                    </li>

                    <li>
                        <a href="https://gmail.com"><FontAwesomeIcon icon={faEnvelope} className="brands-icon" /></a>
                    </li>
                </ul>
                <ul className="cooperate">
                    <li>
                        <Link className="cooperate-link" to="/signin">Sign In</Link>
                    </li>

                    <li>
                        <Link className="cooperate-link" to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </div>
    );
};

export default Head;