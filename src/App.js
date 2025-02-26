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
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white font-poppins min-h-screen">
      {/* Cabeçalho */}
      <header className="w-full py-4 fixed top-0 left-0 bg-white dark:bg-black z-50 border-none shadow-none">
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
              href="#time"
              className="text-gray-900 dark:text-white hover:text-green-600"
            >
              Time
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
      <div className="h-screen flex items-center justify-between max-w-7xl mx-auto px-8 pt-20">
        <div className="w-1/2">
          <h1 className="text-6xl font-bold leading-snug mb-6">
            Automatize suas <br /> finanças com <br /> inteligência.
          </h1>
          <p className="mt-6 text-2xl mb-8">
            Junte-se ao <span className="text-green-600 font-semibold">finit</span> e tenha sempre a
            <span className="text-yellow-500 font-semibold"> visibilidade clara </span> que você precisa.
          </p>
          <div className="flex space-x-8">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-green-600">
              Use o Power BI
            </button>
            <button
              className="bg-gray-400 text-gray-900 dark:bg-gray-600 dark:text-white px-8 py-4 rounded-lg text-xl hover:bg-gray-500"
              onClick={handleShowFuncionalidades}
            >
              Conheça Mais
            </button>
          </div>
        </div>
        <div className="w-[60%] flex justify-end">
          <img src="/notebook.png" alt="Laptop" className="w-[110%] scale-150 object-contain" />
        </div>
      </div>

      {/* Power BI Section */}
      <div id="powerbi" className="flex justify-center py-12">
        <div className="bg-gray-300 p-6 rounded-lg shadow-lg w-[850px] h-[550px] flex flex-col items-center">
          <div className="w-full h-10 rounded-t-lg flex items-center pl-4 text-white text-lg font-semibold">
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
        <div id="funcionalidades" className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black py-12 mb-0">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Funcionalidades do Finit</h2>
          <p className="text-lg text-gray-600 font-bold dark:text-gray-300 text-center max-w-2xl mb-0">
            A finit usa o Power BI para automatizar a comparação de planilhas e tornar esse processo mais eficiente.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
            {['icon.png', 'icon 2.png', 'icon 3.png'].map((icon, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-80 h-56 bg-[#3FD195] rounded-lg shadow-md flex items-center justify-center">
                  <img src={`/${icon}`} alt={`Funcionalidade ${index + 1}`} className="h-40 object-contain" />
                </div>
                <h3 className="font-bold text-lg mt-4 text-center text-gray-900 dark:text-white">
                  {index === 0 && "Automatização de comparação de planilhas"}
                  {index === 1 && "Visualização Clara dos Dados"}
                  {index === 2 && "Resultados de forma mensal"}
                </h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Seção Time */}
      <div id="time" className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black py-12 mt-0">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Time</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mb-8">
          Nosso time é formado por especialistas apaixonados por transformar dados em soluções poderosas e eficazes para você.
        </p>
        <div className="w-96 h-64 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
          <img src="/time.png" alt="Time" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
}
