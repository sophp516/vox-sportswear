/* eslint-disable no-unused-vars */
import Navbar from '../../components/Navbar/Navbar';
import './Products.css'
import { getAllProducts } from '../../services/datastore';
import React,{useEffect, useState } from 'react';
import ViewProduct from './ViewProduct';
const Products = () => {
    const [products, setProducts] = useState([]);
    const [viewProduct, setViewProduct] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(''); // holds the ID of the Product 
    console.log(products);
    
    useEffect(()=>{
        getAllProducts((GetProducts)=>{
            if (GetProducts){
                const productArray = Object.keys(GetProducts).map((productKey)=>(
                    {  id: productKey,
                        ...GetProducts[productKey]
                    }
                ));
                setProducts(productArray);
            }
        });
     }, [])

     const handleViewClick = (id)=>{
        setSelectedProduct(id);
        setViewProduct(true);
     }


    return (
        <div>
            <Navbar /> 
            {viewProduct ? 
            <div>
                <ViewProduct selectedProduct={selectedProduct} setViewProduct={setViewProduct}/>
            </div> 
            : 
            <div className="products-holder">
                {products.map((product)=>(
                    <div className="product-card" key={product.id}>
                        <button id="product-page-button" onClick={ () => handleViewClick (product.id)}>
                            <img src='/assets/mockimg.png' width="200px"/>
                            <div>
                                <p>{product.productName}</p>
                                <p>$ {product.price}</p>
                            </div>
                        </button>
                    </div>
                ))} 
            </div>}
        </div>
    )
}

export default Products;
