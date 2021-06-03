import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import ProductCard from '../Components/ProductCard/ProductCard';

import './styles/Productdetails.css'


const ProductDetails = () => {

    const [userQuantity, setUserQuantiy] = useState(1);

    let { slug } = useParams();

    const allProducts = useSelector(state => state.products);

    const baseUrl = useSelector(state => state.baseUrl);

    let [currentProduct] = allProducts.filter(product => product.slug === slug);

    const product = {
        "data": {
            "name": "1L King's Oil",
            "slug": "1l-king-s-oil",
            "image": "/public/product/kings 1l.png",
            "description": "Oil extract from vegetables",
            "category_id": "6",
            "shelf_life": "365",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2017-12-28 10:20:32",
            "updated_at": "2019-12-30 21:30:11",
            "active": "1",
            "is_vatable": "0",
            "absorb_vat": "0",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Unit",
                    "remaining": 24,
                    "price": "850",
                    "b2b_price": "",
                    "unit_discount_percent": "0",
                    "unit_discount": 63.75,
                    "sell_fractions": 0
                },
                {
                    "name": "Carton",
                    "remaining": 2,
                    "price": "9600",
                    "b2b_price": "",
                    "unit_discount_percent": "0",
                    "unit_discount": 720,
                    "sell_fractions": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "0",
            "views": "256",
            "total_qty": "0",
            "min_inv_level": "4",
            "min_procurement": "12",
            "procurement_type": "1",
            "id": 64,
            "category": {
                "name": "Oil",
                "slug": "oil",
                "image": "/public/category/1513358166.jpg",
                "deleted_at": "0000-00-00 00:00:00",
                "created_at": "2017-12-14 15:08:43",
                "updated_at": "2017-12-15 17:16:06",
                "active": "1",
                "id": "6"
            }
        },
        "enable_fb_comments": 0,
        "social_meta_data": {
            "title": "1L King's Oil | FoodLocker - Your Online Food Store",
            "type": "article",
            "card": "summary_large_image",
            "site_name": "FoodLocker",
            "description": "Get online delivery of 1L King's Oil (Unit, Carton) in Ibadan. Oil extract from vegetables FoodLocker - All Your Foodstuff in One Place. Order food items locally in Ibadan, Nigeria",
            "image": "https://v2.foodlocker.com.ng/public/product/kings 1l.png",
            "creator": "@foodlocker2",
            "section": "",
            "tag": "Oil, 1L King's Oil",
            "published_time": "2017-12-28T10:20:32+01:00",
            "modified_time": "2019-12-30T21:30:11+01:00",
            "url": "https://v2.foodlocker.com.ng/apiv1",
            "fb_admin": "393254194453680"
        }
    }

    useEffect(() => {

        async function fetchData() {
            let endpoint = `${baseUrl}?action=view&id=${currentProduct.id}`;

            console.log(endpoint);

            fetch(endpoint, {
                method: 'GET',
                mode: 'no-cors'
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    res = res ? JSON.parse(res) : {}

                    console.log(res);
                }
                )
                .catch(err => console.log(err))

            // axios.get(endpoint, {
            //     headers: {
            //         'Content-Type': 'application/x-www-form-urlencoded', 
            //         'Access-Control-Allow-Origin': '*'
            //     }
            // }).then(res => console.log(res))
        }

        fetchData()



        // fetch(endpoint, {
        //     method: 'GET',
        //     mode: 'no-cors'
        // })
        //     .then(res => res.text())
        //     .then(res => {
        //         console.log(res)
        //         res = res ? JSON.parse(res) : {}

        //         console.log(res);
        //     }
        //     )
        //     .catch(err => console.log(err))

        // const response = await fetch(endpoint, {
        //     method: 'GET',
        //     mode: 'no-cors',
        //     headers: {
        //     }
        //   });
        //   const string = await response.json();
        //   const json = string === "" ? {} : JSON.parse(string);
        //   console.log(json);



    }, [])

    const handleQuantityChange = type => {
        console.log(type);

        switch (type) {
            case "plus":

                setUserQuantiy(userQuantity + 1);

                break;
            case "minus":
                var newQuantity = (userQuantity - 1 < 1) ? 1 : userQuantity - 1;

                setUserQuantiy(newQuantity);
                break;

            default:
                break;
        }
    }



    return (
        <div className="product-details-container">

            <div>
                <h5>
                    <Link to={`/category/${product.data.category.slug}`}>{product.data.category.name}</Link>
                    &gt;
                    <Link>{product.data.name}</Link>
                </h5>
            </div>
            <h2 id="product-details-name">{product.data.name}</h2>

            <div className="product-detail-image-container">
                <img src={product.social_meta_data.image} alt="Product Image" />
            </div>
            <div className="product-details-data-container">

                <div className="product-details-price-container">
                    {
                        product.data.quantities.map((quatity, index) => (
                            <div>
                                <input type="radio" name="quantity" id={quatity.name} />
                                <label htmlFor={quatity.name}>{`₦${quatity.price} per ${quatity.name}`}</label>
                            </div>

                        ))
                    }
                </div>

                <div className="quantity-picker-container">

                    <div className="btn-round btn-minus" onClick={() => handleQuantityChange("minus")}>
                        -
                    </div>
                    <p id="user-quantiy">{userQuantity}</p>

                    <div className="btn-round btn-plus" onClick={() => handleQuantityChange("plus")}>
                        +
                    </div>
                </div>

                <div className="add-to-cart-btn">
                    <button>Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>

                </div>

                <div className="product-details-description">
                    <h4>Description</h4>
                    <p>{product.social_meta_data.description}</p>
                </div>

            </div>
            
            <div className="products-details-related-container">
                <h3 style={{fontFamily: "Rubik, sans-serif"}}>Related Products</h3>

                <div className="horizontal-cards-container">
                    {
                        allProducts
                        .filter(p => p.category_id == product.data.category_id)
                        .map(p => (
                            <ProductCard product={p} />
                        ))
                    }
                </div>
            </div>

        </div>
    )

}

export default ProductDetails;