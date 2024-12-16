import React, { useState } from 'react';
import axios from 'axios';
import imagen1 from '../assets/imagen2.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelopeOpenText, FaPaperPlane, FaRegUser } from 'react-icons/fa';
import { RiLockPasswordLine } from "react-icons/ri";

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/auth/register', {
                name,
                email,
                password,
            });

            console.log('Registro exitoso:', response.data);
            navigate("/profile");

        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                setError(error.response.data.message || 'Error en el registro');
            } else {
                setError('Error desconocido');
            }
        }
    };

    return (
        <div className="h-screen bg-white-100 flex flex-col">
            <header className="bg-white-600 text-black py-4 px-8 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold flex items-center">
                    <FaPaperPlane className="mr-2" />Planeo
                </Link>
            </header>
            <div className="flex-1 bg-custom-gradient flex items-center justify-center">
                <div className="flex flex-col lg:flex-row items-center justify-center max-w-5xl w-full px-4 lg:px-0">
                    <img
                        src={imagen1}
                        alt="imagen productividad"
                        className="h-auto p-5 max-w-xs object-cover lg:max-w-sm"
                    />
                    <form className="bg-white p-6 rounded shadow-md w-full max-w-md mt-8 lg:mt-0 lg:ml-8" onSubmit={handleSubmit}>
                        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Registrarse</h2>

                        {/* Nombre */}
                        <div className="relative mb-4">
                            <FaRegUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg pl-12 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 peer"
                                required
                            />
                            <label
                                htmlFor="name"
                                className={`absolute left-12 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 
                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                    peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 
                    ${name && "top-2 text-xs text-blue-600"}`}
                            >
                                Nombre
                            </label>
                        </div>

                        {/* Correo electrónico */}
                        <div className="relative mb-4">
                            <FaEnvelopeOpenText className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg pl-12 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 peer"
                                required
                            />
                            <label
                                htmlFor="email"
                                className={`absolute left-12 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 
                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                    peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 
                    ${email && "top-2 text-xs text-blue-600"}`}
                            >
                                Correo electrónico
                            </label>
                        </div>

                        {/* Contraseña */}
                        <div className="relative mb-4">
                            <RiLockPasswordLine className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg pl-12 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 peer"
                                required
                            />
                            <label
                                htmlFor="password"
                                className={`absolute left-12 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 
                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                    peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 
                    ${password && "top-2 text-xs text-blue-600"}`}
                            >
                                Contraseña
                            </label>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                            Registrar
                        </button>
                    </form>

                </div>
            </div>
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    © {new Date().getFullYear()} Planeo. Todos los derechos reservados.
                </div>
            </footer>
        </div >
    );
};

export default Register;