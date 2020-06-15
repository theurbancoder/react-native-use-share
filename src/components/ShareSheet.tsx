import React, { FC } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Animated, { interpolate } from 'react-native-reanimated';
import { useTransition } from 'react-native-redash';
import { useSafeArea } from 'react-native-safe-area-context';

import ShareHeader from './ShareHeader';
import ShareDetails from './ShareDetails';
import ButtonRow from './ButtonRow';
import { useColor } from '../utils/useColor';
import { ShareProps, ShareType } from '../interfaces';
import { useScreenSize } from '../screenSize/useScreenSize';

const defaultTypes: ShareType[] = [
  'Sms',
  'Twitter',
  'LinkedIn',
  'Mail',
  'Copy',
  'More',
];

interface Props {
  types?: ShareType[];
  isDisplaying: boolean;
  details: ShareProps;
  close: () => void;
}

const ShareSheet: FC<Props> = ({
  children,
  types = defaultTypes,
  isDisplaying,
  details,
  close,
}) => {
  const { screenSize } = useScreenSize();
  const { backgroundPrimary } = useColor();
  const transition = useTransition(isDisplaying);
  const insets = useSafeArea();

  const opacity = interpolate(transition, {
    inputRange: [0, 1],
    outputRange: [0, 0.5],
  });

  const translation = interpolate(transition, {
    inputRange: [0, 1],
    outputRange: screenSize === 'large' ? [400, 0] : [500, 0],
  });

  const transform: any[] = [
    screenSize === 'large'
      ? {
          translateX: translation,
        }
      : {
          translateY: translation,
        },
  ];

  return (
    <View style={styles.content}>
      <View style={styles.container}>{children}</View>
      <Animated.View
        pointerEvents={isDisplaying ? 'auto' : 'none'}
        style={[StyleSheet.absoluteFillObject, styles.overlay, { opacity }]}
      >
        {isDisplaying && (
          <TouchableWithoutFeedback style={styles.container} onPress={close}>
            <View style={styles.container} />
          </TouchableWithoutFeedback>
        )}
      </Animated.View>
      <Animated.View
        style={[
          screenSize === 'large' ? styles.largeModal : styles.modal,
          { transform },
        ]}
      >
        <ShareHeader showDragHandle={screenSize === 'small'} />
        <View
          style={[
            styles.innerContainer,
            {
              backgroundColor: backgroundPrimary,
              paddingRight: insets.right,
              paddingBottom: insets.bottom + 20,
            },
          ]}
        >
          <ShareDetails {...details} />
          <ButtonRow types={types} details={details} close={close} />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    position: 'relative',
  },
  innerContainer: {
    flex: 1,
    paddingTop: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'black',
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  largeModal: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    right: 0,
    width: 400,
  },
});

export default ShareSheet;
