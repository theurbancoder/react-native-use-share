import React from 'react';
import { FlatList, Platform, View, StyleSheet } from 'react-native';

import { ShareType, ShareProps, SharePosition } from '../interfaces';
import {
  Copy,
  Email,
  LinkedIn,
  More,
  Sms,
  Twitter,
  WhatsApp,
} from '../shareButtons';
import { INNER_MARGIN, OUTER_MARGIN } from 'src/utils/constants';

interface Props {
  types: ShareType[];
  details: ShareProps;
  close: () => void;
  position: SharePosition;
}

const unsupportedWebTypes = ['sms', 'more'];

interface ButtonProp extends ShareProps {
  closeShare: () => void;
}

const getButtons = (props: ButtonProp) => ({
  'sms': <Sms {...props} />,
  'twitter': <Twitter {...props} />,
  'linkedin': <LinkedIn {...props} />,
  'email': <Email {...props} />,
  'copy': <Copy {...props} />,
  'more': <More {...props} />,
  'whats-app': <WhatsApp {...props} />,
});

const Content = ({ types, details, close, position }: Props) => {
  let uniqueTypes = [...(new Set([...types, 'more']) as any)];
  if (Platform.OS === 'web') {
    uniqueTypes = uniqueTypes.filter(
      (item) => !unsupportedWebTypes.includes(item)
    );
  }

  const columns = position === 'bottom' ? 1 : 5;
  const isFirst = (index: number) =>
    position === 'bottom' ? index === 0 : index % columns === 0;

  const renderItem = ({ item, index }: { item: ShareType; index: number }) => (
    <View
      style={[
        styles.all,
        isFirst(index) && styles.first,
        index === types.length && styles.last,
      ]}
    >
      {getButtons({ closeShare: close, ...details })[item]}
    </View>
  );

  return (
    <FlatList
      key={position}
      numColumns={columns}
      horizontal={position === 'bottom' ? true : false}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={uniqueTypes}
      keyExtractor={(type) => type}
    />
  );
};

const styles = StyleSheet.create({
  all: {
    marginBottom: 10,
    marginRight: INNER_MARGIN,
  },
  first: {
    marginLeft: OUTER_MARGIN,
  },
  last: {
    marginRight: OUTER_MARGIN,
  },
});

export default Content;
