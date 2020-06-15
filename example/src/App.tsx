import * as React from 'react';
import { ShareProvider } from 'react-native-use-share';

import ShareButton from './ShareButton';

const App = () => (
  <ShareProvider>
    <ShareButton />
  </ShareProvider>
);

export default App;
