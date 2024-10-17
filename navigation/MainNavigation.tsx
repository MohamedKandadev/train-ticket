import {createStackNavigator} from '@react-navigation/stack';
import ROUTE from '../types/enums/Route';
import OnBoarding from '../screens/OnBoarding';
import Welcome from '../screens/auth/Welcome';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';
import {Pressable, Text, View} from 'react-native';
import {COLORS, SIZES} from '../constants';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBookmark, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import Otp from '../screens/auth/Otp';
import Success from '../screens/auth/Success';

const Stack = createStackNavigator();
const ModalStack = createStackNavigator();

const ModalNavigator = () => {
  const navigation = useNavigation();

  return (
    <ModalStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: COLORS.gray900,
        },
        headerBackTitle: ' ',
        headerTitle: ' ',
        headerBackImage: () => (
          <View style={{paddingLeft: SIZES.padding}}>
            <FontAwesomeIcon icon={faChevronLeft} color="white" size={20} />
          </View>
        ),
        headerRight: () => (
          <View style={{paddingRight: SIZES.padding}}>
            <FontAwesomeIcon icon={faBookmark} color="white" size={20} />
          </View>
        ),
      }}>
      <ModalStack.Screen
        name={ROUTE.SIGNIN}
        component={SignIn}
        options={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: COLORS.gray900,
          },
          headerBackTitle: ' ',
          headerTitle: ' ',
          headerBackImage: () => (
            <View style={{paddingLeft: SIZES.padding}}>
              <FontAwesomeIcon icon={faChevronLeft} color="white" size={20} />
            </View>
          ),
          headerRight: () => (
            <View style={{paddingRight: SIZES.padding}}>
              <FontAwesomeIcon icon={faBookmark} color="white" size={20} />
            </View>
          ),
        }}
      />
      <ModalStack.Screen
        name={ROUTE.SIGNUP}
        component={SignUp}
        options={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: COLORS.gray900,
          },
          headerBackTitle: ' ',
          headerTitle: ' ',
          headerBackImage: () => (
            <View style={{paddingLeft: SIZES.padding}}>
              <FontAwesomeIcon icon={faChevronLeft} color="white" size={20} />
            </View>
          ),
          headerRight: () => (
            <View style={{paddingRight: SIZES.padding}}>
              <FontAwesomeIcon icon={faBookmark} color="white" size={20} />
            </View>
          ),
        }}
      />
    </ModalStack.Navigator>
  );
};

const MainNavigation = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName={ROUTE.ONBOARDING}>
      {/* <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name={ROUTE.SIGNIN} component={SignIn} />
        <Stack.Screen name={ROUTE.SIGNUP} component={SignUp} />
      </Stack.Group> */}
      <Stack.Screen
        name={ROUTE.AUTHMODAL}
        component={ModalNavigator}
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
      />
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTE.WELCOME} component={Welcome} />
        <Stack.Screen name={ROUTE.ONBOARDING} component={OnBoarding} />
        <Stack.Screen name={ROUTE.SUCCESS} component={Success} />
      </Stack.Group>
      <Stack.Screen
        name={ROUTE.OTP}
        component={Otp}
        options={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: COLORS.gray900,
          },
          headerBackTitle: ' ',
          headerTitle: ' ',
          headerBackImage: () => (
            <Pressable
              onPress={() => navigation.navigate(ROUTE.WELCOME)}
              style={{paddingLeft: SIZES.padding}}>
              <FontAwesomeIcon icon={faChevronLeft} color="white" size={20} />
            </Pressable>
          ),
          headerRight: () => (
            <View style={{paddingRight: SIZES.padding}}>
              <FontAwesomeIcon icon={faBookmark} color="white" size={20} />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
