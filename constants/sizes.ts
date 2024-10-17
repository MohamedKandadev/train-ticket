import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const sizes = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  margin: 20,

  // font sizes
  t1: 52,
  t2: 44,
  t3: 36,

  h1: 32,
  h2: 28,
  h3: 24,
  h4: 20,

  l1: 18,
  l2: 16,
  l3: 14,
  l4: 12,

  ps1: 18,
  ps2: 16,
  ps3: 14,
  ps4: 12,

  pr1: 18,
  pr2: 16,
  pr3: 14,
  pr4: 12,

  // app dimensions
  width,
  height,
};

export default sizes;
