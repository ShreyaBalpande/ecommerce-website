import React from "react";
import './DescriptionBox.css';


const DescriptionBox = () => {
return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerse website is an online platform that facilitate the buying and selling of products or services over the internet. It serves a virtual marketplace where busnisess and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical pesence.E-commerce website have gained immense popularity due to their convenience, accessibility, nad the gloabal reach they offer.</p>
            <p> E-commerce websites typically display products or services along with detailed descriptions, images, prices and an avilable variations(e.g., sizes,colors).Each product usually hs its own dedicated page with relevant information.</p>
        </div>
    </div>
)
}

export default DescriptionBox;