import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { useColor } from '../utils/useColor';

interface Props {
  size: number;
}

const MoreIcon = ({ size }: Props) => {
  const { fillPrimary } = useColor();
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M0 0h24v24H0V0z" fill="none" />
      <Path
        fill={fillPrimary}
        d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
      />
    </Svg>
  );
};

export default MoreIcon;
