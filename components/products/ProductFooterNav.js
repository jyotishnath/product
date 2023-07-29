import React from 'react';

const ProductFooterNav = () => {
  // Footer links data
  const footerLinks = [
    { text: 'Jonathan Simkhai', url: '#' },
    { text: 'Blazers', url: '#' },
    { text: 'Viscose', url: '#' }
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 mt-24">
      <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 justify-center">
        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex md:flex-row md:space-x-6 justify-center gap-4 xl:gap-0">
            {/* Map through the footerLinks to generate footer navigation items */}
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="block py-2 text-black text-sm leading-4 uppercase md:hover:text-blue-700 underline"
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
};

export default ProductFooterNav;