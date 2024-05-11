/* eslint-disable no-unused-vars */
import Navbar from '../../components/Navbar/Navbar';
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
           {cartProducts.map((product)=>(
                <div key={product.id}>
                    <p>{product.productName}</p>
                    <img />
                </div>
           ))}
        </div>
    )
}

export default MyCart;
