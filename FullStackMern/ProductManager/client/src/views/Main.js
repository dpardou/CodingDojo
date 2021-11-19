import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForms from '../components/ProductForms';
import ProductList from '../components/ProductList';
import { Link } from '@reach/router';


const Main = () =>{
    const [ product, setProduct ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(res =>{
                setProduct(res.data);
                setLoaded(true)
        });
    }, []);
    
    return (
        <div>
            <ProductForms/>
            <hr/>
            <h1>All Products: </h1>
            {loaded && <ProductList product={product}/>}
        </div>
    )
}

export default  Main;