import React from 'react';
import './RunLine.css'
const RunLine = () => {
    return (
        <div
            className="run-line"
            style={{
                width: '100%',
                whiteSpace: 'nowrap',
                fontSize: '4.5em'

            }}
        >

            <div className="back">
                <h1 className="marquee" behavior="alternate"><span>You Can Change The World</span></h1>
                {/* <marquee behavior="alternate">{text}</marquee> */}
            </div>
        </div>
    );
};

export default RunLine;