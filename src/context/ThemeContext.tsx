"use client";

import { createContext, useContext, useState } from "react";

type Theme = "blue" | "green";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: "blue",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("blue");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "blue" ? "green" : "blue"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "blue" ? "theme-blue" : "theme-green"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
