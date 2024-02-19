import React, { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [productData, setProductData] = useState([]);

    const [productDetails, setProductDetails] = useState(null);

    const updateProductDetails = (details) => {
        setProductDetails(details);
    };

    const value = {
        productData,
        setProductData,
        productDetails,
        updateProductDetails
    };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;
