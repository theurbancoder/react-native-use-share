import React from 'react';

import { getQueryString } from '../utils/queryParams';
import Button from '../components/Button';
import { ShareProps } from '../interfaces';
import { useLocalization } from '../localizations/useTranslations';

const BASE_URL = 'https://wa.me';

const WhatsApp = ({ url, message }: ShareProps) => {
  const { translate } = useLocalization();

  const query = getQueryString({
    url,
    text: `${message}: ${url}`,
  });

  return (
    <Button
      icon="whats-app"
      text={translate('whats-app')}
      backgroundColor="#25D366"
      serviceUrl={BASE_URL + query}
    />
  );
};

export default WhatsApp;
