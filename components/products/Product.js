import dynamic from "next/dynamic";
import React from 'react';
import ProductDetailTabs from './ProductDetails.tsx';
import ProductInfo from './ProductInfo';
import ProductFooterContent from './ProductFooterContent';
import ProductGalleryCarousel from "./ProductGalleryCarousel";
import ProductWidget from './ProductWidget';
import ProductFooterNav from './ProductFooterNav';

const Product = () => {
    if (typeof window === "object") {
		if(window.innerWidth <= 1159 ) {
			return(
				<>
                    <ProductGalleryCarousel />
                    <ProductWidget />
                    <ProductFooterNav />
                    <ProductFooterContent />
                </>
			)
		} else {
			return(
				<>
                    <div className="grid mx-auto 2xl:w-5/6 xl:w-[1160px] gap-12 grid-cols-[25%_minmax(40%,_1fr)_25%]">
                        <div>                
                            <ProductDetailTabs />
                        </div>
                        <ProductInfo />
                    </div>
                    <ProductFooterNav />
                    <ProductFooterContent />
                </>
			)
		}
	}
}

export default dynamic (() => 
    Promise.resolve(Product), 
    {ssr: false}
)