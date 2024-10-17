import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';

export type RootStackParamList = {
  Onboarding: undefined;
  Welcome: undefined;
};

export type OnboardingScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Onboarding'
>;

export type PageHeadingProps = {
  title: string;
  desc: string;
};

export type InputProps = {
  placeholder: string;
  value: string;
  label: string;
  type?: 'text' | 'password';
  IconLeft?: any;
  IconRight?: any;
};

export type CheckBoxProps = {
  label: string;
  isChecked: boolean;
  setIsChecked: () => void;
};
