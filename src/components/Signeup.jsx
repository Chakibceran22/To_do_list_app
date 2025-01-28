import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Moon, Sun } from 'lucide-react';


const Signeup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        }
    }, []);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (!formData.name) {
            newErrors.name = 'Name is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
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
        <div className={`min-h-screen transition-colors duration-200 ${darkMode
                ? 'bg-gray-900'
                : 'bg-gradient-to-br from-purple-50 to-blue-50'
            } py-12 px-4 sm:px-6 lg:px-8`}>
            <div className="max-w-md mx-auto">
                <div className={`rounded-xl shadow-lg p-8 transition-colors duration-200 ${darkMode ? 'bg-gray-800' : 'bg-white'
                    }`}>
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2 rounded-lg transition-colors duration-200 ${darkMode
                                    ? 'text-yellow-300 hover:bg-gray-700'
                                    : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    <div className="text-center mb-8">
                        <h2 className={`text-3xl font-bold transition-colors duration-200 ${darkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                            Create Account
                        </h2>
                        <p className={`mt-2 transition-colors duration-200 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                            Sign up for a new account
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div>
                            <div className="relative">
                                <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${darkMode ? 'text-gray-500' : 'text-gray-400'
                                    }`} size={20} />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-200 border
                      ${errors.name ? 'border-red-500' : darkMode ? 'border-gray-600' : 'border-gray-200'}
                      ${darkMode
                                            ? 'bg-gray-700 text-white border-gray-600 placeholder-gray-400'
                                            : 'bg-white text-gray-900 border-gray-200 placeholder-gray-500'
                                        }`}
                                    placeholder="Enter your name"
                                />
                            </div>
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                            )}
                        </div>


                        <div>
                            <div className="relative">
                                <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${darkMode ? 'text-gray-500' : 'text-gray-400'
                                    }`} size={20} />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-200 border
                    ${errors.email ? 'border-red-500' : darkMode ? 'border-gray-600' : 'border-gray-200'}
                    ${darkMode
                                            ? 'bg-gray-700 text-white border-gray-600 placeholder-gray-400'
                                            : 'bg-white text-gray-900 border-gray-200 placeholder-gray-500'
                                        }`}
                                    placeholder="Enter your email"
                                />
                            </div>
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <div className="relative">
                                <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${darkMode ? 'text-gray-500' : 'text-gray-400'
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
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
                                        }`}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                            )}
                        </div>



                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg 
                hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500 
                flex items-center justify-center gap-2 group transition-all duration-200 hover:shadow-md"
                        >
                            Create Account
                            <ArrowRight
                                size={20}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className={`text-sm transition-colors duration-200 ${darkMode
                                ? 'text-gray-300 '
                                : 'text-gray-600 '
                            }`}>Already have an account? <button
                                onClick={() => {

                                    navigate('/login');
                                }}
                                className={`text-sm transition-colors duration-200 ${darkMode
                                        ? 'text-gray-300 hover:text-purple-400 cursor-pointer'
                                        : 'text-gray-600 hover:text-purple-600 cursor-pointer'
                                    }`}
                            >
                                Login
                            </button></p>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Signeup