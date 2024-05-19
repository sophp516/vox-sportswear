/* eslint-disable no-unused-vars */
import Navbar from '../../components/Navbar/Navbar';
import MyAccount from '../../auth/MyAccount';
import './MyCart.css'
import { getAllCart } from '../../services/datastore';
import { useEffect, useState } from 'react';

const MyCart = () => {
    const [cartProducts, setCartProducts] = useState([]);
    console.log(cartProducts);
    useEffect(()=>{
        getAllCart((getItems)=>{
            if(getItems){
                const cartArray = Object.keys(getItems).map((key)=>(
                    {
                        id: key,
                        ...getItems[key]
                    }
                ))
                setCartProducts(cartArray);
            }
        })
    }, [])
    return (
        <div>
            <Navbar />
            <div className="cart">
            {cartProducts.length === 0 ?
                <p>your cart is currently empty</p>
                : cartProducts.map((product)=>(
                    <div key={product.id}>
                        <p>{product.productName}</p>
                        <img src='/assets/mockimg.png' width="100px" />
                        <p>{product.price}</p>
                        <p>{product.size}</p>
                    </div>
            ))}
           </div>
           <MyAccount />
        </div>
    )
}

export default MyCart;
