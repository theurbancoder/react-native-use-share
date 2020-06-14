import React, { FC, useState, createContext, useContext } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Animated, { interpolate } from 'react-native-reanimated';
import { AppearanceProvider } from 'react-native-appearance';
import { useTransition } from 'react-native-redash';

import { ShareType, ShareProps } from './interfaces';
import { useColor } from './utils/useColor';
import { LocalizationProvider } from './localizations/useTranslations';
import ShareHeader from './components/ShareHeader';
import ShareDetails from './components/ShareDetails';
import ButtonRow from './components/ButtonRow';

interface Props {
  language?: string;
  types?: ShareType[];
}

const defaultTypes: ShareType[] = [
  'Sms',
  'Twitter',
  'LinkedIn',
  'Mail',
  'Copy',
  'More',
];

export interface IShareContext {
  share: (props: ShareProps) => void;
}

const ShareContext = createContext<IShareContext>({
  share: () => {},
});

const ShareProvider: FC<Props> = ({
  children,
  language,
  types = defaultTypes,
}) => {
  const { backgroundPrimary } = useColor();
  const [isDisplaying, setIsDisplaying] = useState(false);
  const transition = useTransition(isDisplaying);
  const [details, setDetails] = useState<ShareProps>({});

  const opacity = interpolate(transition, {
    inputRange: [0, 1],
    outputRange: [0, 0.5],
  });

  const transform: any[] = [
    {
      translateY: interpolate(transition, {
        inputRange: [0, 1],
        outputRange: [500, 0],
      }),
    },
  ];

  const share = (props: ShareProps) => {
    setDetails(props);
    setIsDisplaying(true);
  };

  const close = () => setIsDisplaying(false);

  return (
    <AppearanceProvider>
      <LocalizationProvider language={language}>
        <ShareContext.Provider value={{ share }}>
          <View style={styles.content}>
            <View style={styles.container}>{children}</View>
            <Animated.View
              pointerEvents={isDisplaying ? 'auto' : 'none'}
              style={[
                StyleSheet.absoluteFillObject,
                styles.overlay,
                { opacity },
              ]}
            >
              {isDisplaying && (
                <TouchableWithoutFeedback
                  style={styles.container}
                  onPress={close}
                >
                  <View style={styles.container} />
                </TouchableWithoutFeedback>
              )}
            </Animated.View>
            <Animated.View style={[styles.modal, { transform }]}>
              <ShareHeader />
              <View
                style={[
                  styles.innerContainer,
                  {
                    backgroundColor: backgroundPrimary,
                  },
                ]}
              >
                <ShareDetails {...details} />
                <ButtonRow types={types} details={details} close={close} />
              </View>
            </Animated.View>
          </View>
        </ShareContext.Provider>
      </LocalizationProvider>
    </AppearanceProvider>
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
    paddingBottom: 60,
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
});

const useShare = () => useContext(ShareContext);

export { ShareProvider, useShare };
