import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants';
import Button from '../../components/reusable/Button';
import ROUTE from '../../types/enums/Route';
import {useNavigation} from '@react-navigation/native';
import PageHeading from '../../components/reusable/PageHeading';
import OTPInputView from '@hirbod/react-native-otp-input';

type Props = {};

const Otp = (props: Props) => {
  const navigate = useNavigation();

  return (
    <View style={styles.loginScreenContainer}>
      <View>
        <PageHeading
          title="Enter the OTP code"
          desc="To confirm the account, enter the 6-digit code we sent to your email address"
        />
        <View>
          <OTPInputView
            pinCount={6}
            style={{height: SIZES.width / 8, marginTop: SIZES.padding * 2}}
            autoFocusOnLoad
            codeInputFieldStyle={{
              height: SIZES.width / 8,
              width: SIZES.width / 8,
              borderWidth: 3,
              borderRadius: SIZES.radius,
              borderColor: COLORS.backgroundSecondary,
              backgroundColor: COLORS.backgroundSecondary,
              ...FONTS.h3,
              color: COLORS.contentPrimary,
            }}
            codeInputHighlightStyle={{
              borderColor: COLORS.contentPrimary,
            }}
            onCodeFilled={() => console.log('first')}
          />
          <View style={styles.resendCodeContainer}>
            <Text style={styles.resendCodeText}>Didn´t recieve th code ?</Text>
            <Pressable>
              <Text style={styles.resendCodeButton}> Resend</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View>
        <Button
          label="Submit"
          onPress={() => navigate.navigate(ROUTE.SUCCESS)}
        />
      </View>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  loginScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.gray900,
    justifyContent: 'space-between',
    padding: SIZES.padding,
  },
  forgetPasswordContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  forgetPasswordText: {...FONTS.l3, color: COLORS.primary100},
  dontHaveAccountContainer: {
    textAlign: 'center',
    margin: 'auto',
    marginBottom: 20,
  },
  dontHaveAccountText: {
    color: 'white',
    ...FONTS.l3,
  },
  resendCodeContainer: {
    marginTop: SIZES.radius,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resendCodeText: {
    ...FONTS.ps2,
    color: COLORS.contentSecondary,
  },
  resendCodeButton: {
    ...FONTS.ps2,
    color: COLORS.primary100,
  },
});
