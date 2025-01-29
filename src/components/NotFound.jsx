import React, { useState, useEffect } from 'react';
import { Home, Moon, Sun } from 'lucide-react';

const NotFound = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.title = '404 - Page Not Found - Todo App';
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen p-8 transition-colors duration-200 ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 to-blue-50'
    }`}>
      <div className={`max-w-md mx-auto rounded-xl shadow-lg overflow-hidden ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className={`text-2xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>404 - Page Not Found</h1>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                darkMode 
                  ? 'text-yellow-300 hover:bg-gray-700' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="text-center py-8">
            <div className={`text-8xl font-bold mb-4 ${
              darkMode ? 'text-gray-700' : 'text-gray-200'
            }`}>
              404
            </div>
            <p className={`text-xl mb-8 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Oops! The page you're looking for doesn't exist.
            </p>
            <div className="flex justify-center">
              <a
                href="/"
                className={`bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center gap-2
                  transition-all duration-200 hover:from-purple-600 hover:to-blue-600 
                  hover:shadow-md active:scale-95`}
              >
                <Home size={20} />
                Back to Home
              </a>
            </div>
          </div>

          <div className={`text-center mt-6 ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <p className="text-sm">
              Lost? Try checking the URL or navigating back to the homepage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;