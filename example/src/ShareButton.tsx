import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useShare } from 'react-native-use-share';

const url = 'https://github.com/theurbancoder/react-native-use-share';

const ShareButton = () => {
  const { share } = useShare();

  const onPress = () =>
    share({
      message:
        'There is a new share sheet for react native, you should check it out: ',
      url,
    });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
      <Text style={styles.text}>
        There is a new share sheet for react native, you should check it out.
      </Text>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Share</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    maxWidth: 400,
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
