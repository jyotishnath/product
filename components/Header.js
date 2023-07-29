import React from 'react';
import Image from 'next/image';

const Header = () => {
  // Navigation links data
  const navLinks = [
    { text: 'the edit', url: '#' },
    { text: 'new arrivals', url: '#' },
    { text: 'designers', url: '#' },
    { text: 'clothing', url: '#' },
    { text: 'shoes', url: '#' },
    { text: 'bags', url: '#' },
    { text: 'accessories', url: '#' },
    { text: 'Jewelry', url: '#' },
    { text: 'Beauty', url: '#' },
    { text: 'home', url: '/' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 left-0">
      <div className="2xl:w-5/6 xl:w-[1160px] flex flex-wrap items-center justify-between mx-auto p-4 xl:pl-0">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-normal whitespace-nowrap dark:text-white">MY COMPANY.COM</span>
        </a>
        <div className="flex md:order-2">
          <div className='flex flex-wrap items-center gap-x-3'>
            {/* Replace Image components with actual icons */}
            {/* Add proper URL paths for the href attribute */}
            <Image
              src="/icons/Search.svg"
              width="24"
              height="24"
              alt="Search"
            />
            <Image
              src="/icons/Bag.svg"
              width="24"
              height="24"
              alt="Cart"
            />
            <a href="#">
              <Image
                src="/icons/Account.svg"
                width="24"
                height="24"
                alt="Login"
                className='xl:block md:block hidden'
              />
            </a>
          </div>
          <button data-collapse-toggle="navbar-sticky" type="button" className="h-10 inline-flex items-center rounded-lg" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <img src="/icons/Hemburger.svg" />
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {/* Map through the navLinks to generate navigation items */}
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="block py-2 text-black text-sm leading-4 uppercase md:hover:text-blue-700"
                  aria-current="page"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
