import React from 'react';
import { FlatList } from 'react-native';

import ButtonWrapper from '../shareButtons/ButtonWrapper';
import ShareButton from '../shareButtons/ShareButton';
import { ShareType, ShareProps } from '../shareButtons/interfaces';
import { useScreenSize } from '../screenSize/useScreenSize';

interface Props {
  types: ShareType[];
  details: ShareProps;
  close: () => void;
}

const ButtonRow = ({ types, details, close }: Props) => {
  const { screenSize } = useScreenSize();
  var uniqueTypes = [...(new Set(types) as any)];

  const columns = screenSize === 'small' ? 1 : 4;
  const isFirst = (index: number) =>
    screenSize === 'small' ? index === 0 : index % columns === 0;

  const renderItem = ({ item, index }: { item: ShareType; index: number }) => (
    <ButtonWrapper isFirst={isFirst(index)} isLast={index === types.length - 1}>
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
