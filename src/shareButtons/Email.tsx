import React from 'react';
import * as MailComposer from 'expo-mail-composer';

import Button from '../components/Button';
import { ShareProps } from '../interfaces';
import { useLocalization } from '../localizations/useTranslations';

const Email = ({ title, url, message }: ShareProps) => {
  const { translate } = useLocalization();

  const onPress = () => {
    MailComposer.composeAsync({
      subject: title,
      body: `${message} ${url}`,
    });
  };

  return <Button icon="email" onPress={onPress} text={translate('email')} />;
};

export default Email;
