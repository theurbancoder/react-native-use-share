import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { OUTER_MARGIN } from '../utils/constants';
import { useColor } from '../utils/useColor';
import { useLocalization } from '../localizations/useTranslations';
import { ShareProps } from '../interfaces';

const ShareDetails = ({ title, message, url }: ShareProps) => {
  const { fillPrimary, backgroundSecondary } = useColor();
  const { translate } = useLocalization();

  return (
    <View style={styles.container}>
      <Text
        style={[styles.title, { color: fillPrimary }]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {title || translate('share')}
      </Text>
      {message && (
        <Text
          style={[styles.message, { color: fillPrimary }]}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {message}
        </Text>
      )}
      {url && (
        <View style={[styles.urlBar, { backgroundColor: backgroundSecondary }]}>
          <Text
            style={[styles.url, { color: fillPrimary }]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {url}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: OUTER_MARGIN,
    marginBottom: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 26,
  },
  message: {
    fontSize: 16,
    marginVertical: 5,
  },
  urlBar: {
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  url: {
    fontSize: 16,
  },
});

export default ShareDetails;
