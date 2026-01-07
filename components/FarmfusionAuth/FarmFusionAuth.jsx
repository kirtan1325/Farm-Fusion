import React, { useState } from 'react';
import './FarmFusion.css'

const FarmFusionAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Logging in..." : "Registering...", formData);
  };

  return (
    <div className="min-h-screen bg-[#8ba848] flex flex-col font-sans transition-all duration-500">
      {/* Header Logo Area */}
      <header className="p-6 flex items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#ff914d] rounded-sm flex items-center justify-center">
             <span className="text-white font-bold">🌾</span>
          </div>
          <h1 className="text-white text-xl md:text-2xl font-semibold tracking-tight">
            Farm Fusion – Smart Farming Platform
          </h1>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow flex items-center justify-center p-4 md:p-10">
        <div className="w-full max-w-6xl bg-white rounded-[40px] overflow-hidden flex shadow-2xl min-h-[600px]">
          
          {/* Left Side: Landscape Image */}
          <div 
            className="hidden md:block md:w-1/2 bg-cover bg-center transition-all duration-700"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000')` 
            }}
          >
          </div>

          {/* Right Side: Auth Form Container */}
          <div className="w-full md:w-1/2 bg-[#3e5623] p-8 md:p-16 flex flex-col justify-center text-white">
            <h2 className="text-3xl font-bold mb-2">
              {isLogin ? 'Welcome to Farm Fusion' : 'Create an Account'}
            </h2>
            <p className="text-sm mb-8 opacity-80 uppercase tracking-wide">
              {isLogin ? 'Login into your account' : 'Join the smart farming community'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full px-6 py-3 rounded-full bg-[#d9d9d9] text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  onChange={handleChange}
                  required
                />
              )}

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-6 py-3 rounded-full bg-[#d9d9d9] text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                onChange={handleChange}
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-6 py-3 rounded-full bg-[#d9d9d9] text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                onChange={handleChange}
                required
              />

              <div className="relative w-1/2 min-w-[140px]">
                <select
                  name="role"
                  className="w-full px-6 py-3 rounded-full bg-[#d9d9d9] text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-400 cursor-pointer"
                  onChange={handleChange}
                  required
                  defaultValue=""
                >
                  <option value="" disabled>Role</option>
                  <option value="farmer">Farmer</option>
                  <option value="supplier">Supplier</option>
                  <option value="admin">Admin</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-600">
                  ▼
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 px-12 py-2.5 bg-[#d9d9d9] text-[#3e5623] font-bold rounded-full hover:bg-white transition-all transform hover:scale-105"
              >
                {isLogin ? 'Login' : 'Register'}
              </button>
            </form>

            <p className="mt-10 text-sm">
              {isLogin ? "New User? " : "Already have an account? "}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="font-bold border-b border-transparent hover:border-white transition-all"
              >
                {isLogin ? 'Register Now' : 'Login Here'}
              </button>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FarmFusionAuth;