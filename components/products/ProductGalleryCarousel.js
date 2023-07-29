import React from 'react';
import Slider from 'react-slick';

const ProductGalleryCarousel = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            <div>
                <div className='p_image pt-2'>
                    <img
                        src="/product-images/image 409.png"
                        alt='Product Image'
                    />
                </div>
            </div>
            <div>
                <div className='p_image pt-2'>
                    <img
                        src="/product-images/image 410.png"
                        alt='Product Image'
                    />
                </div>
            </div>
            <div>
                <div className='p_image pt-2'>
                    <img
                        src="/product-images/image 411.png"
                        alt='Product Image'
                    />
                </div>
            </div>
            <div>
                <div className='p_image pt-2'>
                    <img
                        src="/product-images/image 412.png"
                        alt='Product Image'
                    />
                </div>
            </div>
        </Slider>
    );
}

export default ProductGalleryCarousel;
