import { NavLink } from "react-router-dom";
import { initFirebase } from "../../services/datastore.js";
import { getAuth } from 'firebase/auth';
import './Navbar.css'

const Navbar = () => {

    const app = initFirebase();
    const auth = getAuth(app);

    return (
        <div className="navbar">
            <NavLink className="inactive" activeClassName="active" to="/">Home</NavLink>
            <NavLink className="inactive" activeClassName="active" to="/aboutus">AboutUs</NavLink>
            <NavLink className="inactive" activeClassName="active" to="/products">Products</NavLink>
            <NavLink className="inactive" activeClassName="active" to="/mycart">{auth.currentUser ? auth.currentUser.displayName : "MyAccount"} / Cart</NavLink>
        </div>
    )
}

export default Navbar;
