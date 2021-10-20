import React from 'react'

const Header = () => {
  return (
    <div className='container px-6 py-4'>
      <div className='md:flex md:items-center md:justify-between'>
        <div className='flex items-center justify-between'>
          <div>
            <img 
              className='h-8'
              src='https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png' 
              alt=''
            />
          </div>

          {/* <!-- Mobile menu button --> */}
          <div className="flex md:hidden">
              <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                      <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                  </svg>
              </button>
          </div>       
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div className='w-full md:flex md:items-center md:justify-between'>
          <div className='flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0'>
            <a href="#" class="px-2 py-1 text-sm font-medium text-gray-50 transition-colors duration-200 hover:text-gray-400 md:mx-2">Home</a>
            <a href="#" class="px-2 py-1 text-sm font-medium text-gray-50 transition-colors duration-200 hover:text-gray-400 md:mx-2">TV Shows</a>
            <a href="#" class="px-2 py-1 text-sm font-medium text-gray-50 transition-colors duration-200 hover:text-gray-400 md:mx-2">Movies</a>
            <a href="#" class="px-2 py-1 text-sm font-medium text-gray-50 transition-colors duration-200 hover:text-gray-400 md:mx-2">New & Popular</a>
            <a href="#" class="px-2 py-1 text-sm font-medium text-gray-50 transition-colors duration-200 hover:text-gray-400 md:mx-2">My List</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
