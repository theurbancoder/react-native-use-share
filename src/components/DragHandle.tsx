import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useColor } from '../utils/useColor';

interface Props {
  showDragHandle: boolean;
}

const ShareHeader = ({ showDragHandle }: Props) => {
  const { backgroundPrimary, fillSecondary } = useColor();
  return (
    <View
      style={[
        { backgroundColor: backgroundPrimary },
        showDragHandle && styles.radius,
        showDragHandle ? styles.header : styles.largeHeader,
      ]}
    >
      <View style={styles.handleContainer}>
        {showDragHandle && (
          <View style={[styles.handle, { backgroundColor: fillSecondary }]} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
  },
  largeHeader: {
    paddingTop: 40,
  },
  radius: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  handleContainer: {
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
