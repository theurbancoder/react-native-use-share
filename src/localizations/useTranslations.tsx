import React, { FC, useContext } from 'react';
import { createContext } from 'react';
import * as Localization from 'expo-localization';

import {
  arabic,
  chinese,
  english,
  french,
  hindi,
  japanese,
  portuguese,
  spanish,
  swedish,
} from './languages';
import { Terms } from './interfaces';

const terms: Record<string, Terms> = {
  ar: arabic,
  ch: chinese,
  en: english,
  fr: french,
  hi: hindi,
  jp: japanese,
  pt: portuguese,
  sp: spanish,
  sv: swedish,
};

export interface ILocalizationContext {
  language: string;
}

const LocalizationContext = createContext<ILocalizationContext>({
  language: 'en',
});

interface Props {
  language?: string;
}

export const LocalizationProvider: FC<Props> = ({ children, language }) => {
  const deviceLocale = Localization.locale;
  const locale =
    deviceLocale.length > 2 ? deviceLocale.slice(0, 2) : deviceLocale;
  return (
    <LocalizationContext.Provider value={{ language: language || locale }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const { language } = useContext(LocalizationContext);

  const translate = (term: keyof Terms) => {
    const t = terms[language] || terms.en;
    return t[term];
  };

  return { translate };
};
