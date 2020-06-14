import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import Icon, { IconName } from '../icons/Icon';
import { useColor } from '../utils/useColor';

interface Props {
  icon: IconName;
  text: string;
  backgroundColor?: string;
  onPress: () => void;
}

const BaseButton = ({ backgroundColor, text, icon, onPress }: Props) => {
  const { backgroundSecondary, fillPrimary } = useColor();
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={[
            styles.button,
            {
              backgroundColor: backgroundColor || backgroundSecondary,
            },
          ]}
        >
          <Icon name={icon} size={30} />
        </View>
      </TouchableWithoutFeedback>
      <Text
        style={[
          styles.text,
          {
            color: fillPrimary,
          },
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    padding: 16,
    borderRadius: 18,
  },
  text: {
    marginTop: 10,
    fontWeight: '600',
    maxWidth: 72,
    textAlign: 'center',
  },
});

export default BaseButton;
