import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, IMAGES, SIZES} from '../../constants';
import Button from '../../components/reusable/Button';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMobile} from '@fortawesome/free-solid-svg-icons';
import {
  faApple,
  faFacebook,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import {BUTTON_VARIANTE} from '../../types/enums/button';
import {useNavigation} from '@react-navigation/native';
import ROUTE from '../../types/enums/Route';

type Props = {};

const Welcome = (props: Props) => {
  const navigate = useNavigation();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.screenContainer}>
      <Image source={IMAGES.train} style={styles.screenTrain} />
      <View style={styles.loginDetails}>
        <View>
          <Text style={styles.loginDetailsHeading}>Log In</Text>
          <Text style={styles.loginDetailsDesc}>
            Please choose how would you like to login
          </Text>
        </View>
        <View style={{gap: 20, marginTop: SIZES.margin}}>
          <Button
            label="Continue with phone number"
            onPress={() => navigate.navigate(ROUTE.AUTHMODAL)}
            Icon={() => (
              <FontAwesomeIcon icon={faMobile} size={20} color="white" />
            )}
          />
          <Button
            label="Continue with Apple"
            onPress={() => console.log('first')}
            variante={BUTTON_VARIANTE.SECONDARY}
            Icon={() => (
              <FontAwesomeIcon icon={faApple} size={20} color="white" />
            )}
          />
          <Button
            variante={BUTTON_VARIANTE.SECONDARY}
            label="Continue with Google"
            onPress={() => console.log('first')}
            Icon={() => (
              <FontAwesomeIcon icon={faGoogle} size={20} color="white" />
            )}
          />
          <Button
            variante={BUTTON_VARIANTE.SECONDARY}
            label="Continue with Facebook"
            onPress={() => console.log('first')}
            Icon={() => (
              <FontAwesomeIcon icon={faFacebook} size={20} color="white" />
            )}
          />
          <Text style={styles.havaAccountText}>Don´t have an account</Text>
          <Button
            label="Create an account"
            onPress={() => console.log('first')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.gray900,
  },
  screenTrain: {
    width: '100%',
    height: 250,
  },
  loginDetails: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  loginDetailsHeading: {
    ...FONTS.h2,
    color: COLORS.gray50,
  },
  loginDetailsDesc: {
    ...FONTS.ps3,
    color: COLORS.gray50,
  },
  havaAccountText: {
    ...FONTS.l3,
    color: COLORS.gray400,
    textAlign: 'center',
  },
});
