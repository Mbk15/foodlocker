import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './Sidenav.css'

import logo from '../../Images/logo.webp'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Navlinks from './Navlinks'


const Sidenav = () => {

    const isSidebarOpen = useSelector(state => state.isSideNavOpen);

    const categories = useSelector(state => state.categories);

    const user = useSelector(state => state.user);

    const dispatch = useDispatch();



    return (
        <div className={`${isSidebarOpen ? "sidebaropen" : ""} sidenav-container`}  >
            <div className="sidenav-top">
                <div className="sidenav-logo-container">
                    <img src={logo} alt="" />
                </div>

                <button id="sidenav-close-btn" onClick={() => dispatch({ type: 'TOOGGLESIDEBAR' })}>X</button>
            </div>
            <div>
                <h3 className="menu-title">My account</h3>
                <div className="sidebar-submenu">
                    {
                        Navlinks.filter(nLink => nLink.category === "MyAccount")
                            .map(lnk =>
                                <div className="sidebar-link-container">
                                    <Link className="sidebar-link" to={lnk.to} onClick={() => dispatch({ type: 'TOOGGLESIDEBAR' })}>
                                        <FontAwesomeIcon className="sidebar-icon" icon={lnk.icon} />
                                        {lnk.name}
                                    </Link>
                                </div>
                            )
                    }
                </div>

            </div>
            <div className="sidebar-title-container">
                <h3 className="menu-title">Categories</h3>

                <Link to="/categories" onClick={() => dispatch({ type: 'TOOGGLESIDEBAR' })}>see all &gt;</Link>
            </div>

            <div className="categories-container sidebar-submenu">
                {
                    categories.map(category =>
                        <div className="sidebar-category">
                            <Link to={`/category/${category.slug}`} className="sidebar-category-link" onClick={() => dispatch({ type: 'TOOGGLESIDEBAR' })}>
                                <div className="sidebar-image-icon-container" >
                                    <img src={category.image} alt="" />
                                </div>
                                {category.name}
                            </Link>
                        </div>)
                }
            </div>



        </div>
    )

}

export default Sidenav;