import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import {CheckBoxProps} from '../../types/interfaces/pages';
import CheckBoxInput from 'react-native-check-box';
import {COLORS, FONTS, SIZES} from '../../constants';

const CheckBox: FC<CheckBoxProps> = ({label, isChecked, setIsChecked}) => {
  return (
    <Pressable style={styles.container}>
      <CheckBoxInput
        onClick={setIsChecked}
        isChecked={isChecked}
        checkBoxColor={COLORS.gray700}
        checkedCheckBoxColor={COLORS.primary100}
      />
      <Text style={styles.labelText}>{label}</Text>
    </Pressable>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  labelText: {
    ...FONTS.l3,
    color: 'white',
  },
});
