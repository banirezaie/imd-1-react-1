import { NavLink } from "react-router-dom";

const Header = () => {
    const activeStyle = { color: "orange" }

    return (
        <nav className="container-fluid" >
            <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink> | <NavLink to="/courses" activeStyle={activeStyle}>Course Page</NavLink> | <NavLink to="/about" activeStyle={activeStyle}>About us</NavLink>
        </nav>
    )
}

export default Header;