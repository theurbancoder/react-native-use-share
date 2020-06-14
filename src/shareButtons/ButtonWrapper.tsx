import React, { FC } from 'react';
import { View } from 'react-native';

import { OUTER_MARGIN, INNER_MARGIN } from '../utils/constants';

interface Props {
  isFirst: boolean;
  isLast: boolean;
}

const ButtonWrapper: FC<Props> = ({ children, isFirst, isLast }) => (
  <View
    style={{
      marginLeft: isFirst ? OUTER_MARGIN : 0,
      marginRight: isLast ? OUTER_MARGIN : INNER_MARGIN,
    }}
  >
    {children}
  </View>
);

export default ButtonWrapper;
