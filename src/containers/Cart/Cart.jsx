import React, { useEffect, useContext } from 'react';
import { productContext } from '../../contexts/ProductsContext';
import { calcSubPrice, calcTotalPrice } from '../../helpers/CalcPrice';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Cart.css'
import ProductToDetails from '../ProductDetails/ProductDetails';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

function Cart() {
    const { cartData, getCart, changeCountProducts, makeOrder, deleteItem } = useContext(productContext);
    useEffect(() => {
        getCart()
    }, [])

    console.log('cart', cartData)

    function handleChangeCount(e, id) {
        changeCountProducts(e.target.value, id)
    }

    return (<>
        <div className="cart">
            {cartData && cartData.products != false ? (
                 <>
                <div className="cart-products">
                    {console.log(cartData)}
                        {cartData.products.map(item => (
                            <div className="card-in-cart">
                                <img src={item.product.img} alt="" className="img-in-cart" />
                                <h3 className="title-product-cart">{item.product.title}</h3>
                                <input onChange={(e) => handleChangeCount(e, item.product.id)}
                                    type="number" value={item.count} min="1" />
                                <p className="price-product-in-cart">Цена: {item.product.price}</p>
                                <p className="description-product-cart">{item.product.description.slice(0, 30)}...</p>
                                <button onClick={() => deleteItem(item.product.id)} className="delete-btn-cart">Delete</button>
                                <p className="media-title"> Итого : {calcSubPrice(item)}</p>
                            </div>
                        ))}

                    </div>

                    <h4 className="total-price">Total: {calcTotalPrice(cartData.products)}</h4>
                    <Link to='/makeorder'>
                        <button onClick={(e) => makeOrder()} className="pay-cart">
                            Pay
                        </button>
                    </Link>
                   </>
            ) :
             <> 
            <div style={{width: '100%', textAlign:'center', marginTop: '50px'}}>
                <div>
                    <FontAwesomeIcon icon={faExclamation} style={{fontSize: '3.5em'}}></FontAwesomeIcon>
                </div>
                <div><h1>Ваша Корзина Пуста</h1></div>
                <Link to="/list">
                <button className="cart-empty-btn">Перейти к продуктам</button>
                </Link>

            </div>
            </>}
                    
                </div>
                
               
                    </>
            )
}

export default Cart
