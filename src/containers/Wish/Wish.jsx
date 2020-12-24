import React, { useContext, useEffect } from 'react';
import { productContext } from '../../contexts/ProductsContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'
import { faShoppingCart, faHeart, faExclamation } from '@fortawesome/free-solid-svg-icons';
import {  Button } from '@material-ui/core';
import './Wish.css'
const Wish = () => {
    const { getLiked, likeData, deleteItemInLiked, addAndDeleteProductInCart, checkProductInCart} = useContext(productContext)
    useEffect(() => {
        getLiked()
    }, [])
    console.log(likeData)
    return (
        <div className="cart">
            {likeData && likeData.products != false ? (
                <>
                <div>
                    {console.log(likeData)}
                    
                            {likeData.products.map(item => (
                                <div className="card-in-cart">
                                <img src={item.product.img} alt="" className="img-in-cart" />
                                <h3 className="title-product-cart">{item.product.title}</h3>
                                <p className="price-product-in-cart">Цена: {item.product.price}</p>
                                <p className="description-product-cart">{item.product.description.slice(0, 30)}...</p>
                                <button onClick={() => deleteItemInLiked(item.product.id)} className="delete-btn-cart">Delete</button>
                                <button  onClick={() => addAndDeleteProductInCart(item.product)} className="add-btn-wish" color={checkProductInCart(item.product.id) ? "black" : "red"} style={{ fontSize: '1.3em', cursor: 'pointer' }}> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                            </div>
                            ))}
                </div>
                </>
            ) : 
            (<> 
            <div style={{width: '100%', textAlign:'center', marginTop: '50px'}}>
                <div>
                    <FontAwesomeIcon icon={faExclamation} style={{fontSize: '3.5em'}}></FontAwesomeIcon>
                </div>
                <div><h1>Ваши "Избранные" пусты</h1></div>
                <Link to="/list">
                <button className="cart-empty-btn">Перейти к продуктам</button>
                </Link>

            </div>
            </>)}

        </div>
    );
};

export default Wish;