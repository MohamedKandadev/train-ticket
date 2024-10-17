import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, IMAGES, SIZES} from '../../constants';
import Button from '../../components/reusable/Button';
import ROUTE from '../../types/enums/Route';
import {useNavigation} from '@react-navigation/native';
import PageHeading from '../../components/reusable/PageHeading';
import OTPInputView from '@hirbod/react-native-otp-input';

type Props = {};

const Success = (props: Props) => {
  const navigate = useNavigation();

  return (
    <View style={styles.loginScreenContainer}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Image source={IMAGES.success} style={styles.successImage} />
        <Text style={styles.successTitle}>Account Created</Text>
        <Text style={styles.successDesc}>
          you have succssully created your account
        </Text>
      </View>
      <View>
        <Button
          label="Go to Home"
          onPress={() => navigate.navigate(ROUTE.WELCOME)}
        />
      </View>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  loginScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.gray900,
    justifyContent: 'space-between',
    padding: SIZES.padding,
  },
  successImage: {
    width: 150,
    height: 150,
  },
  successTitle: {
    ...FONTS.h2,
    textAlign: 'center',
    marginTop: SIZES.padding,
    color: COLORS.contentPrimary,
  },
  successDesc: {
    ...FONTS.ps2,
    textAlign: 'center',
    marginTop: SIZES.radius,
    color: COLORS.contentSecondary,
  },
});
