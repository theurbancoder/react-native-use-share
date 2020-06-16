import React from 'react';
import { Share } from 'react-native';

import Button from '../components/Button';
import { ShareProps } from '../interfaces';
import { useLocalization } from '../localizations/useTranslations';

interface Props extends ShareProps {
  closeShare: () => void;
}

const More = ({ closeShare, ...props }: Props) => {
  const { translate } = useLocalization();

  const onPress = async () => {
    Share.share(props as any);
    closeShare();
  };

  return <Button icon="more" onPress={onPress} text={translate('more')} />;
};

export default More;
