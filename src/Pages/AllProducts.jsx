import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../Components/ProductCard/ProductCard';


const AllProducts = () => {

    const products = useSelector(state => state.products);

    return (
        <div>
            <h3>All Products</h3>


            <div className="Product-cards">
                {
                    products.map((product) =>
                        <ProductCard product={product} />
                    )
                }
            </div>


        </div>
    )

}

export default AllProducts;