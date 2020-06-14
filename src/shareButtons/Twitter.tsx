import React from 'react';
import * as Linking from 'expo-linking';

import { getQueryString } from '../utils/queryParams';
import BaseButton from './BaseButton';
import { ShareProps } from './interfaces';
import { useLocalization } from '../localizations/useTranslations';

const BASE_URL = 'http://twitter.com/share';

const Twitter = ({ url, message }: ShareProps) => {
  const { translate } = useLocalization();

  const onPress = () => {
    const query = getQueryString({
      url,
      text: message,
    });
    Linking.openURL(BASE_URL + query);
  };

  return (
    <BaseButton
      icon="Twitter"
      text={translate('twitter')}
      onPress={onPress}
      backgroundColor="#00acee"
    />
  );
};

export default Twitter;
