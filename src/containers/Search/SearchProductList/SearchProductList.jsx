
import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { productContext } from '../../../contexts/ProductsContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import './SearchProductList.css'
const CountryList = ({countryList=[]}) => {
    const { addAndDeleteProductInCart, checkProductInCart, addAndDeleteProductInLiked, checkProductInLiked, ratingProduct,  getproductsData} = useContext(productContext)

    return (
        <>
        {countryList.map((item,index)=>{
            if(item) {
                return(
                    <div className="product-card" key={item.id}>
                    <Card style={{boxShadow: 'none'}} >
                        
                        <CardHeader
                            title={<Typography variant="h5" align="center">{item.title}</Typography>}
                        />
                        <div className="img-block-search">
                        <Link to={`/details/` + item.id}>
                        <img src={item.img} alt="" />
                        </Link>
                        </div>
                        <CardActions style={{ justifyContent: "space-around" }}>
                            <Typography variant="h6">
                                {item.price} сом
                            </Typography>
                            
                            <Button onClick={() => addAndDeleteProductInLiked(item)} color={checkProductInLiked(item.id) ? "secondary" : "dark"} style={{ fontSize: '1.3em' }}>
                        <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
                    </Button>
                    <Button onClick={() => addAndDeleteProductInCart(item)} color={checkProductInCart(item.id) ? "secondary" : "dark"} style={{ fontSize: '1.3em' }}>
                        <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                    </Button>
                        </CardActions>
                    </Card>
                </div>
                )
            }
            return null
        })}
        </>
    );
};

export default CountryList;