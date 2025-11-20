import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <p className="text-gray-400 text-sm font-light mb-4 md:mb-0">
            © {new Date().getFullYear()} Jaime Quezada
          </p>
          <p className="text-gray-400 text-sm font-light">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

