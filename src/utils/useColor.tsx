import React, { createContext, FC, useContext } from 'react';

interface Color {
  fillPrimary: string;
  fillSecondary: string;
  backgroundPrimary: string;
  backgroundSecondary: string;
}

const lightColor: Color = {
  fillPrimary: 'black',
  fillSecondary: '#dedede',
  backgroundPrimary: 'white',
  backgroundSecondary: '#edf2f5',
};

const darkColor: Color = {
  fillPrimary: 'white',
  fillSecondary: '#444',
  backgroundPrimary: '#222222',
  backgroundSecondary: '#444',
};

export type Theme = 'dark' | 'light' | 'no-preference';

export interface IAppearanceContext {
  theme: Theme;
}

const AppearanceContext = createContext<IAppearanceContext>({
  theme: 'light',
});

interface Props {
  theme?: Theme;
}

export const AppearanceProvider: FC<Props> = ({ children, theme }) => (
  <AppearanceContext.Provider value={{ theme: theme || 'light' }}>
    {children}
  </AppearanceContext.Provider>
);

export const useColor = () => {
  const { theme } = useContext(AppearanceContext);
  return theme === 'dark' ? darkColor : lightColor;
};
