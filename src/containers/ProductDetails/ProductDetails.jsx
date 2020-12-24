import React, { useEffect, useContext, useState } from 'react';
import { productContext } from '../../contexts/ProductsContext';
import { Grid, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket, faHeart} from '@fortawesome/free-solid-svg-icons';
import './ProductDetails.css'
const ProductToDetails = (props) => {
    const { productToDetails, detailsTodo, addAndDeleteProductInCart,
        checkProductInCart, sendComment, addAndDeleteLikesInProduct,
        checkProductInLikes, likesCount} = useContext(productContext)
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')

    const [newProduct, setNewProduct] = useState(productToDetails)
    useEffect(() => {
        detailsTodo(props.match.params.id)

    }, [])
    useEffect(() => setNewProduct(productToDetails), [productToDetails])
    function handleSave(e) {
        let obj = {
            userName: value1,
            userComment: value2
        }
        if (!obj.userName.trim() || !obj.userComment.trim()) {
            return alert("Заполните все поля")
        }
        sendComment(newProduct, obj)
        setValue1('')
        setValue2('')
        console.log(value1)
        console.log(value2)

    }

    return (
        <div>

            {productToDetails != null ?

                <>

                    <div className="main-details">
                        {/* {productToDetails.title} */}
                        <div className="img-block"> <img src={productToDetails.img} alt="" /> <h1 className="title">{productToDetails.title}</h1></div>
                        <div className="info">
                            <table>
                                <tbody>
                                    <tr className="trr">
                                        <th style={{
                                            width: '100%',
                                            display: "block"
                                        }}>Country :</th>
                                        <td style={{ display: 'block' }}>{productToDetails.country}</td>
                                    </tr>
                                    <tr className="trr">
                                        <th style={{
                                            width: '100%',
                                            display: "block"
                                        }}>Title :</th>
                                        <td style={{ display: 'block' }}>{productToDetails.title}</td>
                                    </tr>

                                    <tr className="trr">
                                        <th style={{
                                            width: '100%',
                                            display: "block"
                                        }}>Type :</th>
                                        <td style={{ display: 'block' }}>{productToDetails.type}</td>
                                    </tr>

                                    <tr className="trr">
                                        <th style={{
                                            width: '100%',
                                            display: "block"
                                        }}>Price :</th>
                                        <td style={{ display: 'block' }}>{productToDetails.price} $</td>
                                    </tr>
                                    <tr className="trr" >
                                        <th style={{
                                            width: '100%',
                                            display: "block"
                                        }}>Description :</th>
                                        <td style={{ display: 'block' }}>{productToDetails.description}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p style={{ cursor: 'pointer', color: checkProductInLikes(productToDetails.id) ? "red" : "black" }} onClick={() => addAndDeleteLikesInProduct(productToDetails)}><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> {likesCount}</p>
                            <Button onClick={() => addAndDeleteProductInCart(productToDetails)} color={checkProductInCart(productToDetails.id) ? "secondary" : "dark"} style={{ fontSize: '1.3em' }}>
                                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                            </Button>
                        </div>

                    </div><h3 style={{ display: "flex", justifyContent: "start" }}>Отзывы</h3>
                    <div className="comments">
                        <div>
                            {productToDetails.comments.map((item, index) => (
                                <div key={`${index + 1}`}>
                                    <div className="user-name" style={{ display: "flex", alignItems: "center", textAlign: "left", padding: "3%", border: "1px solid #d5d5d5", marginBottom: "20px" }}>
                                        <div className="user">
                                            <div style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                                              
                                       
                                     <img className="user-icon" style={{ width: "5%", marginRight: "3%" }} src='data:image/png;base64,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' alt="" />
                                                <h3>{item.userName}</h3>
                                            </div>
                                            <div className="comment" style={{ marginLeft: " 8%", width: "100%" }}>
                                                <span className="details-comment">
                                                    {item.userComment}
                                                </span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", margin: "30px", justifyContent: "center", alignItems: "center" }}>
                        <input
                            className="comment"
                            style={{ border: "none", borderRadius: "0%", borderBottom: "1px solid gray", width: "40%" }}
                            value={value1}
                            onChange={(e) => setValue1(e.target.value)}
                            name="userName"
                            placeholder="Ваше имя"
                            type="text"
                        />
                        <input
                            className="comment"
                            style={{ width: "40%",  margin: "30px 0" }}
                            value={value2}
                            onChange={(e) => setValue2(e.target.value)}
                            name="userComment"
                            placeholder="Ваш отзыв"
                            type="text">
                        </input>
                        <button className="save-comment-btn" onClick={handleSave}>Добавить комментарии </button>
                    </div>
                </>
                : 'Loading'}
        </div>
    );
};


export default ProductToDetails;