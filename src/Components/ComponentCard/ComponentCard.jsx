import React from 'react'
import './ComponentCard.css'


const ComponentCard = () => {

    const bg = "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/category/1513358122.jpg&size=150";

    return (
        <div className="category-card-container">
            <div style={{backgroundImage: `url(${bg})`}}>
                <span>Category 1</span>
            </div>

        </div>
    )

}

export default ComponentCard;