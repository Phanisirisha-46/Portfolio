// components/Layout.js
import React from 'react';
import './Layout.css';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      
<header className="flex justify-between items-center px-6 py-4">
  <Link to="/" className="typewriter text-xl sm:text-2xl md:text-3xl lg:text-4xl roboto-slab-name ml-2 sm:ml-2 md:ml-4 lg:ml-11 xl:ml-12">
    Veeranki Phani Sirisha
  </Link>
</header>


      {/* Page content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="py-8 px-8 text-base">
        <div className="px-10">
          <p className="mb-1 roboto-slab-name text-3xl text-left text-gray-800 font-semibold">
            Let’s Connect! <span className="inline-block animate-wave">👋</span>
          </p>
          <p className="mb-4 text-left text-gray-600 text-base">Feel free to connect through:</p>
          <div className="flex flex-wrap justify-start items-center gap-5 mb-4">
            <a href="https://github.com/Phanisirisha-46" target="_blank" rel="noopener noreferrer">
              <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3271892/github-icon-md.png" alt="GitHub" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/siiri.46/" target="_blank" rel="noopener noreferrer">
              <img src="http://sandrine-houillier-design.com/wp-content/uploads/2020/08/logo-instagram-noir-350x350.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/veeranki-phani-sirisha-423179249/" target="_blank" rel="noopener noreferrer">
              <img src="https://www.edigitalagency.com.au/wp-content/uploads/linkedin-icon-black-png.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="mailto:veerankiphanisirisha@example.com" target="_blank" rel="noopener noreferrer">
              <img src="https://www.pngkey.com/png/full/14-143562_gmail-logo-png-gmail-logo-black-and-white.png" alt="Gmail" className="w-6 h-6" />
            </a>
          </div>
          <p className="text-center text-sm text-gray-700">© 2025 Veeranki Phani Sirisha</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
