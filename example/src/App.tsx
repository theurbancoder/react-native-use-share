import * as React from 'react';
import { ShareProvider } from 'react-native-use-share';

import ShareButton from './ShareButton';

const App = () => (
  <ShareProvider
    options={{
      defaultTypes: [
        'sms',
        'whats-app',
        'twitter',
        'linkedin',
        'email',
        'copy',
      ],
    }}
  >
    <ShareButton />
  </ShareProvider>
);

export default App;
