import React, { useEffect, useState } from 'react';
import ProductGallery from './ProductGallery';
import ProductWidget from './ProductWidget';

const ProductInfo = () => {
    const [isSticky, setSticky] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.scrollY;
        const firstColumnHeight = document.querySelector("#product-gallery").clientHeight;

        if (scrollTop > firstColumnHeight) {
            setSticky(false);
        } else {
            setSticky(true);
        }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div id="product-gallery" className="flex-1 pt-6">
                <ProductGallery /> 
            </div>
            <div className={`flex-1 pt-24 ${isSticky ? 'sticky' : ''}`}>
                <ProductWidget />
            </div>
        </>
    );
}

export default ProductInfo;
