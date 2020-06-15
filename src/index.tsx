import React, { FC, createContext, useContext, useState } from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ShareType, ShareProps } from './interfaces';
import { LocalizationProvider } from './localizations/useTranslations';
import { ScreenSizeProvider } from './screenSize/useScreenSize';
import ShareSheet from './components/ShareSheet';

export interface ShareOptions {
  language?: string;
  defaultTypes?: ShareType[];
}

interface Props {
  options?: ShareOptions;
}

export interface IShareContext {
  share: (props: ShareProps) => void;
}

const ShareContext = createContext<IShareContext>({
  share: () => {},
});

const ShareProvider: FC<Props> = ({ children, options }) => {
  const [isDisplaying, setIsDisplaying] = useState(false);
  const [details, setDetails] = useState<ShareProps>({});

  const share = (newDetails: ShareProps) => {
    setDetails(newDetails);
    setIsDisplaying(true);
  };

  const close = () => setIsDisplaying(false);

  return (
    <SafeAreaProvider>
      <AppearanceProvider>
        <ScreenSizeProvider>
          <LocalizationProvider language={options && options.language}>
            <ShareContext.Provider value={{ share }}>
              <ShareSheet
                isDisplaying={isDisplaying}
                details={details}
                close={close}
                types={options && options.defaultTypes}
              >
                {children}
              </ShareSheet>
            </ShareContext.Provider>
          </LocalizationProvider>
        </ScreenSizeProvider>
      </AppearanceProvider>
    </SafeAreaProvider>
  );
};

const useShare = () => useContext(ShareContext);

export { ShareProvider, useShare };
