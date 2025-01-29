import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff, Moon, Sun, ArrowRight } from 'lucide-react';

const ResetPassword = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one lowercase letter';
    } else if (!/(?=.*[A-Z])/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter';
    } else if (!/(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one number';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically make an API call to reset the password
      setSuccess(true);
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
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
          <div className="flex justify-end mb-4">
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
              Please enter your new password
            </p>
          </div>

          {success ? (
            <div className={`p-4 rounded-lg text-center ${
              darkMode ? 'bg-gray-700 text-green-400' : 'bg-green-50 text-green-800'
            }`}>
              Password successfully reset! Redirecting to login...
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="relative">
                  <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
                    darkMode ? 'text-gray-500' : 'text-gray-400'
                  }`} size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-12 py-2 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-200 border
                      ${errors.password ? 'border-red-500' : darkMode ? 'border-gray-600' : 'border-gray-200'}
                      ${darkMode
                        ? 'bg-gray-700 text-white border-gray-600 placeholder-gray-400'
                        : 'bg-white text-gray-900 border-gray-200 placeholder-gray-500'
                      }`}
                    placeholder="Enter new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
                      darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <div>
                <div className="relative">
                  <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
                    darkMode ? 'text-gray-500' : 'text-gray-400'
                  }`} size={20} />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-12 py-2 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-200 border
                      ${errors.confirmPassword ? 'border-red-500' : darkMode ? 'border-gray-600' : 'border-gray-200'}
                      ${darkMode
                        ? 'bg-gray-700 text-white border-gray-600 placeholder-gray-400'
                        : 'bg-white text-gray-900 border-gray-200 placeholder-gray-500'
                      }`}
                    placeholder="Confirm new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
                      darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
                )}
              </div>

              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Password must contain:
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>At least 8 characters</li>
                  <li>One uppercase letter</li>
                  <li>One lowercase letter</li>
                  <li>One number</li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg 
                  hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500 
                  flex items-center justify-center gap-2 group transition-all duration-200 hover:shadow-md"
              >
                <span>Reset Password</span>
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;