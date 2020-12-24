import React, { useContext, useEffect, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { productContext } from '../../../contexts/ProductsContext';
import './ProductListAdmin.css'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
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


const ProductListAdmin = () => {
    // const [state, setState]= useState([])
    const classes = useStyles();


    const {
        getproductsAdmin,
        detailsTodo,
        totalCount,
        products,
        deleteTask,
        editTodo,
        pageAdmin
    } = useContext(productContext)





    useEffect(() => {
        getproductsAdmin()
    }, [])
    const history = useHistory();
    const search = new URLSearchParams(history.location.search);
    return (
        <>

            <div className="product-card-admin">
                {products.map(item => (
                    <Card className={classes.root} key={item.id} className="cardd">
                        <CardHeader
                            title={<Typography variant="h5" align="center">{item.title}</Typography>}
                        />
                        <Link to={'/details/'+item.id}>
                        <CardMedia
                            className={classes.media}
                            image={item.img}
                        /></Link>
                        <CardActions style={{ justifyContent: "space-around" }}>
                            <Typography variant="h5">
                                {item.price}
                            </Typography>

                            <IconButton aria-label="delete" color="primary" onClick={() => deleteTask(item.id)}><DeleteIcon /></IconButton>
                            <Link to="/edit">
                                <IconButton variant="outlined" color="primary" className="btn-edit" onClick={() => editTodo(item.id)}><CreateIcon /></IconButton>
                            </Link>
                            
                        </CardActions>
                    </Card>
                ))}
            </div>


            <Pagination onChange={(e, newpage) => pageAdmin(newpage)} page={parseInt(search.get("_page")) || 1} count={Math.ceil(totalCount / 3)} defaultPage={1} />


        </>
    );
};







export default ProductListAdmin;

