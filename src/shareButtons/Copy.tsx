import React from 'react';
import { Clipboard } from 'react-native';

import Button from '../components/Button';
import { ShareProps } from '../interfaces';
import { useLocalization } from '../localizations/useTranslations';

const Copy = ({ url, message }: ShareProps) => {
  const { translate } = useLocalization();
  const onPress = () => {
    const payload = url || message;
    if (!payload) {
      return;
    }
    Clipboard.setString(payload);
  };

  return <Button icon="copy" onPress={onPress} text={translate('copy')} />;
};

export default Copy;
