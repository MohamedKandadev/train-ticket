import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, FONTS} from '../../constants';
import {PageHeadingProps} from '../../types/interfaces/pages';

type Props = {};

const PageHeading: FC<PageHeadingProps> = ({title, desc}) => {
  return (
    <View>
      <Text style={styles.loginDetailsHeading}>{title}</Text>
      <Text style={styles.loginDetailsDesc}>{desc}</Text>
    </View>
  );
};

export default PageHeading;

const styles = StyleSheet.create({
  loginDetailsHeading: {
    ...FONTS.h2,
    color: COLORS.gray50,
  },
  loginDetailsDesc: {
    ...FONTS.ps3,
    color: COLORS.contentSecondary,
  },
});
