import React from 'react';

const LoadingSpinner = ({ darkMode }) => {
    return (
      <div className={`min-h-screen p-8 transition-colors duration-200 ${
        darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 to-blue-50'
      }`}>
        <div className={`max-w-md w-full mx-auto rounded-xl shadow-lg overflow-hidden ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Todo List
              </div>
              <div className={`w-8 h-8 rounded-lg ${
                darkMode ? 'bg-gray-700' : 'bg-gray-100'
              }`}></div>
            </div>
  
            <div className="flex flex-col items-center justify-center py-8 space-y-4">
              <div className="relative w-16 h-16">
                <div className={`absolute inset-0 rounded-full border-4 border-t-4 animate-spin ${
                  darkMode 
                    ? 'border-gray-700 border-t-purple-500' 
                    : 'border-gray-100 border-t-purple-500'
                }`}></div>
              </div>
              <p className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Loading your todos...
              </p>
            </div>
  
            <div className="space-y-3">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    darkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full ${
                    darkMode ? 'bg-gray-600' : 'bg-gray-200'
                  } animate-pulse`}></div>
                  <div className={`flex-1 h-4 rounded ${
                    darkMode ? 'bg-gray-600' : 'bg-gray-200'
                  } animate-pulse`}></div>
                  <div className={`w-6 h-6 rounded ${
                    darkMode ? 'bg-gray-600' : 'bg-gray-200'
                  } animate-pulse`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default LoadingSpinner;