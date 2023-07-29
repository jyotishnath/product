import dynamic from "next/dynamic";
import React from 'react';
import Slider from "react-slick";

const ProductGallery = () => {
  // Product images data
  const productImages = [
    "/product-images/image 409.png",
    "/product-images/image 411.png",
    "/product-images/image 410.png",
    "/product-images/Frame 1117.png",
    "/product-images/image 412.png",
  ];
  
  return(
    <div className="productGallery relative">
      <div className='p_image pt-2'>
        <img
          src={productImages[0]}
          alt='Product Image'
        />
      </div>
      <div className="grid mx-auto max-w-screen-1xl gap-12 md:grid-cols-2">
        {productImages.slice(1, 3).map((image, index) => (
          <div key={index} className='p_image pt-2'>
            <img
              src={image}
              alt='Product Image'
            />
          </div>
        ))}
      </div>
      {productImages.slice(3).map((image, index) => (
        <div key={index} className='p_image pt-2'>
          <img
            src={image}
            alt='Product Image'
          />
        </div>
      ))}
    </div>
  )
	
}

export default dynamic (() => 
  Promise.resolve(ProductGallery), 
  {ssr: false}
)