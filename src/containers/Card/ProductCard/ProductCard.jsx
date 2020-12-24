import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBookmark } from '@fortawesome/free-solid-svg-icons';
import { productContext } from '../../../contexts/ProductsContext';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import './ProductCard.css'


const useStyles = makeStyles((theme) => ({
    root: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
        margin: '10px',
        textAlign: 'center',
        paddingLeft: '60px',
    },
    media: {
        height: "25vh",
        paddingTop: '56.25%',
        backgroundSize: "contain"
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

export default function ProductCard({ item }) {
    const [value, setValue] = useState(`${item.rating}`);
    const [hover, setHover] = useState(-1);
    const classes = useStyles();

    const { addAndDeleteProductInCart,
        checkProductInCart,
        addAndDeleteProductInLiked,
        checkProductInLiked,
        ratingProduct,
        getproductsData
    } = useContext(productContext)
    function handleClick(id, rating) {
        ratingProduct(id, rating)
    }

    return (
        <div className="product-card" >
            <Card style={{boxShadow: 'none'}} >
                <div className="card-line">
                </div>
                <CardHeader
                    title={<Typography variant="h5" align="center" style={{fontWeight: 'bold'}}>{item.title}</Typography>}
                /><Link to={`/details/` + item.id}>
                    <CardMedia
                        className={classes.media}
                        image={item.img}
                    /></Link>
                    <div className="btn-in-card">
                    <Button onClick={() => addAndDeleteProductInLiked(item)} color={checkProductInLiked(item.id) ? "secondary" : "dark"} style={{ fontSize: '1.3em' }}>
                        <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
                    </Button>
                    <Button onClick={() => addAndDeleteProductInCart(item)} color={checkProductInCart(item.id) ? "secondary" : "dark"} style={{ fontSize: '1.3em' }}>
                        <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                    </Button>
                    </div>
                <CardActions style={{ justifyContent: "space-around", display: 'block' }}>
                    <Typography variant="h6" align="center">
                        {item.price} сом
                    </Typography>
                    <Typography variant="h6" align="center">
                        {item.description.slice(0,50)}...
                    </Typography>
                    
                </CardActions>
                
            </Card>

        </div>
    );
}