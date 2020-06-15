import React, { FC, createContext, useContext, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ShareType, ShareProps } from './interfaces';
import { LocalizationProvider } from './localizations/useTranslations';
import { ScreenSizeProvider } from './screenSize/useScreenSize';
import ShareSheet from './components/ShareSheet';
import { AppearanceProvider, Theme } from './utils/useColor';

export interface ShareOptions {
  language?: string;
  defaultTypes?: Array<Exclude<ShareType, 'more'>>;
  theme?: Theme;
}

export interface ShareFnOptions {
  language?: string;
  types?: Array<Exclude<ShareType, 'more'>>;
}

interface Props {
  options?: ShareOptions;
}

export interface IShareContext {
  share: (props: ShareProps, options?: ShareFnOptions) => void;
}

const ShareContext = createContext<IShareContext>({
  share: (_: ShareProps, __?: ShareFnOptions) => {},
});

const ShareProvider: FC<Props> = ({ children, options: defaultOptions }) => {
  const [isDisplaying, setIsDisplaying] = useState(false);
  const [details, setDetails] = useState<ShareProps>({});
  const [language, setLanguage] = useState(
    defaultOptions && defaultOptions.language
  );
  const [types, setTypes] = useState(
    defaultOptions && defaultOptions.defaultTypes
  );

  const share = (newDetails: ShareProps, options?: ShareFnOptions) => {
    setDetails(newDetails);
    setIsDisplaying(true);
    if (!options) {
      return;
    }
    if (options.language) {
      setLanguage(options.language);
    }
    if (options.types) {
      setTypes(options.types);
    }
  };

  const close = () => setIsDisplaying(false);

  return (
    <SafeAreaProvider>
      <AppearanceProvider theme={defaultOptions && defaultOptions.theme}>
        <ScreenSizeProvider>
          <LocalizationProvider language={language}>
            <ShareContext.Provider value={{ share }}>
              <ShareSheet
                isDisplaying={isDisplaying}
                details={details}
                close={close}
                types={types}
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
