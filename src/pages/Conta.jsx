import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Conta() {
    return (
        <div>
            <Navbar />

            <section className="flex flex-col items-center mt-5 font-poppins">
                <h6 className="font-poppins text-3xl mb-3 font-semibold text-center">Minha Conta</h6>
                <div className="p-5 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">

                    <form action="" className='w-150 items-center text-center py-5'>

                        <div className='grid grid-cols-2 gap-5 mb-4'>
                            <div className=''>
                                <label htmlFor="Nome" className=''>
                                    Nome<span className='text-red-500'>*</span>
                                </label>
                                <input type="text" name='Nome' id='Nome' className='p-3 w-full bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200' required />
                            </div>
                            <div className=''>
                                <label htmlFor="Sobrenome" className=''>
                                    Sobrenome<span className='text-red-500'>*</span>
                                </label>
                                <input type="text" name='Sobrenome' id='Sobrenome' className='p-3 w-full bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200' required />
                            </div>
                        </div>

                        <label htmlFor="Email" className=''>
                            Email<span className='text-red-500'>*</span>
                        </label>
                        <input type="email" name="Email" id="Email" className='p-3 w-full bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200' required />
                        
                        <div className='grid grid-cols-2 gap-5 py-4'>
                            <div className=''>
                                <label htmlFor="Telefone" className=''>
                                    Telefone<span className='text-red-500'>*</span>
                                </label>
                                <input type="text" name='Telefone' id='Telefone' className='p-3 w-full bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200' required />
                            </div>
                            <div className=''>
                                <label htmlFor="CEP" className=''>
                                    CEP<span className='text-red-500'>*</span>
                                </label>
                                <input type="text" name='CEP' id='CEP' className='p-3 w-full bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200' required />
                            </div>
                        </div>

                        <label htmlFor="Endereco" className=''>
                            Endereco
                            </label>
                        <input type="Endereco" name="Endereco" id="Endereco" disabled className='p-3 w-full bg-gray-100 shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:cursor-not-allowed' />

                        <div className='grid grid-cols-2 grid-rows-2 gap-5 py-4'>
                            <div className=''>
                                <label htmlFor="Complemento" className=''>
                                    Complemento
                                </label>
                                <input type="text" name='Complemento' id='Complemento' className='p-3 w-full bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200' />
                            </div>
                            <div className=''>
                                <label htmlFor="Bairro" className=''>
                                    Bairro
                                </label>
                                <input type="text" name='Bairro' id='Bairro' disabled className='p-3 w-full bg-gray-100 shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:cursor-not-allowed' />
                            </div>
                            <div className=''>
                                <label htmlFor="Cidade" className=''>
                                    Cidade
                                </label>
                                <input type="text" name='Cidade' id='Cidade' disabled className='p-3 w-full bg-gray-100 shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:cursor-not-allowed' />
                            </div>
                            <div className=''>
                                <label htmlFor="Estado" className=''>
                                    Estado
                                </label>
                                <input type="text" name='Estado' id='Estado' disabled className='p-3 w-full bg-gray-100 shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:cursor-not-allowed' />
                            </div>
                        </div>

                    <button type="button" className='p-2 px-6 bg-white hover:bg-black hover:text-white hover:scale-110 transition-all duration-200 hover:cursor-pointer shadow-lg rounded-lg overflow-hidden border border-black text-lg mt-5'>
                        Salvar Alterações
                    </button>
                    
                    </form>

                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Conta
