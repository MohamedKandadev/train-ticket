import {StyleSheet, Text, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

import {COLORS, FONTS, SIZES} from '../constants';
import {onBoardingItems} from '../utils/onboarding';
import OnboardingItem from '../components/onboardingScreen/OnboardingItem';
import Button from '../components/reusable/Button';
import {FC, useEffect, useRef, useState} from 'react';
import Swiper from 'react-native-swiper';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import ROUTE from '../types/enums/Route';
import {OnboardingScreenProps} from '../types/interfaces/pages';
import {useNavigation} from '@react-navigation/native';

const OnBoarding = () => {
  const navigate = useNavigation();
  const controlX = SIZES.width / 2;
  const screenSwiperRef = useRef<Swiper | null>(null);
  const titleSwiperRef = useRef<Swiper | null>(null);
  const [swiperIndex, setSwiperIndex] = useState<number>(0);

  const animationValue = useSharedValue(0);

  // Animate text opacity
  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(animationValue.value, [0, 1], [0, 1]),
    };
  });
  useEffect(() => {
    // Looping animation for each slide
    animationValue.value = withTiming(1, {duration: 1000});
  }, []);

  useEffect(() => {
    screenSwiperRef.current?.scrollTo(swiperIndex);
    titleSwiperRef.current?.scrollTo(swiperIndex);
  }, [swiperIndex]);

  console.log(swiperIndex, onBoardingItems.length - 1);
  const isLastSwiper = swiperIndex === onBoardingItems.length - 1;
  const changeIndex = () => {
    if (!isLastSwiper) {
      setSwiperIndex(swiperIndex + 1);
    } else {
      navigate.navigate(ROUTE.WELCOME);
    }
  };

  return (
    <View style={styles.onboardingContainer}>
      <View style={styles.onboardingTop}>
        <Swiper
          ref={screenSwiperRef}
          showsPagination={false}
          loop={false}
          onIndexChanged={(index: number) => {
            animationValue.value = 0;
            animationValue.value = withTiming(1, {duration: 1000});
            setSwiperIndex(index);
          }}>
          {onBoardingItems.map((item, index) => (
            <View key={`img-index-${index}`}>
              <OnboardingItem {...item} />
            </View>
          ))}
        </Swiper>
      </View>
      <View style={styles.onboardingBottom}>
        <Svg style={styles.svg} width={SIZES.width} height={100}>
          <Path
            d={`M 0 20 Q ${controlX} 130 ${SIZES.width} 20 L ${SIZES.width} 100 L 0 100 Z`}
            fill={COLORS.gray900}
          />
        </Svg>

        <Swiper
          showsPagination={false}
          loop={false}
          ref={titleSwiperRef}
          onIndexChanged={(index: number) => setSwiperIndex(index)}>
          {onBoardingItems.map((item, index) => (
            <View style={styles.onboardingItem} key={`title-index-${index}`}>
              <Animated.Text
                style={[styles.onboardingItemText, animatedTextStyle]}>
                {item.title}
              </Animated.Text>
              <Animated.Text style={[styles.onboardingDesc, animatedTextStyle]}>
                {item.desc}
              </Animated.Text>
            </View>
          ))}
        </Swiper>
        <Button
          label={isLastSwiper ? 'Get Started' : 'Next'}
          onPress={changeIndex}
          buttonStyle={{
            marginHorizontal: 15,
          }}
        />
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  onboardingContainer: {
    flex: 1,
  },
  onboardingTop: {
    flex: 2,
    backgroundColor: COLORS.primary50,
  },
  onboardingBottom: {
    flex: 1,
    backgroundColor: COLORS.gray900,
    paddingBottom: SIZES.padding,
  },

  svg: {
    position: 'absolute',
    top: -100,
  },
  onboardingItem: {
    width: SIZES.width,
    textAlign: 'center',
    paddingHorizontal: SIZES.radius,
  },
  onboardingItemText: {
    ...FONTS.h1,
    textAlign: 'center',
    color: COLORS.primary100,
  },
  onboardingDesc: {
    ...FONTS.pr2,
    marginTop: SIZES.radius,
    color: COLORS.gray100,
    textAlign: 'center',
  },
});
