import { Grid } from '@material-ui/core';
import React from 'react';
import Articles from '../../containers/Articles/Articles'
import Slider from '../../containers/Slider/Slider';
import Capabilities from '../../containers/Capabilities/Capabilities'
import './Home.css'
import Experience from '../../containers/Experience/Experience';
import TGBlock from '../../containers/TGBlock/TGBlock';
import Footer from '../../containers/Footer/Footer';
import HomeVideo from '../../containers/HomeVideo/HomeVideo';
const Home = () => {
    return (
        <Grid container  item md = {12}>
            <HomeVideo/>
            <Articles/>
            <Capabilities/>
            <Experience/>
        </Grid>
    );
};

export default Home;