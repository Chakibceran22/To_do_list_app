import React from 'react';

const Footer = ({ darkMode = false }) => {
  return (
    <footer className={`fixed bottom-0 left-0 right-0 transition-colors duration-200 
      py-3 md:py-4 
      ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'}
      shadow-lg
      border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="w-full max-w-md mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-0.5 md:gap-1">
          <p className="text-xs sm:text-sm text-center">
            Made with{' '}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">
              ❤️
            </span>{' '}
            by Chakib 
          </p>
          <div className={`text-[10px] sm:text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            © {new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;