/* eslint-disable no-unused-vars */
import Navbar from '../../components/Navbar/Navbar';
import MyAccount from '../../auth/MyAccount';
import './MyCart.css'
import { getAllCart, updateCartQuantity, deleteFromCart } from '../../services/datastore';
import { useEffect, useState } from 'react';

const MyCart = () => {
    const [cartProducts, setCartProducts] = useState([]);

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

    const handleCartQuantity = (id, operation) => {
        setCartProducts(prevCartProducts => {
            return prevCartProducts.map(product => {
                if (product.id === id) {
                    const newQuantity = operation === 'increment' ? product.quantity + 1 : product.quantity - 1;
                    updateCartQuantity(id, newQuantity);
                    return { ...product, quantity: newQuantity };
                }
                return product;
            });
        });
    }

    return (
        <div>
            <Navbar />
            <div className="cart-main">
            <div className="cart">
            {cartProducts.length === 0 ?
                <p>your cart is currently empty</p>
                : cartProducts.map((product)=>(
                    <div className="cart-card" key={product.id}>
                        <img src='/assets/mockimg.png' width="150px" />
                        <div className="cart-inner-description">
                            <button id="delete-from-cart" onClick={() => deleteFromCart(product.id)}>x</button>
                            <p>{product.productName}</p>
                            <p>$ {product.price}</p>
                            <p>{product.size}</p>
                            <div className="quantity-btn-container">
                                <button onClick={() => handleCartQuantity(product.id, 'decrement')} disabled={product.quantity <= 1}>-</button>
                                <p className="q-p">{product.quantity}</p>
                                <button onClick={() => handleCartQuantity(product.id, 'increment')}>+</button>
                            </div>
                        </div>
                    </div>
            ))}
           </div>
           <div className="right-cart-container">
                <MyAccount />
                <button>check out</button>
           </div>
           </div>
        </div>
    )
}

export default MyCart;
