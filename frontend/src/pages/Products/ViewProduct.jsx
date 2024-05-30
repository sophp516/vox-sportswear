/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { get } from 'firebase/database';
import Navbar from '../../components/Navbar/Navbar';
import { addToCart, getSpecificProduct } from '../../services/datastore';
import React, {useEffect, useState } from 'react';
import './ViewProducts.css'

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
    
    const handlePurchase =() =>{
        if (size) {
            addToCart(props.selectedProduct,productInfo,size);
        } else {
            alert("select size")
        }
    }

    return(
        <div>
            <div className='view-product'>
                <button id= "back-btn" onClick={handleBack}>Back</button>
                <div className='view-product-wrapper'>
                 <div>
                 <img src='/assets/mockimg.png' width="100px" id = "product-img"/>
                 </div>
                <div>
                    <h2 id="prod-name">{productInfo.productName}</h2>
                    <p id="prod-desc">{productInfo.description}</p>
                    <p id="prod-price">${productInfo.price}</p>
                    <select onChange={handleSelectedSize} value={size}>
                            <option>Select Size</option>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                    </select>
                    <button id= 'purchase-btn' onClick={handlePurchase}>Purchase</button>
                </div>
                    </div>
            </div>
        </div>
    )
}
export default ViewProduct;