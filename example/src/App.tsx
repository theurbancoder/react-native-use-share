import * as React from 'react';
import * as Localization from 'expo-localization';
import { useColorScheme } from 'react-native-appearance';
import { ShareProvider } from 'react-native-use-share';

import ShareButton from './ShareButton';

const App = () => {
  const theme = useColorScheme();

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
      }}
    >
      <ShareButton />
    </ShareProvider>
  );
};

export default App;
