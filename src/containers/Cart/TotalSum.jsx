import React, { useState } from 'react';
import { productContext } from '../../contexts/ProductsContext';
import { useContext, useEffect } from 'react';

function TotalSum() {
    const { makeOrder } = useContext(productContext)
    const [state, setState] = useState(null)
console.log(state)
    useEffect(() => {
        let cart = makeOrder()
        setState(cart)
        console.log(cart)
    }, [])
    console.log(state)
    return (
        <div>
            {state != null ? state.totalPrice: false}
        </div>
    )
}

export default TotalSum
