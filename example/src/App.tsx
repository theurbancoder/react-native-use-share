import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { ShareProvider } from 'react-native-use-share';

import ShareButton from './ShareButton';

const App = () => (
  <ShareProvider>
    <View style={styles.container}>
      <ShareButton />
    </View>
  </ShareProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
  },
});

export default App;
