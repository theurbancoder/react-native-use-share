import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useShare } from 'react-native-use-share';

const url =
  'https://www.theguardian.com/cities/2019/sep/24/the-homeless-death-of-jake-humm-it-was-my-deepest-darkest-fear';

const ShareButton = () => {
  const { share } = useShare();

  const onPress = () =>
    share({
      message: 'You should check out this article:',
      url,
    });

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>Share</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#53d769',
    padding: 15,
    width: '100%',
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ShareButton;
