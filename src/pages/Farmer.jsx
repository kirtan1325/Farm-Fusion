import React from 'react'

const Farmer = () => {
  return (
    <div className="w-full md:w-1/2 bg-[#3e5623] p-8 md:p-16 flex flex-col justify-center text-white">

      <form className="space-y-5">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="w-full px-6 py-3 rounded-full bg-[#d9d9d9] text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full px-6 py-3 rounded-full bg-[#d9d9d9] text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full px-6 py-3 rounded-full bg-[#d9d9d9] text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        />

        <div className="relative w-1/2 min-w-35">
          <select
            name="role"
            className="w-full px-6 py-3 rounded-full bg-[#d9d9d9] text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-400 cursor-pointer"
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
        </button>
      </form>

      <p className="mt-10 text-sm">
        <button
          className="font-bold border-b border-transparent hover:border-white transition-all"
        >
        </button>
      </p>
    </div>
  )
}

export default Farmer
