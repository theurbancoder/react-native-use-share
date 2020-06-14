import React from 'react';
import * as MailComposer from 'expo-mail-composer';

import BaseButton from './BaseButton';
import { ShareProps } from './interfaces';
import { useLocalization } from '../localizations/useTranslations';

const Mail = ({ title, url, message }: ShareProps) => {
  const { translate } = useLocalization();

  const onPress = () => {
    MailComposer.composeAsync({
      subject: title,
      body: `${message} ${url}`,
    });
  };

  return <BaseButton icon="Mail" onPress={onPress} text={translate('email')} />;
};

export default Mail;
