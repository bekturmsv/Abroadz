import React from 'react';
import CardCapability from '../Card/CardCapability/CardCapability';
import './Capabilities.css'
const Capabilities = () => {
    return (
        <div className="main">
            <div data-wow-duration="3s" className="capability-header wow animate__animated animate__fadeInTopRight">
                <h1 className="capability-title">Возможности</h1>
                <div className="blue-line"></div>
                <div className="capability-description">Собираем лучшие уникальные возможности за рубежом: стипендии  и <br/>гранты, стажировки и вакансии, арт-резиденции и многое другое</div>
            </div>
            <div className="capability-img">
                <CardCapability/>
            </div>
            <div data-wow-duration="3s" className="btn  wow animate__animated animate__fadeInBottomRight">
               <button className="btn-more">Load More</button>
           </div>
        </div>
    );
};

export default Capabilities;