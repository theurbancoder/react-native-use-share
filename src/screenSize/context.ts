import { createContext } from 'react';

import { ScreenSize } from './interfaces';

export interface IScreenSizeContext {
  screenSize: ScreenSize;
}

export const ScreenSizeContext = createContext<IScreenSizeContext>({
  // tslint:disable-next-line
  screenSize: 'small',
});
