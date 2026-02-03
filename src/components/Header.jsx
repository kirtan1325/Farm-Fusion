import React from 'react'

const Header = () => {
  return (
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

  )
}

export default Header
