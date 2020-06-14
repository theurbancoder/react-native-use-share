import React from 'react';
import { FlatList } from 'react-native';

import ButtonWrapper from '../shareButtons/ButtonWrapper';
import ShareButton from '../shareButtons/ShareButton';
import { ShareType, ShareProps } from '../shareButtons/interfaces';

interface Props {
  types: ShareType[];
  details: ShareProps;
  close: () => void;
}

const ButtonRow = ({ types, details, close }: Props) => {
  var uniqueTypes = [...(new Set(types) as any)];
  return (
    <FlatList
      horizontal={true}
      renderItem={({ item, index }) => (
        <ButtonWrapper
          isFirst={index === 0}
          isLast={index === types.length - 1}
        >
          <ShareButton type={item} closeShare={close} {...details} />
        </ButtonWrapper>
      )}
      showsHorizontalScrollIndicator={false}
      data={uniqueTypes}
      keyExtractor={(type) => type}
    />
  );
};

export default ButtonRow;
