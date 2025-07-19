import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="mt-6 p-4 bg-gray-900">
            <div className="mx-auto max-w-screen-xl">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <div>
                            <a href='#' className="w-min self-center text-4xl font-cinzel whitespace-nowrap text-gray-200">JA GRIFES</a>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <h2 className="mt-6 mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white">Suporte e Atendimento</h2>
                                <li className='mb-4 inline-flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-gray-200">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>
                                    <a href="#" className="pl-2 hover:underline">Segunda-Sábado: 9:00 - 18:00</a>
                                </li>
                                <li className="mb-4 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-gray-200">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                    </svg>
                                    <a href="#" className="pl-2 hover:underline">+55 31 12345-6789</a>
                                </li>
                                <li className='mb-4 flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-gray-200">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                    <a href="#" className="pl-2 hover:underline">contato.jagrifes@gmail.com</a>
                                </li>
                                <li className='flex items'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-200">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                                    </svg>
                                    <a href="#" className="pl-2 hover:underline flex text-nowrap">Siga-nos
                                        <svg fill="#4a5565" className='size-7 items-center ml-2' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"></path><path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"></path></g></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 mt-auto">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Sobre Nós</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className='hover:underline hover:text-gray-200'>Quem Somos</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className='hover:underline hover:text-gray-200'>Nossas Redes</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className='hover:underline hover:text-gray-200'>Fale Conosco</a>
                                </li>
                                <li>
                                    <a href="#" className='hover:underline hover:text-gray-200'>Termo e Condições</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Sobre Você</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <Link to="/Conta" className='hover:underline hover:text-gray-200'>Minha Conta</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/Desejos" className='hover:underline hover:text-gray-200'>Lista de Desejos</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/Sacola" className='hover:underline hover:text-gray-200'>Minha Sacola</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/Pedidos" className='hover:underline hover:text-gray-200'>Pedidos</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className='text-center my-3'>
                    <span className="text-sm text-gray-500">© 2025 <a href="#" className="hover:underline">JA GRIFES™</a> | All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
