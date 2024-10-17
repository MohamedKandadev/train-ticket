import {ImageSourcePropType} from 'react-native';

export type OnbordingItem = {
  id: number;
  title: string;
  desc: string;
  image: ImageSourcePropType;
  animatedStyles?: any;
};
