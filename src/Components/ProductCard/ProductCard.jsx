import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Productcard.css'


const ProductCard = ({product}) => {

    return (
        <div className="product-card-container">

            <Link className="product-card-image-container" to={`/product/${product.slug}`} >
                <img src={product.image} alt="" />
            </Link>
            <Link className="product-card-details-container" to={`/product/${product.slug}`} >
                <h4 className="product-name">{product.name}</h4>
                <div className="product-variant-container">
                    {product.quantities.map(variant => (
                        <h4>{variant.name} : ₦{variant.price}</h4>
                    )
                    )}
                </div>
            </Link>
            <div className="product-card-button-container">
                <button>Add to cart</button>
            </div>

        </div>
    )
}

export default ProductCard;