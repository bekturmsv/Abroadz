import React from 'react';
import '../Articles/Articles.css';
import { Grid } from '@material-ui/core';
import {CardArticle, CardArticle2, CardArticle3, CardArticle4, CardArticle5} from '../Card/CardArticle/CardArticle'
const Articles = () => { 
    return (
        
        <Grid className="articles"  >
            <div data-wow-duration="2s" className="article-header wow animate__animated animate__fadeInTopRight">
                <h1 className="article-title">Статьи</h1>
                <div className="blue-line"></div>
                <div className="article-description">Об иммиграции в деталях: как получить визу (и какую именно), поступить в <br/> вуз, найти работу, пройти весь процесс иммиграции от А до Я</div>
            </div>

            <div className="container1">
               
                <CardArticle/>
                <CardArticle2 />
                
            </div>
            <div className="container2">
               
               <CardArticle3/>
               <CardArticle4 />
               <CardArticle5 />
               
           </div>
           <div data-wow-duration="3s" className="btn wow animate__animated animate__fadeInBottomRight ">
               <button className="btn-more-article ">Load More</button>
           </div>
        </Grid>
       
            
    );
};

export default Articles;