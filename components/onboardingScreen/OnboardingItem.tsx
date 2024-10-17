import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {SIZES} from '../../constants';
import {OnbordingItem} from '../../types/types/onboarding.type';
import Animated from 'react-native-reanimated';

const OnboardingItem: FC<OnbordingItem> = ({
  desc,
  id,
  image,
  title,
  animatedStyles,
}) => {
  return (
    <View style={styles.onboardingItem}>
      <Animated.Image
        source={image}
        style={[styles.onboardingItemImage, animatedStyles]}
        resizeMode="contain"
      />
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  onboardingItem: {
    width: SIZES.width,
    alignItems: 'center',
  },
  onboardingItemImage: {
    marginTop: SIZES.padding * 3,
    width: SIZES.width * 0.8,
    height: SIZES.height * 0.8,
  },
});
