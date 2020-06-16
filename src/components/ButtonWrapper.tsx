import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';

import { OUTER_MARGIN, INNER_MARGIN } from '../utils/constants';

interface Props {
  isFirst: boolean;
  isLast: boolean;
}

const ButtonWrapper: FC<Props> = ({ children, isFirst, isLast }) => {
  return (
    <View style={[styles.all, isFirst && styles.first, isLast && styles.last]}>
      {children}
    </View>
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

export default ButtonWrapper;
