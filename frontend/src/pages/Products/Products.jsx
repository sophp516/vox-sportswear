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
            <div>
                {products.map((product)=>(
                    <div key={product.id}>
                        <button onClick={ () => handleViewClick (product.id)}>
                            <img src='/assets/mockimg.png' width="100px"/>
                            <p>{product.productName}</p>
                        </button>
                    </div>
                ))} 
            </div>}
        </div>
    )
}

export default Products;
