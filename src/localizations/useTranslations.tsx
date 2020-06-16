import React, { FC, useContext } from 'react';
import { createContext } from 'react';

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
import { ShareType } from 'src/interfaces';

type Terms = Record<ShareType | 'share', string>;

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

export const LocalizationProvider: FC<Props> = ({
  children,
  language = 'en',
}) => {
  const locale = language.length > 2 ? language.slice(0, 2) : language;
  return (
    <LocalizationContext.Provider value={{ language: locale }}>
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
