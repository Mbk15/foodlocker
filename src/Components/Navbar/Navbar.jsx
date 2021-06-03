import React from 'react'
import './Navbar.css'
import logo from '../../Images/logo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'


const Navbar = () => {

    const dispatch = useDispatch();

    return (
        <div className="navbar-container">
            

            <div className="navbar-left">

            

                <FontAwesomeIcon icon={faBars} size="2x" 
                onClick={() => dispatch({ type: 'TOOGGLESIDEBAR' })}/>

                <img src={logo} alt="Logo" id="logo"/>

            </div>

            <div className="navbar-right">
                {/* <Link to="/register">
                <FontAwesomeIcon icon={faUser} size="2x"/>
                </Link> */}
                
                <FontAwesomeIcon id="shopping-cart" icon={faShoppingCart} size="2x" color="black"/>
            </div>

        </div>
    )

}

export default Navbar;