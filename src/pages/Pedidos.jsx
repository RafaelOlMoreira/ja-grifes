import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import atletico from '../assets/atletico.jpg'
import cruzeiro from '../assets/cruzeiro.jpg'
import milan from '../assets/milan.jpg'
import barcelona from '../assets/barcelona.jpg'

function Pedidos() {
    return (
        <div>
            <Navbar />

            <div className='mx-40'>
                
                {/* CARD 1 */}
                <div className='grid grid-cols-4 p-4 bg-white shadow-lg rounded-t-xl overflow-hidden border border-gray-200'>
                    <div className='flex justify-center'>
                        <img src={atletico} className='size-55 rounded-t-xl' />
                    </div>
                    <div className='content-around items-center text-center'>
                        <h2 className='font-bold text-center text-lg text-gray-800 mb-2'>Atlético Mineiro Titular 25-26 com Patrocínio Principal</h2>

                        <div className='grid grid-rows-3 gap-0.5 text-lg justify-center'>
                            <div className='flex gap-2.5'>
                                <h6 className='text-gray-700'>Preço:</h6>
                                <p className='font-normal text-gray-500'>R$ 249,90</p>
                            </div>
                            <div className='flex gap-2.5'>
                                <h6 className='text-gray-700'>Frete:</h6>
                                <p className='font-normal text-gray-500'>Grátis (acima de R$ 200)</p>
                            </div>
                            <div className='flex gap-2.5'>
                                <h6 className='text-gray-700'>Total:</h6>
                                <p className='font-normal text-gray-500'>R$ 249,90</p>
                            </div>
                        </div>
                        <h6 className='flex mt-0.5 text-xl justify-center items-center gap-2 text-gray-700'>Status: <p className='px-1.5 text-md text-yellow-600 p-1 rounded-2xl font-semibold'>Pedido Confirmado</p></h6>
                    </div>

                    <div className='content-around flex items-center justify-center'>
                        <div className='grid grid-rows-3 gap-0.5 text-lg'>
                            <div className='flex gap-2.5'>
                                <h6 className=' text-gray-700'>Tamanho:</h6>
                                <p className='font-normal text-gray-500'>M</p>
                            </div>

                            <div className='flex gap-2.5'>
                                <h6 className=' text-gray-700'>Pedido:</h6>
                                <p className='text-gray-500'>#00001</p>
                            </div>

                            <div className='flex gap-2.5'>
                                <h6 className=' text-gray-700'>Data:</h6>
                                <p className='text-gray-500'>16/07/2025</p>
                            </div>
                        </div>
                    </div>

                    <div className='content-around flex items-center justify-center'>
                        <div className='grid grid-rows-2 gap-0.5 text-lg'>
                            <div className=''>
                                <h6 className='flex text-gray-700 text-nowrap items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='size-5'>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    Entrega:
                                </h6>
                                <p className='text-gray-500'>Rua Alípio de Melo, Jardim Montanhês, 54 - 201B</p>
                            </div>
                            <div>
                                <h6 className='flex text-gray-700 text-nowrap items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='size-5'>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>
                                    Previsão de entrega:
                                </h6>
                                <p className='text-gray-500'>20/07/2025</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex p-4 mb-4 justify-evenly bg-white shadow-lg rounded-b-xl rounded-t-0 overflow-hidden border border-gray-200'>
                    <div>
                        <button type="button" className='flex p-3 px-16 items-center gap-2 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            Detalhes do Produto
                        </button>
                    </div>
                    <div>
                        <button type="button" className='flex p-3 px-16 items-center gap-2 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                            Rastrear
                        </button>
                    </div>
                    <div>
                        <button type="button" className='flex p-3 px-16 items-center gap-2 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                            Suporte
                        </button>
                    </div>
                </div>
                {/* FIM CARD 1 */}
                
                
                {/* CARD 2 */}
                <div className='grid grid-cols-4 p-4 bg-white shadow-lg rounded-t-xl overflow-hidden border border-gray-200'>
                    <div className='flex justify-center'>
                        <img src={milan} className='size-55 rounded-t-xl' />
                    </div>
                    <div className='content-around items-center text-center'>
                        <h2 className='font-bold text-center text-lg text-gray-800 mb-2'>Milan Retro 1998</h2>

                        <div className='grid grid-rows-3 gap-0.5 text-lg justify-center'>
                            <div className='flex gap-2.5'>
                                <h6 className='text-gray-700'>Preço:</h6>
                                <p className='font-normal text-gray-500'>R$ 249,90</p>
                            </div>
                            <div className='flex gap-2.5'>
                                <h6 className='text-gray-700'>Frete:</h6>
                                <p className='font-normal text-gray-500'>Grátis (acima de R$ 200)</p>
                            </div>
                            <div className='flex gap-2.5'>
                                <h6 className='text-gray-700'>Total:</h6>
                                <p className='font-normal text-gray-500'>R$ 249,90</p>
                            </div>
                        </div>
                        <h6 className='flex mt-0.5 text-xl justify-center items-center gap-2 text-gray-700'>Status: <p className='px-1.5 text-md text-blue-600 p-1 rounded-2xl font-semibold'>Pedido Enviado</p></h6>
                    </div>

                    <div className='content-around flex items-center justify-center'>
                        <div className='grid grid-rows-3 gap-0.5 text-lg'>
                            <div className='flex gap-2.5'>
                                <h6 className=' text-gray-700'>Tamanho:</h6>
                                <p className='font-normal text-gray-500'>M</p>
                            </div>

                            <div className='flex gap-2.5'>
                                <h6 className=' text-gray-700'>Pedido:</h6>
                                <p className='text-gray-500'>#00001</p>
                            </div>

                            <div className='flex gap-2.5'>
                                <h6 className=' text-gray-700'>Data:</h6>
                                <p className='text-gray-500'>16/07/2025</p>
                            </div>
                        </div>
                    </div>

                    <div className='content-around flex items-center justify-center'>
                        <div className='grid grid-rows-2 gap-0.5 text-lg'>
                            <div className=''>
                                <h6 className='flex text-gray-700 text-nowrap items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='size-5'>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    Entrega:
                                </h6>
                                <p className='text-gray-500'>Rua Alípio de Melo, Jardim Montanhês, 54 - 201B</p>
                            </div>
                            <div>
                                <h6 className='flex text-gray-700 text-nowrap items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='size-5'>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>
                                    Previsão de entrega:
                                </h6>
                                <p className='text-gray-500'>20/07/2025</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex p-4 mb-4 justify-evenly bg-white shadow-lg rounded-b-xl rounded-t-0 overflow-hidden border border-gray-200'>
                    <div>
                        <button type="button" className='flex p-3 px-16 items-center gap-2 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            Detalhes do Produto
                        </button>
                    </div>
                    <div>
                        <button type="button" className='flex p-3 px-16 items-center gap-2 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                            Rastrear
                        </button>
                    </div>
                    <div>
                        <button type="button" className='flex p-3 px-16 items-center gap-2 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                            Suporte
                        </button>
                    </div>
                </div>
                {/* FIM CARD 2 */}
                
                
                {/* CARD 3 */}
                <div className='grid grid-cols-4 p-4 bg-white shadow-lg rounded-t-xl overflow-hidden border border-gray-200'>
                    <div className='flex justify-center'>
                        <img src={barcelona} className='size-55 rounded-t-xl' />
                    </div>
                    <div className='content-around items-center text-center'>
                        <h2 className='font-bold text-center text-lg text-gray-800 mb-2'>Barcelona Edição Especial 25-26</h2>

                        <div className='grid grid-rows-3 gap-0.5 text-lg justify-center'>
                            <div className='flex gap-2.5'>
                                <h6 className='text-gray-700'>Preço:</h6>
                                <p className='font-normal text-gray-500'>R$ 249,90</p>
                            </div>
                            <div className='flex gap-2.5'>
                                <h6 className='text-gray-700'>Frete:</h6>
                                <p className='font-normal text-gray-500'>Grátis (acima de R$ 200)</p>
                            </div>
                            <div className='flex gap-2.5'>
                                <h6 className='text-gray-700'>Total:</h6>
                                <p className='font-normal text-gray-500'>R$ 249,90</p>
                            </div>
                        </div>
                        <h6 className='flex mt-0.5 text-xl justify-center items-center gap-2 text-gray-700'>Status: <p className='px-1.5 text-md text-green-600 p-1 rounded-2xl font-semibold'>Pedido Entregue</p></h6>
                    </div>

                    <div className='content-around flex items-center justify-center'>
                        <div className='grid grid-rows-3 gap-0.5 text-lg'>
                            <div className='flex gap-2.5'>
                                <h6 className=' text-gray-700'>Tamanho:</h6>
                                <p className='font-normal text-gray-500'>M</p>
                            </div>

                            <div className='flex gap-2.5'>
                                <h6 className=' text-gray-700'>Pedido:</h6>
                                <p className='text-gray-500'>#00001</p>
                            </div>

                            <div className='flex gap-2.5'>
                                <h6 className=' text-gray-700'>Data:</h6>
                                <p className='text-gray-500'>16/07/2025</p>
                            </div>
                        </div>
                    </div>

                    <div className='content-around flex items-center justify-center'>
                        <div className='grid grid-rows-2 gap-0.5 text-lg'>
                            <div className=''>
                                <h6 className='flex text-gray-700 text-nowrap items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='size-5'>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    Entrega:
                                </h6>
                                <p className='text-gray-500'>Rua Alípio de Melo, Jardim Montanhês, 54 - 201B</p>
                            </div>
                            <div>
                                <h6 className='flex text-gray-700 text-nowrap items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='size-5'>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>
                                    Previsão de entrega:
                                </h6>
                                <p className='text-gray-500'>20/07/2025</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex p-4 mb-4 justify-evenly bg-white shadow-lg rounded-b-xl rounded-t-0 overflow-hidden border border-gray-200'>
                    <div>
                        <button type="button" className='flex p-3 px-16 items-center gap-2 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            Detalhes do Produto
                        </button>
                    </div>
                    <div>
                        <button type="button" className='flex p-3 px-16 items-center gap-2 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                            Rastrear
                        </button>
                    </div>
                    <div>
                        <button type="button" className='flex p-3 px-16 items-center gap-2 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                            Suporte
                        </button>
                    </div>
                </div>
                {/* FIM CARD 3 */}
                
                
                {/* CARD 4 */}
                <div className='grid grid-cols-4 p-4 bg-white shadow-lg rounded-t-xl overflow-hidden border border-gray-200'>
                    <div className='flex justify-center'>
                        <img src={cruzeiro} className='size-55 rounded-t-xl' />
                    </div>
                    <div className='content-around items-center text-center'>
                        <h2 className='font-bold text-center text-lg text-gray-800 mb-2'>Cruzeiro Titular 25-26 – Todos Patrocínios</h2>

                        <div className='grid grid-rows-3 gap-0.5 text-lg justify-center'>
                            <div className='flex gap-2.5'>
                                <h6 className='text-gray-700'>Preço:</h6>
                                <p className='font-normal text-gray-500'>R$ 249,90</p>
                            </div>
                            <div className='flex gap-2.5'>
                                <h6 className='text-gray-700'>Frete:</h6>
                                <p className='font-normal text-gray-500'>Grátis (acima de R$ 200)</p>
                            </div>
                            <div className='flex gap-2.5'>
                                <h6 className='text-gray-700'>Total:</h6>
                                <p className='font-normal text-gray-500'>R$ 249,90</p>
                            </div>
                        </div>
                        <h6 className='flex mt-0.5 text-xl justify-center items-center gap-2 text-gray-700'>Status: <p className='px-1.5 text-md text-red-600 p-1 rounded-2xl font-semibold'>Pedido Cancelado</p></h6>
                    </div>

                    <div className='content-around flex items-center justify-center'>
                        <div className='grid grid-rows-3 gap-0.5 text-lg'>
                            <div className='flex gap-2.5'>
                                <h6 className=' text-gray-700'>Tamanho:</h6>
                                <p className='font-normal text-gray-500'>M</p>
                            </div>

                            <div className='flex gap-2.5'>
                                <h6 className=' text-gray-700'>Pedido:</h6>
                                <p className='text-gray-500'>#00001</p>
                            </div>

                            <div className='flex gap-2.5'>
                                <h6 className=' text-gray-700'>Data:</h6>
                                <p className='text-gray-500'>16/07/2025</p>
                            </div>
                        </div>
                    </div>

                    <div className='content-around flex items-center justify-center'>
                        <div className='grid grid-rows-2 gap-0.5 text-lg'>
                            <div className=''>
                                <h6 className='flex text-gray-700 text-nowrap items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='size-5'>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    Entrega:
                                </h6>
                                <p className='text-gray-500'>Rua Alípio de Melo, Jardim Montanhês, 54 - 201B</p>
                            </div>
                            <div>
                                <h6 className='flex text-gray-700 text-nowrap items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='size-5'>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>
                                    Previsão de entrega:
                                </h6>
                                <p className='text-gray-500'>20/07/2025</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex p-4 mb-4 justify-evenly bg-white shadow-lg rounded-b-xl rounded-t-0 overflow-hidden border border-gray-200'>
                    <div>
                        <button type="button" className='flex p-3 px-16 items-center gap-2 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            Detalhes do Produto
                        </button>
                    </div>
                    <div>
                        <button type="button" className='flex p-3 px-16 items-center gap-2 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                            Rastrear
                        </button>
                    </div>
                    <div>
                        <button type="button" className='flex p-3 px-16 items-center gap-2 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                            Suporte
                        </button>
                    </div>
                </div>
                {/* FIM CARD 4 */}
                
            </div>

            <Footer />
        </div>
    )
}

export default Pedidos
