import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import milan from '../assets/milan.jpg'
import barcelona from '../assets/barcelona.jpg'

function Sacola() {

    const [FormFrete, setFormFrete] = useState(false);
    const [cep, setCep] = useState('');

    const toggleAccordion = () => {
        setFormFrete(!FormFrete);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`CEP enviado: ${cep}`);
        // Aqui você pode chamar alguma função de cálculo de frete, por exemplo
    };

    return (
        <div>
            <Navbar />

            <div className='font-poppins py-5 px-24 flex'>
                <table className='table-auto w-full'>

                    <thead className='border border-gray-300'>
                        <tr className='uppercase'>
                            <th className='p-5 text-start w-1/2'>Produto</th>
                            <th className='p-5 text-start w-1/2'></th>
                            <th className='text-center w-1/6'>Preço</th>
                            <th className='p-3 text-center w-1/6'>Quantidade</th>
                            <th className='text-center w-1/6'>Subtotal</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr className='uppercase border border-gray-300'>
                            <td className='p-5'>
                                <img src={milan} className='size-50 rounded-2xl' />
                            </td>
                            <td className='pr-5 text-nowrap'>Milan Retro 1998 - M</td>
                            <td className='text-center text-nowrap'>R$ 249,90</td>
                            <td className='text-center'>
                                <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="bg-gray-10 hover:bg-gray-300 hover:cursor-pointer inline-flex items-center justify-center border border-gray-300 rounded-l-md h-15 w-5 transition-all duration-300">
                                    <span>-</span>
                                </button>

                                <input type="text" id="counter-input" data-input-counter className="text-gray-900 font-normal max-w-[2.5rem] h-15 text-center border-y border-gray-300" value="1" disabled required />

                                <button type="button" id="increment-button" data-input-counter-increment="counter-input" className="bg-gray-10 hover:bg-gray-300 hover:cursor-pointer inline-flex items-center justify-center border border-gray-300 rounded-r-md h-15 w-5 transition-all duration-300">
                                    <span className=''>+</span>
                                </button>
                            </td>
                            <td className='text-center text-nowrap'>R$ 249,90</td>
                            <td className='p-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='size-6 hover:text-red-500 hover:cursor-pointer'>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </td>
                        </tr>


                        <tr className='uppercase border border-gray-300'>
                            <td className='p-5'>
                                <img src={barcelona} className='size-50 w-auto rounded-2xl' />
                            </td>
                            <td className='pr-5 text-balance'>Barcelona Edição Especial 25-26 - G</td>
                            <td className='text-center'>R$ 120,90</td>
                            <td className='text-center items-center'>
                                <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="bg-gray-10 hover:bg-gray-300 hover:cursor-pointer inline-flex items-center justify-center border border-gray-300 rounded-l-md h-15 w-5 transition-all duration-300">
                                    <span>-</span>
                                </button>

                                <input type="text" id="counter-input" data-input-counter class="text-gray-900 font-normal max-w-[2.5rem] h-15 text-center border-y border-gray-300" value="3" disabled required />

                                <button type="button" id="increment-button" data-input-counter-increment="counter-input" class="bg-gray-10 hover:bg-gray-300 hover:cursor-pointer inline-flex items-center justify-center border border-gray-300 rounded-r-md h-15 w-5 transition-all duration-300">
                                    <span className=''>+</span>
                                </button>
                            </td>
                            <td className='text-center'>R$ 362,70</td>
                            <td className='py-5 px-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='size-6 hover:text-red-500 hover:cursor-pointer'>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </td>
                        </tr>

                    </tbody>
                </table>

                <div className='w-1/2 h-min ml-5 px-10 border-2 border-dashed border-red-500 p-5'>
                    <h1 className='text-center font-bold text-lg pb-5'>TOTAL NO CARRINHO</h1>
                    <div className='grid grid-cols-2 border-b border-gray-300 pb-3'>
                        <div>
                            <h6>Subtotal:</h6>
                        </div>
                        <div className='text-end'>
                            <span>R$ 370,60</span>
                        </div>
                    </div>

                    <div className='grid grid-cols-3 border-b border-gray-300 py-3'>
                        <div className=''>
                            <h6>Entrega:</h6>
                        </div>

                        <div className='text-end col-span-2'>
                            <span className='text-sm text-balance'>Digite seu CEP para ver as opções de entrega.</span>

                            <button onClick={toggleAccordion} className="w-full flex justify-end font-bold gap-1 pt-1.5 hover:text-red-500 hover:cursor-pointer transition-all duration-200" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>
                                {FormFrete ? 'Fechar Formulário' : 'Calcular Entrega'}
                            </button>

                            {FormFrete && (
                                <div className="w-full px-4 py-4 bg-white shadow-lg rounded-t-xl overflow-hidden">
                                    <form onSubmit={handleSubmit} className="space-y-2">

                                        <label className="block text-sm text-start">
                                            País<span className='text-red-500'>*</span>
                                        </label>
                                        <select id="" name="" className="w-full border border-gray-300 rounded px-3 py-2" required>
                                            <option value="">Selecione um País</option>
                                            <option value="1">Brasil</option>
                                        </select>

                                        <label className="block text-sm text-start">
                                            Estado<span className='text-red-500'>*</span>
                                        </label>
                                        <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 hover:cursor-not-allowed" disabled required />

                                        <label className="block text-sm text-start">
                                            Cidade<span className='text-red-500'>*</span>
                                        </label>
                                        <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 hover:cursor-not-allowed" disabled required />

                                        <label className="block text-sm text-start">
                                            CEP<span className='text-red-500'>*</span>
                                        </label>
                                        <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" required />

                                        <button type="submit" className="float-left border-1 border-black hover:text-white text-sm font-semibold px-8 py-1 hover:bg-black transition-all duration-200 hover:cursor-pointer" >
                                            Pesquisar
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>

                    </div>

                    <label htmlFor="Cupom" className='block pt-3'>Cupom de Desconto:</label>
                    <div className='flex'>
                        <input type="text" name="Cupom" id="Cupom" placeholder='Código do cupom...' className='placeholder:text-sm placeholder:normal-case focus:outline-none uppercase border-b-2 border-gray-300 w-full pt-1' />
                        <button type="button" className='text-nowrap hover:cursor-pointer hover:text-red-500 border-b-2 border-gray-300'>
                            Aplicar Desconto
                        </button>
                    </div>

                    <div className='grid grid-cols-2 border-b border-gray-300 py-3'>
                        <div>
                            <h6>Total:</h6>
                        </div>
                        <div className='text-end'>
                            <span>R$ 370,60</span>
                        </div>
                    </div>

                    <div className='grid grid-rows-2 py-3 gap-y-3'>
                        <div>
                            <button type="button" className='bg-red-500 border-1 border-red-500 p-2 text-white text-sm font-semibold uppercase w-full hover:bg-white hover:text-red-500 hover:cursor-pointer transition-all duration-500'>
                                Continuar para Finalização
                            </button>
                        </div>
                        <div>
                            <button type="button" className='bg-gray-500 border-1 border-gray-500 p-2 text-white text-sm font-semibold uppercase w-full hover:bg-white hover:text-gray-600 hover:cursor-pointer transition-all duration-500'>
                                Esvaziar Sacola
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Sacola
