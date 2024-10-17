import {BUTTON_VARIANTE} from '../enums/button';

export type buttonType = {
  label: string;
  onPress: () => void;
};

export interface buttonProps extends buttonType {
  buttonStyle?: any;
  Icon?: any;
  variante?: BUTTON_VARIANTE;
}
