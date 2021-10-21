import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

const DropdownMenu = () => {
  return (
    <div className='flex items-center'>
            <img 
              className='h-8'
              src='' 
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
              <Menu.Items className='absolute flex flex-col items-center justify-between left-10 w-64 h-60 mt-12 p-2 bg-gray-400 rounded-sm origin-top focus:outline-none'>
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
  )
}

export default DropdownMenu
