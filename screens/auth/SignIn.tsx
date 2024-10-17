import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants';
import Button from '../../components/reusable/Button';
import ROUTE from '../../types/enums/Route';
import {useNavigation} from '@react-navigation/native';
import PageHeading from '../../components/reusable/PageHeading';
import Input from '../../components/reusable/Input';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faKey, faLock, faMobile} from '@fortawesome/free-solid-svg-icons';
import CheckBox from '../../components/reusable/CheckBox';

type Props = {};

const SignIn = (props: Props) => {
  const navigate = useNavigation();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <View style={styles.loginScreenContainer}>
      <View>
        <PageHeading
          title="Welcome back"
          desc="Enter your phone numbers to sign in"
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
          type="password"
          label="Password"
          placeholder="Enter your password"
          value=""
          IconLeft={() => (
            <FontAwesomeIcon icon={faLock} size={20} color="white" />
          )}
        />
        <View style={styles.forgetPasswordContainer}>
          <CheckBox
            isChecked={isChecked}
            setIsChecked={() => setIsChecked(!isChecked)}
            label="Remember me"
          />
          <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
        </View>
      </View>
      <View>
        <Pressable
          style={styles.dontHaveAccountContainer}
          onPress={() => navigate.navigate(ROUTE.SIGNUP)}>
          <Text style={styles.dontHaveAccountText}>
            If you dont have an account?
            <Text style={{color: COLORS.primary100}}> Sign Up</Text>
          </Text>
        </Pressable>
        <Button label="Sign In" onPress={() => console.log('Sign In')} />
      </View>
    </View>
  );
};

export default SignIn;

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
