import React from 'react';
import * as Linking from 'expo-linking';
import * as SMS from 'expo-sms';

import BaseButton from './BaseButton';
import { ShareProps } from '../interfaces';
import { useLocalization } from '../localizations/useTranslations';

const Sms = ({ url, message }: ShareProps) => {
  const { translate } = useLocalization();

  const onPress = async () => {
    const payload = `${message} ${url}`;
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      SMS.sendSMSAsync([], payload);
    } else {
      Linking.openURL(`sms:&body=${payload}`);
    }
  };

  return (
    <BaseButton
      icon="sms"
      text={translate('sms')}
      onPress={onPress}
      backgroundColor="#53d769"
    />
  );
};

export default Sms;
