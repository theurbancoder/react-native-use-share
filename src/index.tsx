import React, { FC, createContext, useContext, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ShareType, ShareProps, SharePosition } from './interfaces';
import { LocalizationProvider } from './localizations/useTranslations';
import ShareSheet from './components/ShareSheet';
import { AppearanceProvider, Theme } from './utils/useColor';

export interface ShareOptions {
  language?: string;
  defaultTypes?: Array<Exclude<ShareType, 'more'>>;
  theme?: Theme;
  position?: SharePosition;
}

interface ShareConfig {
  types?: Array<Exclude<ShareType, 'more'>>;
}

interface Props {
  options?: ShareOptions;
}

export interface IShareContext {
  share: (props: ShareProps, config?: ShareConfig) => void;
}

const ShareContext = createContext<IShareContext>({ share: () => {} });

const defaultTypes: Array<Exclude<ShareType, 'more'>> = [
  'sms',
  'email',
  'copy',
];

const defaultOptions: ShareOptions = {
  language: 'en',
  defaultTypes,
  theme: 'light',
  position: 'bottom',
};

const ShareProvider: FC<Props> = ({ children, options = defaultOptions }) => {
  const [isDisplaying, setIsDisplaying] = useState(false);
  const [details, setDetails] = useState<ShareProps>({});
  const [types, setTypes] = useState(options.defaultTypes || defaultTypes);

  const share = (newDetails: ShareProps, config?: ShareConfig) => {
    setDetails(newDetails);
    setIsDisplaying(true);
    if (!config) {
      return;
    }
    if (config.types) {
      setTypes(config.types);
    }
  };

  const close = () => setIsDisplaying(false);

  return (
    <SafeAreaProvider>
      <AppearanceProvider theme={options.theme || 'light'}>
        <LocalizationProvider language={options.language || 'en'}>
          <ShareContext.Provider value={{ share }}>
            <ShareSheet
              isDisplaying={isDisplaying}
              details={details}
              close={close}
              types={types}
              position={options.position || 'bottom'}
            >
              {children}
            </ShareSheet>
          </ShareContext.Provider>
        </LocalizationProvider>
      </AppearanceProvider>
    </SafeAreaProvider>
  );
};

const useShare = () => useContext(ShareContext);

export { ShareProvider, useShare };
