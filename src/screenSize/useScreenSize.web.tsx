import React, { FC } from 'react';
import { useState, useEffect, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

import { ScreenSize } from './interfaces';
import { ScreenSizeContext } from './context';

const BOUNDS = 1000;

const ScreenSizeProvider: FC = ({ children }) => {
  const isSmall = useMediaQuery({
    query: `(max-width: ${BOUNDS}px)`,
  });
  const isLarge = useMediaQuery({ query: `(min-width: ${BOUNDS}px)` });

  const [screenSize, setScreenSize] = useState<ScreenSize>(
    isSmall ? 'small' : 'large'
  );

  useEffect(() => {
    if (!isSmall && !isLarge) {
      return;
    }
    const size = isSmall ? 'small' : 'large';
    if (size !== screenSize) {
      setScreenSize(size);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSmall, isLarge]);

  return (
    <ScreenSizeContext.Provider
      value={{
        screenSize,
      }}
    >
      {children}
    </ScreenSizeContext.Provider>
  );
};

const useScreenSize = () => useContext(ScreenSizeContext);

export { useScreenSize, ScreenSizeProvider };
