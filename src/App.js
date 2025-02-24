import { useEffect, useState } from "react";
import { useTheme } from "./contexts/ContextProvider";

export default function App() {
  const { theme, setTheme } = useTheme();
  const [showFuncionalidades, setShowFuncionalidades] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Elemento com o ID "${id}" não encontrado.`);
    }
  };

  const handleShowFuncionalidades = () => {
    setShowFuncionalidades(true);
    scrollToSection("funcionalidades");
  };

  return (
    <div className="bg-white font-poppins">
      {/* Cabeçalho */}
      <header className="w-full py-4 fixed top-0 left-0 w-full bg-white z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-center px-6">
          <img src="/logo.png" alt="Logo Finit" className="h-8 mb-2" />
          <nav className="flex space-x-6">
            <a 
              href="#powerbi" 
              className="text-gray-900 hover:text-green-600"
              onClick={() => scrollToSection('powerbi')}
            >
              Power BI
            </a>
            <a 
              href="#funcionalidades" 
              className="text-gray-900 hover:text-green-600"
              onClick={() => handleShowFuncionalidades()}
            >
              Funcionalidades
            </a>
            <a 
              href="#tutorial" 
              className="text-gray-900 hover:text-green-600"
            >
              Tutorial
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section - Tela cheia */}
      <div className="h-screen flex items-center justify-between max-w-7xl mx-auto px-6">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Automatize Suas Finanças Com Inteligência.
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Junte-se ao <span className="text-green-600 font-semibold">finit</span> e tenha sempre a 
            <span className="text-yellow-500 font-semibold"> visibilidade clara </span> que você precisa.
            Vamos automatizar o futuro das finanças!
          </p>
          <div className="mt-6 flex space-x-6">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
              Use o Power BI
            </button>
            <button 
              className="bg-gray-300 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-400"
              onClick={handleShowFuncionalidades}
            >
              Conheça Mais
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <img src="/notebook.png" alt="Laptop com gráficos" className="w-[550px] h-auto object-contain" />
        </div>
      </div>

      {/* Power BI Section - Centralizado com borda maior */}
      <div 
        id="powerbi" 
        className="flex justify-center py-12 border-8 border-[#D7D7D7] rounded-lg shadow-md max-w-7xl mx-auto mt-16"
      >
        <div className="w-full text-center">
          <iframe
            title="Power BI Report"
            src="https://app.powerbi.com/view?r=eyJrIjoiYjcxYjVjOTUtMjJmYi00MjBhLTg1ZmMtMzg4YmY0NzQwMjk5IiwidCI6ImNmZjAyMjMwLTM1MTgtNGY2NS1hMTZjLTBmOGJmNjI2MGRmOCJ9"
            width="700" 
            height="500" 
            frameBorder="0"
            className="mx-auto"
          ></iframe>
          {/* Novo botão "Entrar" */}
          <div className="mt-6">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
              Entrar
            </button>
          </div>
        </div>
      </div>

      {/* Funcionalidades (visível apenas quando showFuncionalidades for true) */}
      {showFuncionalidades && (
        <div id="funcionalidades" className="text-center py-12">
          <h2 className="text-3xl font-bold">Funcionalidades do Finit</h2>
          <p className="mt-2 text-gray-600">Junte-se ao finit e tenha sempre a visibilidade clara que você precisa.<br />Vamos automatizar o futuro das finanças!</p>

          <div className="flex justify-center gap-8 mt-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="w-72 p-6 bg-green-200 rounded-lg shadow-md">
                <div className="h-32 bg-green-400 mb-4 flex items-center justify-center">
                  {index === 1 ? <img src="/Group 14.png" alt="Dashboard" className="h-full object-cover" /> : null}
                </div>
                <h3 className="font-bold">Funcionalidades do Finit</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Junte-se ao finit e tenha sempre a visibilidade clara que você precisa.<br />
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
