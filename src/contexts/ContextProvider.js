import React, { createContext, useState, useContext, useEffect } from 'react';

// Criação do contexto
const ThemeContext = createContext();

// Hook para usar o contexto
export const useTheme = () => useContext(ThemeContext);

// Provider que vai envolver o App
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Por padrão, o tema é claro

  // Verificar se há uma preferência de tema salva no localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Alterar o tema e salvar a escolha no localStorage
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme); // Salva a preferência no localStorage
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
