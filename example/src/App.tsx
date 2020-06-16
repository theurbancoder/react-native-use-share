import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import * as Localization from 'expo-localization';
import { useColorScheme } from 'react-native-appearance';
import { ShareProvider } from 'react-native-use-share';

import ShareButton from './ShareButton';

const App = () => {
  const theme = useColorScheme();
  const { width, height } = useWindowDimensions();

  return (
    <ShareProvider
      options={{
        theme,
        defaultTypes: [
          'sms',
          'whats-app',
          'twitter',
          'linkedin',
          'email',
          'copy',
        ],
        language: Localization.locale,
        position: width > height ? 'right' : 'bottom',
      }}
    >
      <ShareButton />
    </ShareProvider>
  );
};

export default App;
