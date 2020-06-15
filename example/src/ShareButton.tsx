import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useShare } from 'react-native-use-share';
import { useColorScheme } from 'react-native-appearance';

const message =
  'There is a new share sheet for react native, you should check it out: ';
const url = 'https://github.com/theurbancoder/react-native-use-share';

const ShareButton = () => {
  const { share } = useShare();
  const theme = useColorScheme();

  const onPress = () => share({ message, url });

  return (
    <View
      style={[
        styles.container,
        theme === 'light' ? styles.lightBackground : styles.darkBackground,
      ]}
    >
      <Text
        style={[
          styles.title,
          theme === 'light' ? styles.lightText : styles.darkText,
        ]}
      >
        React Native
      </Text>
      <Text
        style={[
          styles.text,
          theme === 'light' ? styles.lightText : styles.darkText,
        ]}
      >
        There is a new share sheet for react native, you should check it out.
      </Text>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.button,
            theme === 'dark' ? styles.lightBackground : styles.darkBackground,
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              theme === 'dark' ? styles.lightText : styles.darkText,
            ]}
          >
            Share
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 20,
    maxWidth: 440,
  },
  darkBackground: {
    backgroundColor: 'black',
  },
  lightBackground: {
    backgroundColor: 'white',
  },
  lightText: {
    color: 'black',
  },
  darkText: {
    color: 'white',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    width: '100%',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ShareButton;
