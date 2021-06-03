import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Cta from '../Components/Cta/Cta';
import ProductCard from '../Components/ProductCard/ProductCard';

import './styles/Homepage.css'

import scheduled from '../Images/scheduled.jpg'
import delivery from '../Images/delivery.jpg'

const Homepage = () => {

    const products = useSelector(state => state.products);

    const dispatch = useDispatch();

    return (
        <div className="homepage-container">
            <Cta />
            <div className="homepage-section-container">
                <h3>Most Popular</h3>
                <div className="horizontal-cards-container">
                    {
                        products.sort((a, b) => (parseInt(a.views) < parseInt(b.views)) ? 1 : ((parseInt(b.views) < parseInt(a.views)) ? -1 : 0))
                            .map((product, index) =>
                                index < 7 ? <ProductCard product={product} /> : null
                            )
                    }
                </div>

            </div>
            <div className="homepage-section-container">
                <div style={{display:"flex", justifyContent:"space-between"}}>

                    <h3>Our Products</h3>
                    <Link style={{textDecoration:"none", color:"var(--theme-deep-green)"}} to="/products">see all &gt;</Link>
                </div>
                <div className="Product-cards">
                    {
                        products.map((product, index) =>
                            index < 8 ? <ProductCard product={product} /> : null
                        )
                    }
                </div>
            </div>
            <div className="homepage-section-container">
                <div>
                    <div className="section-image-container">
                        <img src={scheduled} alt="" />
                    </div>
                    <div className="section-service-container">
                        <h3>SCHEDULE PICKUP</h3>
                        <p>At your convenience, we will deliver with a lightning speed.</p>
                    </div>
                </div>
                <div>
                    <div className="section-image-container">
                        <img src={delivery} alt="" />
                    </div>
                    <div className="section-service-container">
                        <h3>HOME DELIVERY</h3>
                        <p>Place an order and you can have them delivered directly to you. Shop online with great ease</p>
                    </div>
                </div>

            </div>



        </div>

    )



}

export default Homepage;