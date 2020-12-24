import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './NavbarSearch.css';


function Navbar({input,updateInput}) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize, showButton', () => {
        console.log('sdsdsds');
    });

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    
                    <div className="logo">
                        {/* <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={img} style={{ height: "100px", width:"120px", marginTop: "30px" }} />
                    </Link> */}
                    {/* </div> */}
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={img} style={{ height: "100px", width:"120px", marginTop: "30px" }} />
                    </Link>
                        {/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={img} style={{ height: "100px", width:"120px", marginTop: "30px" }} />
                    </Link> */}
                    </div>
                    <div className="search-page">
                        <Link to="/search" className="link">
                            <input className="search-inp"></input>
                            <Link to="/home" className="close-link">
                            <div className="close-search">&times;</div>
                            </Link>
                        </Link>
                    </div>
                 

                </div>

            </nav>
        </>

    )
}

export default Navbar
