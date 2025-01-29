import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../firebase/firebaseAuth';
import { Mail, ArrowLeft, Moon, Sun, ArrowRight } from 'lucide-react';

const ForgotPassword = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    document.title = 'Forgot Password - Todo App';
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  const validateEmail = () => {
    if (!email) {
      setError('Email is required');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateEmail()) {
      try {
        await sendPasswordResetEmail(auth, email);
        
        setSuccess(true);
        setError('');
        
      } catch (error) {
        setError(error.message);
        console.log(success)
      }
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 to-blue-50'
    } py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-md mx-auto">
        <div className={`rounded-xl shadow-lg p-8 transition-colors duration-200 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="flex justify-between mb-4">
            <button
              onClick={() => navigate('/login')}
              className={`p-2 rounded-lg transition-colors duration-200 flex items-center gap-2 ${
                darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <ArrowLeft size={20} />
              <span>Back to Login</span>
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors duration-200 cursor-pointer ${
                darkMode ? 'text-yellow-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="text-center mb-8">
            <h2 className={`text-3xl font-bold transition-colors duration-200 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Reset Password
            </h2>
            <p className={`mt-2 transition-colors duration-200 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Enter your email to receive reset instructions
            </p>
          </div>

          {success ? (
            <div className="text-center space-y-6">
              <div className={`p-4 rounded-lg ${
                darkMode ? 'bg-gray-700 text-green-400' : 'bg-green-50 text-green-800'
              }`}>
                Password reset email sent! Please check your inbox.
              </div>
              <button
                onClick={() => navigate('/login')}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg 
                  hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500 
                  flex items-center justify-center gap-2 group transition-all duration-200 hover:shadow-md"
              >
                <span>Return to Login</span>
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="relative">
                  <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
                    darkMode ? 'text-gray-500' : 'text-gray-400'
                  }`} size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-200 border
                      ${error ? 'border-red-500' : darkMode ? 'border-gray-600' : 'border-gray-200'}
                      ${darkMode
                        ? 'bg-gray-700 text-white border-gray-600 placeholder-gray-400'
                        : 'bg-white text-gray-900 border-gray-200 placeholder-gray-500'
                      }`}
                    placeholder="Enter your email"
                  />
                </div>
                {error && (
                  <p className="mt-1 text-sm text-red-500">{error}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg 
                  hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500 
                  flex items-center justify-center gap-2 group transition-all duration-200 hover:shadow-md"
              >
                <span>Send Reset Link</span>
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;