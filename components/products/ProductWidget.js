// import Link from 'next/link';
// import React from 'react';

// const ProductWidget = () => {
//     return (
//         <div className='productWidget'>
//             <h1 className='text-5xl leading-[2.875rem] text-black'>JONATHAN SIMKHAI</h1>
//             <div className='text-sm text-black leading-4 mb-2'>Lurex Linen Viscose Jacket in Conchiglia</div>
//             <div className='text-sm text-black leading-4 font-semibold'>$225</div>
//             <div className='otherSpec mt-6'>
//                 <div className='text-sm text-black leading-4 uppercase'>
//                     <span className='font-semibold'>Color</span> Conchiglia
//                 </div>
//                 <div className="flex gap-0.5 mt-1">
//                     <div className='p_thumb pt-1 border border-inherit w-12 h-16 cursor-pointer hover:border-black'>
//                         <img
//                             className='object-cover'
//                             src="/product-images/image 411.png"
//                             alt='Product Image'
//                         />
//                     </div>
//                     <div className='p_thumb pt-1 border border-inherit w-12 h-16 cursor-pointer hover:border-black'>
//                         <img
//                         src="/product-images/image 410.png"
//                         alt='Product Image'
//                         />
//                     </div>
//                 </div>
//                 <div className="flex justify-between mt-6">
//                     <div className='text-sm text-black leading-4 uppercase'>
//                         <span className='font-semibold'>Size</span> L
//                     </div>
//                     <div className='text-sm text-black leading-4 uppercase underline'>
//                         <Link href="#">
//                             SIZE GUIDE
//                         </Link>
//                     </div>
//                 </div>
//                 <div class="grid grid-cols-4 gap-4 mt-3 mb-6">
//                     <button class="w-20 p-1 rounded-full text-sm leading text-black bg-white border border-slate-300 hover:bg-black hover:text-white uppercase relative">xs</button>
//                     <button class="w-20 p-1 rounded-full text-sm leading text-black bg-white border border-slate-300 hover:bg-black hover:text-white uppercase relative">s</button>
//                     <button type='button' class="w-20 p-1 rounded-full text-sm leading text-black bg-white border border-slate-300 hover:bg-black hover:text-white uppercase relative strike" disabled>m</button>
//                     <button class="w-20 p-1 rounded-full text-sm leading text-black bg-white border border-slate-300 hover:bg-black hover:text-white uppercase relative">l</button>
//                     <button class="w-20 p-1 rounded-full text-sm leading text-black bg-white border border-slate-300 hover:bg-black hover:text-white uppercase relative">xxl</button>
//                 </div>
//                 <button type='button' className='addToCart w-full py-4 rounded-full text-white bg-black text-sm leading-4 font-normal uppercase'>
//                     <span className='relative'>add to bag</span>
//                 </button>
//                 <div className='text-sm text-black leading-4 uppercase mt-6'>
//                     Get 4 interest-free payments of $196.25 with Klarna LEARN MORE
//                 </div>
//                 <div className='text-sm text-black leading-4 uppercase mt-4'>
//                     Speak to a Personal Stylist CHAT NOW
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProductWidget;

import Link from 'next/link';
import React from 'react';

// Product data (can be fetched from an API or any other source)
const products = [
  {
    name: 'JONATHAN SIMKHAI',
    description: 'Lurex Linen Viscose Jacket in Conchiglia',
    price: '$225',
    color: 'Conchiglia',
    size: 'L',
    images: [
      '/product-images/image 411.png',
      '/product-images/image 410.png',
    ],
  },
  // Add more product objects here if needed
];

const ProductWidget = ({ product }) => {
  return (
    <div className='productWidget px-5 xl:px-0 mt-10 xl:mt-0'>
      <h1 className='text-5xl leading-[2.875rem] text-black'>{product.name}</h1>
      <div className='text-sm text-black leading-4 mb-2'>{product.description}</div>
      <div className='text-sm text-black leading-4 font-semibold'>{product.price}</div>
      <div className='otherSpec mt-6'>
        <div className='text-sm text-black leading-4 uppercase'>
          <span className='font-semibold'>Color</span> {product.color}
        </div>
        <div className="flex gap-0.5 mt-1">
          {product.images.map((image, index) => (
            <div key={index} className='p_thumb pt-1 border border-inherit w-12 h-16 cursor-pointer hover:border-black'>
              <img
                className='object-cover'
                src={image}
                alt={`Product Image ${index}`}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          <div className='text-sm text-black leading-4 uppercase'>
            <span className='font-semibold'>Size</span> {product.size}
          </div>
          <div className='text-sm text-black leading-4 uppercase underline'>
            <Link href="#">
              SIZE GUIDE
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-3 mb-6">
          <button className="w-20 p-1 rounded-full text-sm leading text-black bg-white border border-slate-300 hover:bg-black hover:text-white uppercase relative">xs</button>
          <button className="w-20 p-1 rounded-full text-sm leading text-black bg-white border border-slate-300 hover:bg-black hover:text-white uppercase relative">s</button>
          <button type='button' className="w-20 p-1 rounded-full text-sm leading text-black bg-white border border-slate-300 hover:bg-black hover:text-white uppercase relative strike" disabled>m</button>
          <button className="w-20 p-1 rounded-full text-sm leading text-black bg-white border border-slate-300 hover:bg-black hover:text-white uppercase relative">l</button>
          <button className="w-20 p-1 rounded-full text-sm leading text-black bg-white border border-slate-300 hover:bg-black hover:text-white uppercase relative">xxl</button>
        </div>
        <button type='button' className='addToCart w-full py-4 rounded-full text-white bg-black text-sm leading-4 font-normal uppercase'>
          <span className='relative'>add to bag</span>
        </button>
        <div className='text-sm text-black leading-4 uppercase mt-6'>
          Get 4 interest-free payments of $56.25 with Klarna LEARN MORE
        </div>
        <div className='text-sm text-black leading-4 uppercase mt-4'>
          Speak to a Personal Stylist CHAT NOW
        </div>
      </div>
    </div>
  );
}

const ProductPage = () => {
  return (
    <div>
      {products.map((product, index) => (
        <ProductWidget key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductPage;
