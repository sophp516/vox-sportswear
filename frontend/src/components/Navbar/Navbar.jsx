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
            <NavLink className="inactive" activeClassName="active" to="/">Home</NavLink> 
            </div>
            <NavLink className="inactive" activeClassName="active" to="/aboutus">AboutUs</NavLink>
            <NavLink className="inactive" activeClassName="active" to="/products">Products</NavLink>
            <NavLink className="inactive" activeClassName="active" to="/mycart">
            {auth.currentUser ? auth.currentUser.displayName : "MyAccount"} / Cart
                <div className="cart-length-container">
                    {cartProducts.length > 0 && <span className="length-span">{cartProducts.length}</span>}
                </div>
            </NavLink>
        </div>
    )
}

export default Navbar;
