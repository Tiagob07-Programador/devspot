import React, { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import { Colors, darkColors, lightColors } from './colors';

type ThemeContextValue = {
  isDark: boolean;
  colors: Colors;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = useCallback(() => setIsDark((prev) => !prev), []);

  const value = useMemo(
    () => ({ isDark, colors: isDark ? darkColors : lightColors, toggleTheme }),
    [isDark, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
}