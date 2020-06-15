# React native - Use share

React Native - Use Share is a JavaScript implementation of a share sheet.

<img src="https://github.com/theurbancoder/react-native-use-share/blob/master/assets/example.png?raw=true" width="800">

| iOS                | Android            | Web                |
| ------------------ | ------------------ | ------------------ |
| :white_check_mark: | :white_check_mark: | :white_check_mark: |

## Installation

Install the package and all the peer dependencies.

```sh
npm install react-native-use-share

npm install expo-linking expo-localization expo-mail-composer expo-sms react-native-appearance react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-redash react-native-svg react-responsive
```

```sh
yarn add react-native-use-share

yarn add expo-linking expo-localization expo-mail-composer expo-sms react-native-appearance react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-redash react-native-svg react-responsive
```

## Usage

Wrap your main component in the share provider.

```js
import React from 'react';
import { ShareProvider } from 'react-native-use-share';
import ShareButton from './ShareButton';

const App = () => (
  <ShareProvider>
    <ShareButton />
  </ShareProvider>
);

export default App;
```

Children of the main component can then call useShare, and use the share function to display the share modal.

```js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useShare } from 'react-native-use-share';

const ShareButton = () => {
  const { share } = useShare();

  const onPress = () =>
    share({
      title: 'Share',
      message:
        'There is a new share sheet for react native, you should check it out: ',
      url: 'https://github.com/theurbancoder/react-native-use-share',
    });

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Share</Text>
    </TouchableOpacity>
  );
};

export default Providers;
```

## Configure

The share provider takes an options argument to configure the share dialog.

| Argument     | Value                                                  | Default                              |
| ------------ | ------------------------------------------------------ | ------------------------------------ |
| language     | language code, eg. "en"                                | Undefined, will take system language |
| defaultTypes | String array specifying which share buttons to display | ["Sms", "Mail", "Copy", "More"]      |

```js
const App = () => (
  <ShareProvider options={{
    language: "en",
    defaultTypes: ["sms", "email", "twitter"]
  }}>
    {...}
  </ShareProvider>
);
```

## Share Types

The share provider takes an options argument to configure the share dialog.

| Type      | Value                                                         | Config |
| --------- | ------------------------------------------------------------- | ------ |
| sms       | Opens sms app on a mobile device. Not supported on web.       |        |
| email     | Opens default email client                                    |        |
| twitter   | Opens twitter website, deep links to the app if installed     |        |
| whats-app | Opens Whats App's website, deep links to the app if installed |        |
| linkedin  | Opens LinkedIn's website, deep links to the app if installed  |        |
| copy      | Copies message + url to clipboard                             |        |

## Dark mode

The library uses react-native-appearance to enable dark mode. It requires some configuration to work, see more at the [expo docs](https://docs.expo.io/versions/latest/sdk/appearance/).

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
