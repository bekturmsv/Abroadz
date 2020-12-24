import React from 'react';
import './Experience.css';
import ExperienceCard from '../Card/ExperienceCard/ExperienceCard'
const Experience = () => {
    return (
        <div className="main-exp">
            <div data-wow-duration="3s" className="experience-header wow animate__animated animate__fadeInBottomRight">
                <h1 className="experience-title">Личный Опыт</h1>
                <div className="blue-line"></div>
                <div className="experience-description">Делимся историями наших подписчиков, которые уже переехали и <br/> реализовали свои планы. Если вы тоже хотите стать героем нашей рублики <br/> личный опыт, напишите нам на info@abroadz.com или в любую из наших <br/> соц.сетей</div>
            </div>
            <div className="cards">
                <ExperienceCard/>
            </div>
        </div>
    );
};

export default Experience;