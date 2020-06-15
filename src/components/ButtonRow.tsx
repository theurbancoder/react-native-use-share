import React from 'react';
import { FlatList, Platform } from 'react-native';

import ButtonWrapper from '../shareButtons/ButtonWrapper';
import ShareButton from '../shareButtons/ShareButton';
import { ShareType, ShareProps } from '../interfaces';
import { useScreenSize } from '../screenSize/useScreenSize';

interface Props {
  types: ShareType[];
  details: ShareProps;
  close: () => void;
}

const unsupportedWebTypes = ['sms', 'more'];

const ButtonRow = ({ types, details, close }: Props) => {
  const { screenSize } = useScreenSize();
  let uniqueTypes = [...(new Set([...types, 'more']) as any)];
  if (Platform.OS === 'web') {
    uniqueTypes = uniqueTypes.filter(
      (item) => !unsupportedWebTypes.includes(item)
    );
  }

  const columns = screenSize === 'small' ? 1 : 5;
  const isFirst = (index: number) =>
    screenSize === 'small' ? index === 0 : index % columns === 0;

  const renderItem = ({ item, index }: { item: ShareType; index: number }) => (
    <ButtonWrapper isFirst={isFirst(index)} isLast={index === types.length}>
      <ShareButton type={item} closeShare={close} {...details} />
    </ButtonWrapper>
  );

  return (
    <FlatList
      key={screenSize}
      numColumns={columns}
      horizontal={screenSize === 'small' ? true : false}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={uniqueTypes}
      keyExtractor={(type) => type}
    />
  );
};

export default ButtonRow;
