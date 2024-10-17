import {ViewStyle} from 'react-native';
import {BUTTON_VARIANTE} from '../types/enums/button';
import {COLORS} from '../constants';

export const buttonVariante = (variante: BUTTON_VARIANTE): ViewStyle => {
  switch (variante) {
    case BUTTON_VARIANTE.SECONDARY:
      return {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: COLORS.gray500,
      };

    default:
      return {
        backgroundColor: COLORS.primary500,
      };
  }
};
