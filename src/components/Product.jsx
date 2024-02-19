import React, { useState, useEffect } from "react";
import axios from 'axios';

import BasicRating from "./Client/Rating";
function Product() {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/product")
            .then((response) => {
                setProductData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching :", error);
            });
    }, []);

    return (
        <div className="container mx-auto">
            <div className="text-2xl font-bold mb-4">Products</div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {productData.map((product, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg">
                        <div className="h-48 overflow-hidden mb-2">
                            <img src={product.file} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="font-semibold">{product.name}</div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-700 text-sm">(${product.price})</span>
                            <div className="text-gray-700">Ratings:<BasicRating prod={product}/> {product.ratings}</div>
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-black text-white px-14 py-2">Add To Cart</button>
                        </div> 
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;
