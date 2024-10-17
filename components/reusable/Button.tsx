import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants';
import {buttonProps, buttonType} from '../../types/types/button.type';
import {buttonVariante} from '../../utils/button';
import {BUTTON_VARIANTE} from '../../types/enums/button';

const Button: FC<buttonProps> = ({
  label,
  onPress,
  buttonStyle,
  Icon,
  variante = BUTTON_VARIANTE.PRIMARY,
}) => {
  return (
    <Pressable
      style={[styles.button, buttonVariante(variante), buttonStyle]}
      onPress={onPress}>
      {Icon && <Icon />}
      <Text style={[styles.buttonText, !Icon && {textAlign: 'center'}]}>
        {label}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding,
  },
  buttonText: {
    ...FONTS.l2,
    color: COLORS.gray100,
    marginLeft: 10,
  },
});
