import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/aboutus">AboutUs</NavLink>
            <NavLink to="/mycart">MyCart</NavLink>
            <NavLink to="/products">Products</NavLink>
        </div>
    )
}

export default Navbar;
