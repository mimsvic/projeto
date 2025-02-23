import { createContext, useContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  return (
    <Context.Provider value={{ theme, setTheme }}>
      {children}
    </Context.Provider>
  );
};

export const useTheme = () => useContext(Context);

