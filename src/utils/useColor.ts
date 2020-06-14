import { useColorScheme } from 'react-native-appearance';

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

export const useColor = () => {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? darkColor : lightColor;
};
