import React, { useEffect } from 'react';
import { RxSwitch } from 'react-icons/rx';
import { useTheme } from './contexts/ContextProvider';

export default function App() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const extraOffset = id === 'funcionalidades' ? -60 : 10; // Ajuste específico para cada seção

      const offset = element.offsetTop - (window.innerHeight / 2) + (element.offsetHeight / 2) - headerHeight / 2 + extraOffset;

      window.scrollTo({ top: offset, behavior: 'smooth' });
    } else {
      // "      console.warn(`Elemento com o ID "${id}" não encontrado.`);"
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white font-poppins min-h-screen overflow-x-hidden">
      {/* Cabeçalho */}
      <header className="w-full py-4 fixed top-0 left-0 bg-white dark:bg-black z-50 shadow-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <img
            src={theme === 'dark' ? '/logo 2.png' : '/logo.png'}
            alt="Logo Finit"
            className="h-8"
          />
          <nav className="hidden md:flex space-x-6">
            <a
              href="#powerbi"
              className="hover:text-green-600"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('powerbi');
              }}
            >
              Power BI
            </a>
            <a
              href="#funcionalidades"
              className="hover:text-green-600"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('funcionalidades');
              }}
            >
              Funcionalidades
            </a>
            <a
              href="#time"
              className="hover:text-green-600"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('time');
              }}
            >
              Time
            </a>

          </nav>
          <button type="button" onClick={toggleTheme} className="scale-x-100 dark:-scale-x-100">
            <RxSwitch className="h-8 w-8" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-start h-auto md:h-screen max-w-7xl mx-auto px-8 pt-6 md:pt-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-snug mb-6">
            Automatize suas <br /> finanças com <br /> inteligência.
          </h1>
          <p className="mt-6 text-lg md:text-2xl mb-8">
            Junte-se ao <span className="text-green-600 font-semibold">finit</span> e tenha sempre a{' '}
            <span className="text-yellow-500 font-semibold">visibilidade clara</span> que você precisa.
          </p>
          <div className="w-full flex flex-row space-x-8">
            <button
              type="button" // Garantindo que o botão não submeta um formulário
              onClick={() => scrollToSection('powerbi')}
              className="flex-1 flex items-center justify-center bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 h-[60px] rounded-lg text-lg md:text-xl hover:bg-green-700"
            >
              Use o Power BI
            </button>
            <button
              type="button" // Garantindo que o botão não submeta um formulário
              onClick={() => scrollToSection('funcionalidades')}
              className="flex-1 flex items-center justify-center bg-gray-400 text-gray-900 dark:bg-gray-600 dark:text-white px-6 md:px-8 py-3 md:py-4 h-[60px] rounded-lg text-lg md:text-xl hover:bg-gray-500"
            >
              Conheça Mais
            </button>

          </div>
        </div>

        {/* Imagem grande no desktop, sem espaço extra no mobile */}
        <div className="hidden md:flex w-full md:w-1/2 justify-end items-center">
          <img
            src="/notebook.png"
            alt="Laptop"
            className="w-[110%] md:scale-150 object-contain"
          />
        </div>
      </div>

      {/* Power BI Section */}
      <div id="powerbi" className="flex justify-center py-12 px-4 mt-20">
        <div className="bg-gray-300 p-6 rounded-lg shadow-lg w-full max-w-3xl flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">Power BI</h2>
          <div className="bg-white w-full flex flex-col items-center justify-center p-6 rounded-lg">
            <iframe
              title="AnalisesFinanceirasOutro"
              className="w-full aspect-[16/9] rounded-lg"
              src="https://app.powerbi.com/view?r=eyJrIjoiOGZmODdmZjctOWZjMy00MzdjLWE1NWEtMjE1MWU5ZTcyODNiIiwidCI6ImIxMDUxYzRiLTNiOTQtNDFhYi05NDQxLWU3M2E3MjM0MmZkZCJ9"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Seção Funcionalidades - Sempre visível */}
      <div
        id="funcionalidades"
        className="flex flex-col items-center bg-white dark:bg-black py-12 mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center sm:text-3xl">
          Funcionalidades do Finit
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mb-12">
          A finit usa o Power BI para automatizar a comparação de planilhas e tornar esse processo mais eficiente.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {['icon.png', 'icon 2.png', 'icon 3.png'].map((icon, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-64 h-44 bg-[#3FD195] rounded-lg flex items-center justify-center">
                <img
                  src={`/${icon}`}
                  alt={`Funcionalidade ${index + 1}`}
                  className="h-24 object-contain"
                />
              </div>
              <h3 className="font-bold text-lg mt-4 text-center">
                {index === 0 && 'Automatização de comparação de planilhas'}
                {index === 1 && 'Visualização Clara dos Dados'}
                {index === 2 && 'Resultados de forma mensal'}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Seção Time */}
      <div
        id="time"
        className="flex flex-col items-center justify-center py-8 mt-4"
      >
        {/* Título aumentado */}
        <h3 className="text-5xl font-bold mb-4">Time</h3>
        {/* Subtítulo aumentado */}
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mb-8">
          Nosso time transforma dados em soluções eficazes para você.
        </p>
        {/* Imagem maior */}
        <div className="w-full flex justify-center">
          <img
            src="/time.png"
            alt="Time"
            className="w-full max-w-3xl h-auto object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full flex" style={{ height: '5px' }}>
        <div className="flex-1 bg-green-600" />
        <div className="flex-1 bg-yellow-500" />
        <div className="flex-1 bg-white-400" />
      </div>

    </div>
  );
}
