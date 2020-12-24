import React, { useState } from 'react';
import AddProduct from '../AddProduct/AddProduct';
import ProductListAdmin from '../ProductListAdmin/ProductListAdmin';

const AdminPage = () => {
   
    return (
        <div>
          
            <AddProduct/>
            <ProductListAdmin/> 
            
        </div>
    );
};

export default AdminPage;