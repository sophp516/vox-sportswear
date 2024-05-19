/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { get } from 'firebase/database';
import Navbar from '../../components/Navbar/Navbar';
import { addToCart, getSpecificProduct } from '../../services/datastore';
import React, {useEffect, useState } from 'react';
import './Products.css'


const ViewProduct =(props) => {
    const [productInfo, setProductInfo] = useState([]);
    const [size, setSize] = useState();
    console.log("productinfo,", size);

    useEffect(() => {
        getSpecificProduct(props.selectedProduct, (GetProduct) => {
            if (GetProduct) {
                setProductInfo(GetProduct);  // Set the fetched product to the state
            }
        });
    }, []);

    /* Returns to the all product page */
    const handleBack=()=>{
        props.setViewProduct(false);
    }
    /*Tracks the selected size by user */
    const handleSelectedSize =(e) =>{ 
        setSize(e.target.value);
    }
    
    const handlePurcahse =() =>{
        addToCart(props.selectedProduct,productInfo,size);
    }
    return(
        <div>
            <ul id="layout">
                <li class="layout-item">
                    <button onClick={handleBack}>Back</button>
                    <p id="p-name">{productInfo.productName}</p>
                    <p id="p-desc">{productInfo.description}</p>
                    <img src='/assets/mockimg.png' width="100px"/>
                    <p id="p-price">${productInfo.price}</p>
                    <select onChange={handleSelectedSize} value={size}>
                            <option>Select Size</option>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                    </select>
                    <button onClick={handlePurcahse}>Purchase</button>
                </li>
            </ul>
        </div>
    )
}
export default ViewProduct;