import React, { FC } from 'react';
import { useState, useEffect, useContext } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

import { ScreenSize } from './interfaces';
import { ScreenSizeContext } from './context';

const { width: initialWidth, height: initialHeight } = Dimensions.get('window');

const getScreenSize = (orientation: Orientation, width: number) => {
  if (orientation === 'landscape' || width > 1300) {
    return 'large';
  } else {
    return 'small';
  }
};

type Orientation = 'portrait' | 'landscape';

const ScreenSizeProvider: FC = ({ children }) => {
  const orientation: Orientation =
    initialWidth > initialHeight ? 'landscape' : 'portrait';

  const [screenSize, setScreenSize] = useState<ScreenSize>(
    getScreenSize(orientation, initialWidth)
  );

  const onChange = ({ window }: { window: ScaledSize }) => {
    const newOrientation =
      window.width > window.height ? 'landscape' : 'portrait';
    setScreenSize(getScreenSize(newOrientation, window.width));
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, []);

  return (
    <ScreenSizeContext.Provider value={{ screenSize }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

const useScreenSize = () => useContext(ScreenSizeContext);

export { useScreenSize, ScreenSizeProvider };
