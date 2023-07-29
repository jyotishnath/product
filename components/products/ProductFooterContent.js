import Link from 'next/link';
import React from 'react';

const ProductFooterContent = () => {
    return (
        <div className="grid grid-cols-6 gap-4 mt-[120px] pb-20 px-5 xl:px-0">
            <div class="col-span-6 xl:col-start-2 xl:col-span-4 text-center">
                <div className='text-sm leading-4 text-black font-bold uppercase mb-4'>
                    a note from the editor
                </div>
                <div className='text-xl xl:text-[32px] font-normal leading-7 xl:leading-10'>The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar  lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky.
                </div>
                <div className='editor relative text-sm leading-4 text-black font-normal mt-4'>
                    By <Link className='underline uppercase' href="#">minna shim</Link>, Fashion Editor
                </div>
            </div>
        </div>
    );
}

export default ProductFooterContent;
