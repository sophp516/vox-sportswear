import { NavLink } from "react-router-dom";
import { initFirebase } from "../../services/datastore.js";
import { getAuth } from 'firebase/auth';
import './Navbar.css'

const Navbar = () => {

    const app = initFirebase();
    const auth = getAuth(app);

    return (
        <div className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/aboutus">AboutUs</NavLink>
            <NavLink to="/mycart">MyCart</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/myaccount">{auth.currentUser ? auth.currentUser.displayName : "MyAccount"}</NavLink>
        </div>
    )
}

export default Navbar;
