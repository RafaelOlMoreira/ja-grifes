import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import milan from '../assets/milan.jpg'
import barcelona from '../assets/barcelona.jpg'

function FinalCompra() {
    return (
        <div>
            <Navbar />

            <div className='grid grid-cols-3 font-poppins py-5 px-24'>

                <div className='col-span-2'>

                    <div className='grid grid-cols-2 gap-5'>
                        <div className=''>
                            <label htmlFor="Nome" className='text-sm text-gray-700' >Nome<span className='text-red-500'>*</span></label>
                            <input type="text" name="Nome" id="Nome" className='border text-gray-900 rounded-lg block w-full my-2.5 p-2.5' />
                        </div>
                        <div>
                            <label htmlFor="Sobrenome" className='text-sm text-gray-700' >Sobrenome<span className='text-red-500'>*</span></label>
                            <input type="text" name="Sobrenome" id="Sobrenome" className='border text-gray-900 rounded-lg block w-full my-2.5 p-2.5' />
                        </div>
                    </div>

                    <label htmlFor="CPF" className='text-sm text-gray-700' >CPF<span className='text-red-500' >*</span></label>
                    <input type="text" name="CPF" id="CPF" className='border text-gray-900 rounded-lg block w-full my-2.5 p-2.5' />

                    <label htmlFor="CPF" className='text-sm text-gray-700' >País<span className='text-red-500' >*</span></label>
                    <input type="text" name="CPF" id="CPF" value="Brasil" className='bg-gray-200 border text-gray-900 rounded-lg block w-full my-2.5 p-2.5 hover:cursor-not-allowed' disabled />

                    <label htmlFor="CEP" className='text-sm text-gray-700' >CEP<span className='text-red-500' >*</span></label>
                    <input type="text" name="CEP" id="CEP" className='border text-gray-900 rounded-lg block w-full my-2.5 p-2.5' />

                    <label htmlFor="Endereço" className='text-sm text-gray-700' >Endereço<span className='text-red-500' >*</span></label>
                    <input type="text" name="Endereço" id="Endereço" className='border text-gray-900 rounded-lg block w-full my-2.5 p-2.5' />

                    <label htmlFor="CPF" className='text-sm text-gray-700' >CPF<span className='text-red-500' >*</span></label>
                    <input type="text" name="CPF" id="CPF" className='border text-gray-900 rounded-lg block w-full my-2.5 p-2.5' />

                    <div className='grid grid-cols-2 gap-5'>
                        <div>
                            <label htmlFor="Número" className='text-sm text-gray-700' >Número<span className='text-red-500'>*</span></label>
                            <input type="text" name="Número" id="Número" className='border text-gray-900 rounded-lg block w-full my-2.5 p-2.5' />
                        </div>
                        <div>
                            <label htmlFor="Complemento" className='text-sm text-gray-700' >Complemento<span className='text-red-500'>*</span></label>
                            <input type="text" name="Complemento" id="Complemento" className='border text-gray-900 rounded-lg block w-full my-2.5 p-2.5' />
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-5'>
                        <div>
                            <label htmlFor="Número" className='text-sm text-gray-700' >Bairro<span className='text-red-500'>*</span></label>
                            <input type="text" name="Número" id="Número" className='border text-gray-900 rounded-lg block w-full my-2.5 p-2.5' />
                        </div>
                        <div>
                            <label htmlFor="Complemento" className='text-sm text-gray-700' >Cidade<span className='text-red-500'>*</span></label>
                            <input type="text" name="Complemento" id="Complemento" className='border text-gray-900 rounded-lg block w-full my-2.5 p-2.5' />
                        </div>
                    </div>

                    <label htmlFor="Estado" className='text-sm text-gray-700' >Estado<span className='text-red-500' >*</span></label>
                    <input type="text" name="Estado" id="Estado" className='border text-gray-900 rounded-lg block w-full my-2.5 p-2.5' />

                    <label htmlFor="Telefone" className='text-sm text-gray-700' >Telefone<span className='text-red-500' >*</span></label>
                    <input type="text" name="Telefone" id="Telefone" className='border text-gray-900 rounded-lg block w-full my-2.5 p-2.5' />

                    <label htmlFor="Email" className='text-sm text-gray-700' >Endereço de E-mail<span className='text-red-500' >*</span></label>
                    <input type="text" name="Email" id="Email" className='border text-gray-900 rounded-lg block w-full my-2.5 p-2.5' />

                </div>

                <div className='h-min ml-5 px-10 border-2 border-dashed border-red-500 p-5 uppercase'>
                    <h1 className='text-left font-bold text-lg pb-5'>Seu Pedido</h1>
                    <div className='grid grid-cols-2 border-b border-gray-300 pb-3'>
                        <div className='text-sm'>
                            <h6>Produto</h6>
                        </div>
                        <div className='text-end'>
                            <span>Subtotal</span>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-y-2 text-sm text-balance border-b border-gray-300 py-3'>
                        <div>
                            <h6>Milan Retro 1998 - M x 1</h6>
                        </div>
                        <div className='text-end'>
                            R$ 249,90
                        </div>
                        <div>
                            <h6>Barcelona Edição Especial 25-26 - G x 3</h6>
                        </div>
                        <div className='text-end'>
                            R$ 362,70
                        </div>
                    </div>

                    <div className='grid grid-cols-2 text-sm border-b border-gray-300 gap-y-3 py-3'>
                        <div>
                            <h6>Subtotal</h6>
                        </div>
                        <div className='text-end'>
                            <span>R$ 612,60</span>
                        </div>
                        <div>
                            <h6>Entrega</h6>
                        </div>
                        <div className='text-end text-[12px] text-gray-500 text-balance'>
                            <span>Digite seu endereço para ver as opções de entrega.</span>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 text-sm gap-y-3 py-3'>
                        <div>
                            <h6>Total</h6>
                        </div>
                        <div className='text-end text-red-500'>
                            <span>R$ 612,60</span>
                        </div>
                    </div>

                    <button type="button" className='bg-red-500 border-1 border-red-500 p-2 text-white text-sm font-semibold uppercase w-full hover:bg-white hover:text-red-500 hover:cursor-pointer transition-all duration-500'>
                        Finalizar Pedido
                    </button>
                    
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default FinalCompra
