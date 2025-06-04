import React from 'react'

import produto1 from '../assets/barcelona.jpg'
import produto2 from '../assets/bayern.jpg'
import produto3 from '../assets/psg-titular.jpg'
import produto4 from '../assets/inter-milao.jpg'

function Lançamentos() {
    return (
        <div className='mx-36 my-10'>
            <h6 className='font-poppins text-4xl text-center mb-6'>LANÇAMENTOS</h6>

            <div className='grid grid-cols-4'>
                
                <div className='border-1 border-gray-200 p-4 w-full h-full flex flex-col'>
                    <img src={produto1} className='hover:scale-102' />
                    <h6 className='mt-4 mb-6 font-poppins'>Barcelona Edição Especial 25-26</h6>
                    <div className='grid grid-cols-2 items-center h-auto mt-auto'>
                        <span className='font-poppins text-red-500'>R$ 85.00</span>
                        <div className='flex justify-end gap-2'>
                            <a href="" className='border-1 rounded-md p-1 hover:bg-gray-400 hover:text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </a>
                            <a href="" className='border-1 rounded-md p-1 hover:bg-gray-400 hover:text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className='border-1 border-gray-200 p-4 w-full h-full flex flex-col'>
                    <img src={produto2} className='hover:scale-102' />
                    <h6 className='mt-4 mb-6 font-poppins'>Bayern de Munique Titular 25-26</h6>
                    <div className='grid grid-cols-2 items-center h-auto mt-auto'>
                        <span className='font-poppins text-red-500'>R$ 85.00</span>
                        <div className='flex justify-end gap-2'>
                            <a href="" className='border-1 rounded-md p-1 hover:bg-gray-400 hover:text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </a>
                            <a href="" className='border-1 rounded-md p-1 hover:bg-gray-400 hover:text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className='border-1 border-gray-200 p-4 w-full h-full flex flex-col'>
                    <img src={produto3} className='hover:scale-102' />
                    <h6 className='mt-4 mb-6 font-poppins'>PSG Titular 25-26</h6>
                    <div className='grid grid-cols-2 items-center h-auto mt-auto'>
                        <span className='font-poppins text-red-500'>R$ 85.00</span>
                        <div className='flex justify-end gap-2'>
                            <a href="" className='border-1 rounded-md p-1 hover:bg-gray-400 hover:text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </a>
                            <a href="" className='border-1 rounded-md p-1 hover:bg-gray-400 hover:text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className='border-1 border-gray-200 p-4 w-full h-full flex flex-col'>
                    <img src={produto4} className='hover:scale-102' />
                    <h6 className='mt-4 mb-6 font-poppins'>Inter de Milão Titular 25-26</h6>
                    <div className='grid grid-cols-2 items-center h-auto mt-auto'>
                        <span className='font-poppins text-red-500'>R$ 85.00</span>
                        <div className='flex justify-end gap-2'>
                            <a href="" className='border-1 rounded-md p-1 hover:bg-gray-400 hover:text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </a>
                            <a href="" className='border-1 rounded-md p-1 hover:bg-gray-400 hover:text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Lançamentos
