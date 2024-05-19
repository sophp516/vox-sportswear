/* eslint-disable no-unused-vars */
import Navbar from '../../components/Navbar/Navbar';
import './Products.css';
import { getAllProducts } from '../../services/datastore';
import React, { useEffect, useState } from 'react';
import ViewProduct from './ViewProduct';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [viewProduct, setViewProduct] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(''); // holds the ID of the Product 
    console.log(products);

    useEffect(() => {
        getAllProducts((GetProducts) => {
            if (GetProducts) {
                const productArray = Object.keys(GetProducts).map((productKey) => (
                    {
                        id: productKey,
                        ...GetProducts[productKey]
                    }
                ));
                setProducts(productArray);
            }
        });
    }, [])

    const handleViewClick = (id) => {
        setSelectedProduct(id);
        setViewProduct(true);
    }

    return (
        <div>
            <Navbar />
            {viewProduct ? (
                <div>
                    <h3 className="all-clothing-title">
                        ALL CLOTHING
                    </h3>
                    <ViewProduct selectedProduct={selectedProduct} setViewProduct={setViewProduct} />
                </div>
            ) : (
                <div>
                    <ul id="layout">
                        {products.map((product) => (
                            <li key={product.id} className="layout-item" onClick={() => handleViewClick(product.id)}>
                                <img src='/assets/mockimg.png' width="250px" height="400px" alt={product.productName} />
                                <p className="p-name">{product.productName}</p>
                                <p className="p-price">${product.price}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Products;
