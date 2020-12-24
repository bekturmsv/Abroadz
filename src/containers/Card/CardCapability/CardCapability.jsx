import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { JSON_API } from '../../../helpers/constants';
import './CardCapability.css';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    imgBlock: {
        width: '100%',
        borderRadius: '10px'
    },
    container: {
        paddingLeft: '100px',
    }
}))
const CardCapability = () => {
    const classes = useStyles();
    const [images, setImages] = useState([])
    async function getImgs() {
        let { data } = await axios(`${JSON_API}/capability-foto`)
        console.log(data);
        setImages(data)
    }

    useEffect(() => {
        getImgs()
    }, [])
    return (
        <div className="capability-card ">
            <Grid className={classes.container} container spacing={5} item md={12}>
                {images.map(item => (
                    <div item md={4} data-wow-duration="3s" className="img-div wow animate__animated animate__fadeInLeft" key={item.id}> <div className="images"><img src={item.img} alt="" />
                        <span className="img-label">{item.label}</span>
                    </div>
                    </div>
                ))}
            </Grid>
        </div>
    );
};

export default CardCapability;