import React, { FC, createContext, useContext, useState } from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ShareType, ShareProps } from './interfaces';
import { LocalizationProvider } from './localizations/useTranslations';
import { ScreenSizeProvider } from './screenSize/useScreenSize';
import ShareSheet from './components/ShareSheet';

interface Props {
  language?: string;
  types?: ShareType[];
}

export interface IShareContext {
  share: (props: ShareProps) => void;
}

const ShareContext = createContext<IShareContext>({
  share: () => {},
});

const ShareProvider: FC<Props> = ({ children, language, ...props }) => {
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
          <LocalizationProvider language={language}>
            <ShareContext.Provider value={{ share }}>
              <ShareSheet
                isDisplaying={isDisplaying}
                details={details}
                close={close}
                {...props}
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
