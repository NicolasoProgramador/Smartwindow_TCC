import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import iconeJanela from '../public/iconeJanela.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#E5E4E2] border-b-2 border-[#2D92FF] p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <img src={iconeJanela} alt="Ícone Janela" className="h-8 md:h-12" />
        
        <div className="hidden md:flex space-x-6">
          <Link to={"/"} className="text-space-blue hover:text-dark-bluu">Início</Link>
          <Link to={"/funcionamento"} className="text-space-blue hover:text-dark-bluu">Funcionamento</Link>
          <Link to={"/materiais"} className="text-space-blue hover:text-dark-bluu">Materiais</Link>
          <Link to={"/bibliografias"} className="text-space-blue hover:text-dark-bluu">Referências</Link>
          <Link to={"/integrantes"} className="text-space-blue hover:text-dark-bluu">Integrantes</Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-space-blue focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col mt-2 space-y-2">
          <Link to ="/" className = "text-space-blue hover:text-dark-bluu py-2 border-t border-gray-300">Início</Link>
          <Link to ="/funcionamento" className="text-space-blue hover:text-dark-bluu py-2 border-t border-gray-300">Funcionamento</Link>
          <Link to = "/materiais" className="text-space-blue hover:text-dark-bluu py-2 border-t border-gray-300">Materiais</Link>
          <Link to = "/bibliografias" className="text-space-blue hover:text-dark-bluu py-2 border-t border-gray-300">Referências</Link>
          <Link to = "/integrantes" className="text-space-blue hover:text-dark-bluu py-2 border-t border-gray-300">Integrantes</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
