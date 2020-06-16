# React native - Use share

React Native - Use Share is a JavaScript implementation of a share sheet.

Why?

- Same user experience on all platforms
- Works on web (doesn't use web share API, but deep links to each share provider)
- Responsive layout
- Dark mode
- Localized (see languages)
- Typescript support

<img src="https://github.com/theurbancoder/react-native-use-share/blob/master/assets/example.png?raw=true" width="800">

| iOS                | Android            | Web                |
| ------------------ | ------------------ | ------------------ |
| :white_check_mark: | :white_check_mark: | :white_check_mark: |

## Installation

Install the package and all the peer dependencies.

```sh
npm install react-native-use-share
```

or

```sh
yarn add react-native-use-share
```

## Peer dependencies

To use the library you need to install all peer dependencies.

- expo-linking
- expo-mail-composer
- expo-sms
- react-native-gesture-handler
- react-native-reanimated
- react-native-redash
- react-native-safe-area-context
- react-native-svg

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

| Argument     | Value                                                  | Default                          |
| ------------ | ------------------------------------------------------ | -------------------------------- |
| defaultTypes | String array specifying which share buttons to display | ["sms", "email", "copy", "more"] |
| language     | language code, eg. "en"                                | "en                              |
| theme        | 'dark' or 'light'                                      | 'light'                          |
| position     | 'bottom' or 'right'                                    | 'bottom'                         |

```js
import React from "react";
import { useWindowDimensions } from 'react-native';
import { ShareProvider } from 'react-native-use-share';
import * as Localization from 'expo-localization';

const App = () => {
  const { width, height } = useWindowDimensions();
  return (
  <ShareProvider options={{
    defaultTypes: ["sms", "email", "twitter"],
    language: Localization.locale,
    theme: "dark",
    position: width > height ? 'right' : 'bottom',
  }}>
    {...}
  </ShareProvider>
);
};
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

## Languages

Currently supports arabic, chinese, english, french, hindi, japanese, portuguese, spanish and swedish. Contributions is appreciated.

## Theme

The library supports light and dark mode.

## Position

The library supports two positions of the share component, bottom and right. Bottom is recommended for smaller devices and right for larger. In the example above, the position is based on the orientation of the device. For better web support it might be worth looking at [react-responsive](https://github.com/contra/react-responsive) and [@expo/media-match](https://github.com/expo/match-media).

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
