import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';

// Criação do contexto
const ThemeContext = createContext();

// Hook para usar o contexto
export const useTheme = () => useContext(ThemeContext);

// Provider que vai envolver o App
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light'); // Corrigido para não ter quebra de linha

  // Alterar o tema e salvar a escolha no localStorage
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Memoiza o objeto de contexto para evitar re-renderizações desnecessárias
  const contextValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
