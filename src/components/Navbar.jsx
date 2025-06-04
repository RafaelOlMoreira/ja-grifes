import React, { useState, useRef, useEffect } from 'react';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="bg-white border-gray-200 border-b-2">
        <div className="max-w-screen-xl items-center justify-between mx-auto p-6 grid grid-cols-3">
          <a href='#' className="w-min self-center text-2xl font-cinzel whitespace-nowrap">JA GRIFES</a>

          <div className='grid-cols-2'>
            <div className="flex px-4 py-3 rounded-b-none border-l-2 border-gray-300 overflow-hidden max-w-md mx-auto">
              <input type="text" placeholder="Pesquisar Produto..." className="w-full outline-none bg-transparent text-gray-600 text-sm" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-gray-600" >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
              </svg>
            </div>
          </div>

          <div className='grid-cols-3'>
            <a href="#" className='hover:text-red-400 transition float-end flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </a>
            <a href="#" className='hover:text-red-400 transition float-end flex px-8'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </a>
          </div>

          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" >
            <span className="sr-only">Abrir o Menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
      </nav>

      <nav className='mx-20 my-2'>
        <ul className="flex flex-wrap items-center justify-center font-poppins text-sm">
          <li>
            <a href="#" className="me-2 hover:text-gray-700 md:me-6">MALHA CHINESA</a>
          </li>
          <li>
            <a href="#" className="me-2 hover:text-gray-700 md:me-6">POLO CHINESA</a>
          </li>
          <li>
            <a href="#" className="me-2 hover:text-gray-700 md:me-6">PERUANA</a>
          </li>
          <li>
            <a href="#" className="me-2 hover:text-gray-700 md:me-6">GRIFE ITALIANA</a>
          </li>
          <li ref={dropdownRef}>
            <div className="relative inline-flex" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)} >
              <button type="button" className={`flex me-2 hover:text-gray-700 md:me-6 ${isDropdownOpen ? 'bg-gray-50' : ''}`} onClick={() => setIsDropdownOpen(!isDropdownOpen)} >
                MAIS CATEGORIAS
                <svg className={`size-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/>
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div className={`absolute left-0 top-full z-[999] min-w-48 bg-white shadow-lg rounded-md mt-1 transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`} >
                <div className="py-1">
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
                    CASACOS
                  </a>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
                    CALÇAS
                  </a>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
                    ACESSÓRIOS
                  </a>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
                    PROMOÇÕES
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;