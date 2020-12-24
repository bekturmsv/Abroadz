import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import './ExperienceCard.css';
import { JSON_API } from '../../../helpers/constants';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
import { productContext } from '../../../contexts/ProductsContext';

const Experience = () => {

    const { checkProductInExp, addAndDeleteLikesInExp, likesCount, likesExp } = useContext(productContext)

    const [exp, setExp] = useState([])

    async function getExp() {
        let { data } = await axios(`${JSON_API}/experience`)
        setExp(data)
    }
    useEffect(() => {
        getExp()
    }, [])
    console.log(exp)
    return (
        <div className="experience-main">
            {exp.map(item => (
                <div data-wow-duration="3s" className="card-experience wow animate__animated animate__fadeInTopLeft" key={item.id} style={{ marginTop: '30px' }}>
                    <div className="to-experience">ЛИЧНЫЙ ОПЫТ</div>

                    <div className="card-text">
                        <div className="card-experience-title">{item.title}</div>
                        <div className="card-experience-description">{item.description.slice(0, 50)}...</div>
                    </div>
                    <div className="likes">
                        <p
                            style={{ cursor: 'pointer', color: checkProductInExp(item.id) ? "white" : "black" }}
                            onClick={() => addAndDeleteLikesInExp(item)}><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> {item.likes}
                        </p>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default Experience;