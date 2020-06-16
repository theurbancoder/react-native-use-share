import React from 'react';

import { getQueryString } from '../utils/queryParams';
import Button from '../components/Button';
import { ShareProps } from '../interfaces';
import { useLocalization } from '../localizations/useTranslations';

const BASE_URL = 'http://twitter.com/share';

const Twitter = ({ url, message }: ShareProps) => {
  const { translate } = useLocalization();
  const query = getQueryString({
    url,
    text: message,
  });

  return (
    <Button
      icon="twitter"
      text={translate('twitter')}
      backgroundColor="#00acee"
      serviceUrl={BASE_URL + query}
    />
  );
};

export default Twitter;
