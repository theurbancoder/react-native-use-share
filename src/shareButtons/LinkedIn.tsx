import React from 'react';

import { getQueryString } from '../utils/queryParams';
import Button from '../components/Button';
import { ShareProps } from '../interfaces';
import { useLocalization } from '../localizations/useTranslations';

const BASE_URL = 'https://www.linkedin.com/shareArticle';

const LinkedIn = ({ title, url, message }: ShareProps) => {
  const { translate } = useLocalization();
  const query = getQueryString({
    mini: 'true',
    url,
    title,
    summary: message,
  });

  return (
    <Button
      icon="linkedin"
      text={translate('linkedin')}
      serviceUrl={BASE_URL + query}
      backgroundColor="#0e76a8"
    />
  );
};

export default LinkedIn;
