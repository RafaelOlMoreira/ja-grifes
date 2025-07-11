import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Login() {
    const [mostrarSenhaLogin, setMostrarSenhaLogin] = useState(false);
    const [mostrarSenhaRegistro, setMostrarSenhaRegistro] = useState(false);

    return (
        <div>
            <Navbar />

            <div className="grid grid-cols-2">
                {/* FORMULÁRIO DE LOGIN */}
                <section className="m-16">
                    <h6 className="font-poppins text-3xl mb-6">Entrar</h6>
                    <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-10 w-full">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="email-login" className="block mb-2 text-sm font-medium text-gray-900">
                                    Endereço de e-mail
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email-login"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                    placeholder="seu@email.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="senha-login" className="block mb-2 text-sm font-medium text-gray-900">
                                    Senha
                                </label>
                                <input
                                    type={mostrarSenhaLogin ? 'text' : 'password'}
                                    name="password"
                                    id="senha-login"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                    required
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                                    />
                                    <label htmlFor="remember" className="ml-2 text-sm text-gray-900">
                                        Lembre-me
                                    </label>
                                </div>
                                <div className="flex items-center float-end mt-2">
                                    <input
                                        type="checkbox"
                                        id="mostrar-senha-login"
                                        checked={mostrarSenhaLogin}
                                        onChange={() => setMostrarSenhaLogin(!mostrarSenhaLogin)}
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                                    />
                                    <label htmlFor="mostrar-senha-login" className="ml-2 text-sm text-gray-900">
                                        {mostrarSenhaLogin ? 'Ocultar Senha' : 'Mostrar Senha'}
                                    </label>
                                </div>
                            </div>

                            <a href="#" className="float-end text-sm font-medium text-primary-600 hover:underline">
                                Esqueceu a senha?
                            </a>

                            <button
                                type="submit"
                                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Acessar
                            </button>
                        </form>
                    </div>
                </section>

                {/* FORMULÁRIO DE REGISTRO */}
                <section className="m-16">
                    <h6 className="font-poppins text-3xl mb-6">Registrar</h6>
                    <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-10 w-full">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-900">
                                    Nome e Sobrenome
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="nome"
                                    placeholder="Nome e Sobrenome"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email-registro" className="block mb-2 text-sm font-medium text-gray-900">
                                    Endereço de e-mail
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email-registro"
                                    placeholder="seu@email.com"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="senha-registro" className="block mb-2 text-sm font-medium text-gray-900">
                                    Confirmar Senha
                                </label>
                                <input
                                    type={mostrarSenhaRegistro ? 'text' : 'password'}
                                    name="password"
                                    id="senha-registro"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                    required
                                />
                                <label htmlFor="senha-registro" className="block mb-2 text-sm font-medium text-gray-900">
                                    Senha
                                </label>
                                <input
                                    type={mostrarSenhaRegistro ? 'text' : 'password'}
                                    name="password"
                                    id="senha-registro"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                    required
                                />
                                <div className="flex items-center mt-2">
                                    <input
                                        type="checkbox"
                                        id="mostrar-senha-registro"
                                        checked={mostrarSenhaRegistro}
                                        onChange={() => setMostrarSenhaRegistro(!mostrarSenhaRegistro)}
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                                    />
                                    <label htmlFor="mostrar-senha-registro" className="ml-2 text-sm text-gray-900">
                                        {mostrarSenhaRegistro ? 'Ocultar Senha' : 'Mostrar Senha'}
                                    </label>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Cadastre-se
                            </button>
                        </form>
                    </div>
                </section>

            </div>
            <Footer />
        </div>
    )
}

export default Login
