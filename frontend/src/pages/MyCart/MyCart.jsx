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
    const handle_delete = (id) => {
        if (cartProducts.length === 1){
            deleteFromCart(id);
            setCartProducts([]);
        }else{
            deleteFromCart(id);
        }
    }

    return (
        <div>
            <Navbar />
            <div className="cart-main">
            <div className="cart">
                <div className='card-headers'>
                    {/* <h3></h3> */}
                    <h3>Description</h3>
                    <h3>    </h3>
                  
                    <h3>Size </h3>
                    <h3>Quantity</h3>
                    <h3>Remove</h3>
                    <h3>Price</h3>
                </div>
            {cartProducts.length === 0 ?
                <p>your cart is currently empty</p>
                : cartProducts.map((product)=>(
                    <div className="cart-card" key={product.id}>
                        <div className="cart-inner-description">
                            <div className='item-description-container'>
                                <img src='/assets/mockimg.png' width="150px" />
                                <p>{product.productName}</p>
                            </div>
                            <p>{product.size}</p>
                            <div className="quantity-btn-container">
                                <button onClick={() => handleCartQuantity(product.id, 'decrement')} disabled={product.quantity <= 1}>-</button>
                                <p className="q-p">{product.quantity}</p>
                                <button onClick={() => handleCartQuantity(product.id, 'increment')}>+</button>
                            </div>
                            <button id="delete-from-cart" onClick={() => handle_delete(product.id)}>x</button>
                            <p>$ {product.price}</p>
                          
                        </div>
                    </div>
            ))}
           </div>
           <div className="right-cart-container">
                <h2>Summary</h2>
                <p>Total Cost:</p>
                <button>check out</button>
                <MyAccount />
           </div>
           </div>
        </div>
    )
}

export default MyCart;
