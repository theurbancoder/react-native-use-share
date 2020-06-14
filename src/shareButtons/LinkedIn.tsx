import React from 'react';
import * as Linking from 'expo-linking';

import { getQueryString } from '../utils/queryParams';
import BaseButton from './BaseButton';
import { ShareProps } from './interfaces';
import { useLocalization } from '../localizations/useTranslations';

const BASE_URL = 'https://www.linkedin.com/shareArticle';

const LinkedIn = ({ title, url, message }: ShareProps) => {
  const { translate } = useLocalization();

  const onPress = () => {
    const query = getQueryString({
      mini: 'true',
      url,
      title,
      summary: message,
    });
    Linking.openURL(BASE_URL + query);
  };

  return (
    <BaseButton
      icon="LinkedIn"
      text={translate('linkedIn')}
      onPress={onPress}
      backgroundColor="#0e76a8"
    />
  );
};

export default LinkedIn;
