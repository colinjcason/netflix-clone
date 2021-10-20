import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

const Header2 = () => {
  return (
    <div className='px-8 py-4 mx-auto'>
      <div className='md:flex md:items-center md:justify-between'>
        <div className='flex items-center'>
            <img 
              className='h-8'
              src='https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png' 
              alt=''
            />

          {/* <!-- Mobile menu button --> */}
          <Menu as='div' className="flex md:hidden ml-6">
            <Menu.Button type="button" className="text-xs inline-flex justify-center text-gray-50 hover:text-gray-400 focus:outline-none focus:text-gray-400" aria-label="toggle menu">
                Browse
                <ChevronDownIcon
                  className="w-5 h-5"
                  aria-hidden="true"
                />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className='absolute flex flex-col items-center justify-between left-10 w-64 h-60 mt-12 p-2 bg-gray-400 origin-top focus:outline-none'>
                <Menu.Item className="py-1 text-sm font-medium text-gray-50 transition-colors duration-200 hover:text-gray-400 md:mx-2">
                  <a href="#">Home</a>
                </Menu.Item>
                <Menu.Item className="py-1 text-sm font-medium text-gray-50 transition-colors duration-200 hover:text-gray-400 md:mx-2">
                  <a href="#" >TV Shows</a>
                </Menu.Item>
                <Menu.Item className="py-1 text-sm font-medium text-gray-50 transition-colors duration-200 hover:text-gray-400 md:mx-2">
                  <a href="#">Movies</a>
                </Menu.Item>
                <Menu.Item className="py-1 text-sm font-medium text-gray-50 transition-colors duration-200 hover:text-gray-400 md:mx-2">
                  <a href="#">New & Popular</a>
                </Menu.Item>
                <Menu.Item className="py-1 text-sm font-medium text-gray-50 transition-colors duration-200 hover:text-gray-400 md:mx-2">
                  <a href="#">My List</a>
                </Menu.Item>
              </Menu.Items>
            </Transition>
        </Menu>       
      </div>

        {/* Menu closed: "hidden" */}
        <div className='hidden w-full md:flex md:items-center md:justify-between'>
          <div className='flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0'>
            <a href="#" className="px-2 py-1 text-xs font-medium text-gray-50 transition-colors duration-200 hover:text-gray-400 md:mx-2">Home</a>
            <a href="#" className="px-2 py-1 text-xs font-medium text-gray-50 transition-colors duration-200 hover:text-gray-400 md:mx-2">TV Shows</a>
            <a href="#" className="px-2 py-1 text-xs font-medium text-gray-50 transition-colors duration-200 hover:text-gray-400 md:mx-2">Movies</a>
            <a href="#" className="px-2 py-1 text-xs font-medium text-gray-50 transition-colors duration-200 hover:text-gray-400 md:mx-2">New & Popular</a>
            <a href="#" className="px-2 py-1 text-xs font-medium text-gray-50 transition-colors duration-200 hover:text-gray-400 md:mx-2">My List</a>
          </div>
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </div>

        <div>
          <img 
              className='h-10 w-12 rounded'
              src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
              alt='' 
            />
        </div>
      </div>
    </div>
  )
}

export default Header2

