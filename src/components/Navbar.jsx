import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const cartDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (cartDropdownRef.current && !cartDropdownRef.current.contains(event.target)) {
        setIsCartDropdownOpen(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="bg-white/80 border-gray-200 border-b-2 fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md">
        <div className="max-w-screen-xl items-center justify-between mx-auto p-6 grid grid-cols-3">
          <Link to="../" className="w-min self-center text-2xl font-cinzel whitespace-nowrap">JA GRIFES</Link>

          <div className='grid-cols-2'>
            <div className="flex px-4 py-3 rounded-b-none border-l-2 border-gray-300 overflow-hidden max-w-md mx-auto">
              <input type="text" placeholder="Pesquisar Produto..." className="w-full outline-none bg-transparent text-gray-600 text-sm" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-gray-600">
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
              </svg>
            </div>
          </div>

          <div className='grid-cols-3 flex justify-end gap-4'>
            <div
              className="relative"
              onMouseEnter={() => setIsCartDropdownOpen(true)}
              onMouseLeave={() => setIsCartDropdownOpen(false)}
              ref={cartDropdownRef}
            >
              <button className='hover:text-red-400 transition flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </button>
              <div className={`font-poppins absolute right-0 top-full z-50 min-w-48 bg-white shadow-lg rounded-md mt-1 transition-all duration-200 ${isCartDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">VER SACOLA</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">FINALIZAR COMPRA</a>
              </div>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setIsUserDropdownOpen(true)}
              onMouseLeave={() => setIsUserDropdownOpen(false)}
              ref={userDropdownRef}
            >
              <button className='hover:text-red-400 transition flex px-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </button>
              <div className={`font-poppins absolute right-0 top-full z-50 min-w-48 bg-white shadow-lg rounded-md mt-1 transition-all duration-200 ${isUserDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">MINHA CONTA</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">PEDIDOS</a>
                <Link to="/Login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ENTRAR</Link>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SAIR</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className='mx-20 my-2 pt-24'>
        <ul className="flex flex-wrap items-center justify-center font-poppins text-sm">
          <li><a href="#" className="me-2 hover:text-gray-700 md:me-6">MALHA CHINESA</a></li>
          <li><a href="#" className="me-2 hover:text-gray-700 md:me-6">POLO CHINESA</a></li>
          <li><a href="#" className="me-2 hover:text-gray-700 md:me-6">PERUANA</a></li>
          <li><a href="#" className="me-2 hover:text-gray-700 md:me-6">GRIFE ITALIANA</a></li>
          <li ref={dropdownRef}>
            <div className="relative inline-flex" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
              <button type="button" className={`flex items-center me-2 hover:text-gray-700 md:me-6 font-medium rounded-lg text-sm py-2.5 ${isDropdownOpen ? '' : ''}`} >
                MAIS CATEGORIAS
                <svg className={`w-2.5 h-2.5 ms-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              <div
                className={`absolute left-0 top-full z-[999] min-w-48 bg-white shadow-lg rounded-md mt-1 transition-all duration-200 divide-y divide-gray-100 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
              >
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      CASACOS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      CALÇAS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      ACESSÓRIOS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      PROMOÇÕES
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
