import React from 'react';
import { Share, Platform } from 'react-native';

import BaseButton from './BaseButton';
import { ShareProps } from './interfaces';
import { useLocalization } from '../localizations/useTranslations';

interface Props extends ShareProps {
  closeShare: () => void;
}

const More = ({ closeShare, ...props }: Props) => {
  const { translate } = useLocalization();

  if (Platform.OS === 'web') {
    return null;
  }

  const onPress = async () => {
    Share.share(props as any);
    closeShare();
  };

  return <BaseButton icon="More" onPress={onPress} text={translate('more')} />;
};

export default More;
