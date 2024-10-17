import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants';
import Button from '../../components/reusable/Button';
import ROUTE from '../../types/enums/Route';
import {useNavigation} from '@react-navigation/native';
import PageHeading from '../../components/reusable/PageHeading';
import Input from '../../components/reusable/Input';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faEnvelope,
  faKey,
  faLock,
  faMobile,
} from '@fortawesome/free-solid-svg-icons';
import CheckBox from '../../components/reusable/CheckBox';

type Props = {};

const SignUp = (props: Props) => {
  const navigate = useNavigation();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <View style={styles.loginScreenContainer}>
      <View>
        <PageHeading
          title="Join with us"
          desc="All fiels are required unless otherwise noted"
        />
        <Input
          label="Phone umbers"
          placeholder="Entre your phone numbers"
          value=""
          IconLeft={() => (
            <FontAwesomeIcon icon={faMobile} size={20} color="white" />
          )}
        />
        <Input
          label="Email address"
          placeholder="Entre your email address"
          value=""
          IconLeft={() => (
            <FontAwesomeIcon icon={faEnvelope} size={20} color="white" />
          )}
        />
        <Input
          type="password"
          label="Password"
          placeholder="Enter your password"
          value=""
          IconLeft={() => (
            <FontAwesomeIcon icon={faLock} size={20} color="white" />
          )}
        />
      </View>
      <View>
        <Pressable
          style={styles.dontHaveAccountContainer}
          onPress={() => navigate.navigate(ROUTE.OTP)}>
          <Text style={styles.dontHaveAccountText}>
            Already have an account?
            <Text style={{color: COLORS.primary100}}> Sign In</Text>
          </Text>
        </Pressable>
        <Button label="Register" onPress={() => navigate.navigate(ROUTE.OTP)} />
      </View>
    </View>
  );
};

export default SignUp;

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
});
