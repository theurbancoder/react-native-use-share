import React, { FC } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Platform,
} from 'react-native';
import * as Linking from 'expo-linking';

import Icon from '../icons/Icon';
import { useColor } from '../utils/useColor';
import { ShareType } from '../interfaces';

interface Props {
  icon: ShareType;
  text: string;
  backgroundColor?: string;
  onPress?: () => void;
  serviceUrl?: string;
}

interface LinkProps {
  onPress?: () => void;
  serviceUrl?: string;
}

const Link: FC<LinkProps> = ({ onPress, serviceUrl, children }) => {
  if (Platform.OS === 'web' && serviceUrl) {
    console.log('hgot');
    return (
      <a href={serviceUrl} target="_blank">
        {children}
      </a>
    );
  }
  let onPressAction = onPress;
  if (serviceUrl) {
    onPressAction = () => Linking.openURL(serviceUrl);
  }
  return (
    <TouchableWithoutFeedback onPress={onPressAction}>
      {children}
    </TouchableWithoutFeedback>
  );
};

const BaseButton = ({
  backgroundColor,
  text,
  icon,
  serviceUrl,
  onPress,
}: Props) => {
  const { backgroundSecondary, fillPrimary } = useColor();
  return (
    <View style={styles.container}>
      <Link onPress={onPress} serviceUrl={serviceUrl}>
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
      </Link>
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
