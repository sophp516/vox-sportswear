/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { initFirebase, getAllCart } from "../../services/datastore.js";
import { getAuth } from 'firebase/auth';
import './Navbar.css'

const Navbar = () => {

    const app = initFirebase();
    const auth = getAuth(app);
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

    return (
        <div className="navbar">
           <div className="div1"> 
           <img className='logo' src="../../public/assets/image-2.png"></img>
            </div>
            <div className="nav-buttons-wrap">
            `   <NavLink className="inactive" id="nav-btn" activeClassName="active" to="/">Home</NavLink> 
                <NavLink className="inactive" id="nav-btn" activeClassName="active" to="/aboutus">AboutUs</NavLink>
                <NavLink className="inactive" id="nav-btn" activeClassName="active" to="/products">Products</NavLink>
                <NavLink className="inactive" id="nav-btn"activeClassName="active" to="/mycart">
                    Cart
                    {/* <div className="cart-length-container">
                        {cartProducts.length > 0 && <span className="length-span">{cartProducts.length}</span>}
                    </div> */}
                </NavLink>
                <NavLink className="inactive" id="nav-btn"activeClassName="active" to="/account">
                    {auth.currentUser ? auth.currentUser.displayName : "Register/Login"} 
                </NavLink>
                
            </div>
        </div>
    )
}

export default Navbar;
