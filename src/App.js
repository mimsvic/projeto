import { useEffect } from "react";
import { useTheme } from "./contexts/ContextProvider";

export default function App() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="bg-white font-poppins">
      {/* Cabeçalho */}
      <header className="w-full py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <img src="/logo.png" alt="Logo" className="h-8 ml-0" /> {/* Logo mais à esquerda */}
          <nav className="flex-1 flex justify-center space-x-6"> {/* Centralizando a navegação */}
            <a href="#powerbi" className="text-gray-900 hover:text-green-600">Power BI</a>
            <a href="#tutorial" className="text-gray-900 hover:text-green-600">Tutorial</a>
            <a href="#funcionalidades" className="text-gray-900 hover:text-green-600">Funcionalidades</a>
          </nav>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-8 p-8">
          <div className="flex flex-col justify-center mt-0"> {/* Diminuindo a margem superior */}
            <h1 className="text-5xl font-bold text-gray-900">
              Atomatize Suas Finanças Com Inteligência.
            </h1>
            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              Junte-se ao <span className="text-green-600 font-semibold">finit</span> e tenha sempre a 
              <span className="text-yellow-500 font-semibold"> visibilidade clara </span> que você precisa.
              Vamos automatizar o futuro das finanças!
            </p>
            <div className="mt-6 flex space-x-6">
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                Use o Power BI
              </button>
              <button className="bg-gray-300 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-400">
                Conheça Mais
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
          <img 
              src="mockup.png" 
              alt="Laptop com gráficos" 
              className="w-100 h-auto object-contain" /> {/* Imagem com largura 100% */}
          </div>
        </div>
      </div>
    </div>
  );
}
