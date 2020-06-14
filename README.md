# React native - Use share

React Native - Use Share is a JavaScript implementation of a share sheet.

<img src="https://github.com/theurbancoder/react-native-use-share/blob/master/assets/example.png?raw=true" width="100">

## Installation

```sh
npm install react-native-use-share
```

## Usage

```js
import React from 'react';
import { ShareProvider } from 'react-native-use-share';
import ShareButton from './ShareButton';

const App = ({ children }) => (
  <ShareProvider>
    <ShareButton />
  </ShareProvider>
);

export default App;
```

```js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useShare } from 'react-native-use-share';

const ShareButton = ({ children }) => {
  const { share } = useShare();

  const onPress = () =>
    share({
      title: 'Share',
      message: 'Check out this article: ',
      url: 'https://en.wikipedia.org/wiki/React_Native',
    });

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Share</Text>
    </TouchableOpacity>
  );
};

export default Providers;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
