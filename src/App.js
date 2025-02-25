import React, { useEffect, useState } from 'react';
import { RxSwitch } from 'react-icons/rx';
import { useTheme } from './contexts/ContextProvider';

export default function App() {
  const { theme, setTheme } = useTheme();
  const [showFuncionalidades, setShowFuncionalidades] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Elemento com o ID "${id}" não encontrado.`);
    }
  };

  const handleShowFuncionalidades = () => {
    setShowFuncionalidades(true);
    scrollToSection('funcionalidades');
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white font-poppins">
      {/* Cabeçalho */}
      <header className="w-full py-4 fixed top-0 left-0 bg-white dark:bg-black z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <img
            src={theme === 'dark' ? '/logo 2.png' : '/logo.png'}
            alt="Logo Finit"
            className="h-8"
          />
          <nav className="flex space-x-6">
            <a
              href="#powerbi"
              className="text-gray-900 dark:text-white hover:text-green-600"
              onClick={() => scrollToSection('powerbi')}
            >
              Power BI
            </a>
            <a
              href="#funcionalidades"
              className="text-gray-900 dark:text-white hover:text-green-600"
              onClick={handleShowFuncionalidades}
            >
              Funcionalidades
            </a>
            <a
              href="#tutorial"
              className="text-gray-900 dark:text-white hover:text-green-600"
            >
              Tutorial
            </a>
          </nav>
          <button
            type="button"
            onClick={toggleTheme}
            className="text-gray-900 dark:text-white scale-x-100 dark:-scale-x-100"
          >
            <RxSwitch className="h-8 w-8" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="h-screen flex items-center justify-between max-w-7xl mx-auto px-0 mt-0">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white leading-snug mb-4">
            Automatize suas <br /> finanças com <br /> inteligência.
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 mb-6">
            Junte-se ao <span className="text-green-600 font-semibold">finit</span> e tenha sempre a
            <span className="text-yellow-500 font-semibold"> visibilidade clara </span> que você precisa.
            Vamos automatizar o futuro das finanças!
          </p>
          <div className="mt-6 flex space-x-6">
            <button type="button" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
              Use o Power BI
            </button>
            <button
              type="button"
              className="bg-[#CACACA] text-gray-900 dark:bg-gray-600 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-400"
              onClick={handleShowFuncionalidades}
            >
              Conheça Mais
            </button>
          </div>
        </div>

        {/* Imagem do notebook, ajustada para ser maior e mais à direita */}
        <div className="w-[90%] flex justify-end">
          <img
            src="/notebook.png"
            alt="Laptop com gráficos"
            className="w-[100%] scale-125 h-auto object-contain" // Imagem ainda maior
          />
        </div>
      </div>

      {/* Power BI Section */}
      <div id="powerbi" className="flex justify-center py-12">
        <div className="bg-gray-300 p-6 rounded-lg shadow-lg w-[850px] h-[550px] flex flex-col items-center">
          <div className="w-full bg-gray-400 h-10 rounded-t-lg flex items-center pl-4 text-white text-lg font-semibold">
            Power BI
          </div>
          <div className="bg-white w-full h-full flex flex-col items-center justify-center p-6 rounded-b-lg">
            <iframe
              title="Power BI Report"
              src="https://app.powerbi.com/view?r=eyJrIjoiYjcxYjVjOTUtMjJmYi00MjBhLTg1ZmMtMzg4YmY0NzQwMjk5IiwidCI6ImNmZjAyMjMwLTM1MTgtNGY2NS1hMTZjLTBmOGJmNjI2MGRmOCJ9"
              width="100%"
              height="350px"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="mt-4">
              <button type="button" className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800">
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Funcionalidades */}
      {showFuncionalidades && (
        <div id="funcionalidades" className="text-center py-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Funcionalidades do Finit</h2>
          <p className="mt-4 text-[#696969] dark:text-gray-400 text-lg">
            Junte-se ao finit e tenha sempre a visibilidade clara que você precisa.
            Vamos automatizar o futuro das finanças!
          </p>
          <div className="flex justify-center gap-8 mt-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-64 p-4 bg-[#3FD195] rounded-lg shadow-md flex flex-col items-center">
                  <div className="h-36 w-full flex items-center justify-center">
                    {index === 1 && (
                      <img src="/Group 14.png" alt="Dashboard" className="h-full object-contain" />
                    )}
                  </div>
                </div>
                <p className="text-gray-800 dark:text-gray-300 text-sm mt-2 w-64">
                  Junte-se ao finit e tenha sempre a visibilidade clara que você precisa.
                  Vamos automatizar o futuro das finanças!
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
