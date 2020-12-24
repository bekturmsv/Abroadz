import React from 'react';
import './modalSearch.css';

const modalSearch = (props) => {
    return (
        <div className="search-modal" >
            <input type="text" placeholder="Search" className="input-search" />
            <button onClick={props.closeModal} className="exit">&times;</button>
            <div className="to-exit">Нажмите на Х чтобы выйти</div>
        </div>
    );
};

export default modalSearch;