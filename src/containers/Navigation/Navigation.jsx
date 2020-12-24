import React, { useContext, useEffect, useState } from 'react';
import logo from './img/logo-abroadz.png'
import './Navigation.css';
import { Link } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,  faBookmark,  } from '@fortawesome/free-regular-svg-icons';
import Badge from '@material-ui/core/Badge';
import { faShoppingBag, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { productContext } from '../../contexts/ProductsContext';
const Navigation = () => {
    let [state, setState] = useState(false)
    const { productsCountInCart, productsCountInLiked, getproductsData } = useContext(productContext);
    function closeModal() {
        setState(false)
    }
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect(()=> {
        getproductsData()
    }, [productsCountInCart])
    return (

        <div className="fixed-top">
            <div>
                <div className="navigation">
                    <div className="nav-logo"><Link to="/"><img src={logo} alt="" /></Link></div>
                    <div className="nav-block">
                        <ul className="nav-list">
                            <li><Link className="nav-logo__link" to="/list">Страны</Link></li>
                            <li><Link className="nav-logo__link">Статьи</Link></li>
                            <li><Link className="nav-logo__link">Возможности</Link></li>
                            <li><Link className="nav-logo__link">Гиды</Link></li>
                            <li><Link className="nav-logo__link">Услуги</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="nav-more">
                            <li>
                                <Link to="/search"> <FontAwesomeIcon icon={faSearch} className="icon" /></Link></li>
                            <li><Badge badgeContent={productsCountInLiked} color="secondary" ><Link to="/wish"><FontAwesomeIcon icon={faBookmark} className="icon" /></Link></Badge></li>
                            <li>
                                <Badge badgeContent={ productsCountInCart} color="secondary" >
                                    <Link to="/cart">
                                        <FontAwesomeIcon icon={faShoppingBasket} className="icon" className="icon"></FontAwesomeIcon>
                                    </Link></Badge></li>
                            <li>

                                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{ minWidth: '0', padding: '5px' }}>
                                    <FontAwesomeIcon icon={faUser} className="icon" />
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <Link to="/admin">
                                        <MenuItem onClick={handleClose}>Admin</MenuItem>
                                    </Link>
                                    <Link to="/signin">
                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                    </Link>
                                </Menu>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Navigation;