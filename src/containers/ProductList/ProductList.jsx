import React, {useContext, useEffect, useState} from 'react';
import { productContext } from '../../contexts/ProductsContext';
import ProductCard from '../Card/ProductCard/ProductCard';
import Pagination from '@material-ui/lab/Pagination';  
import { useHistory } from 'react-router-dom';
import './ProductList.css'
import FilterProduct from '../FilterProduct/FilterProduct';
const ProductLisct = () => {
    const { products, pageTask, totalCount,getproductsData } = useContext(productContext)
    useEffect(()=>{
        getproductsData()
    },[])
    const history = useHistory();
    const search = new URLSearchParams(history.location.search);

    return (
        <>
        
            <div className="product-list" >
                <FilterProduct/>
                {products.map(item => (
                    <ProductCard item={item} key={item.id} />
                ))}
            </div>
            <div className="pagination" >
                <Pagination onChange={(e, newpage) => pageTask(newpage)} page={parseInt(search.get("_page")) || 1} count={Math.ceil(totalCount / 3)} defaultPage={1} />
            </div>
        </>
    );
};

export default ProductLisct;