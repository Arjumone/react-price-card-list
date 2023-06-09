import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
const [open,setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Blog', path: '/blog' },
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'About Us', path: '/about-us' },
        { id: 5, name: 'Contact Us', path: '/contact-us' }
      ];
      
    return (
        <nav className='bd-purple-400 px-4'>
          <div className='md:hidden' onClick={() => setOpen(!open)}>
            <span>
                {open === true?
             <XMarkIcon className="h-6 w-6 text-purple-500" />:
              <Bars3Icon className="h-6 w-6 text-purple-500" />
              }
              </span>
          </div>
            <ul className={`md:flex absolute md:static bg-purple-400 pl-8 pb-4 py-2 duration-500 ${open ? 'top-6':'-top-36'}`}>
               {
                 routes.map( route => <Link key={route.id} route={route}></Link>)
               }
            </ul>
        </nav>
    );
};

export default Navbar;