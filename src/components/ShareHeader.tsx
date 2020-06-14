import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useColor } from '../utils/useColor';

const ShareHeader = () => {
  const { backgroundPrimary, fillSecondary } = useColor();
  return (
    <View style={[styles.header, { backgroundColor: backgroundPrimary }]}>
      <View style={styles.handleContaier}>
        <View style={[styles.handle, { backgroundColor: fillSecondary }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  handleContaier: {
    alignItems: 'center',
  },
  handle: {
    width: 80,
    height: 6,
    borderRadius: 4,
    marginBottom: 10,
  },
});

export default ShareHeader;
