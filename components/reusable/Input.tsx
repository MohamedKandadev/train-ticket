import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {FC, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faEye,
  faEyeSlash,
  faMobile,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {COLORS, FONTS, SIZES} from '../../constants';
import {InputProps} from '../../types/interfaces/pages';

const Input: FC<InputProps> = ({
  label,
  placeholder,
  value,
  type,
  IconLeft,
  IconRight,
}) => {
  const [isSecure, setIsSecure] = useState<boolean>(type === 'password');

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.inputFieldContainer}>
        {IconLeft && <IconLeft />}
        <TextInput
          style={styles.inputField}
          placeholder={placeholder}
          placeholderTextColor={'white'}
          secureTextEntry={isSecure}
        />
        {type === 'password' ? (
          <Pressable onPress={() => setIsSecure(!isSecure)}>
            {!isSecure ? (
              <FontAwesomeIcon icon={faEyeSlash} size={20} color="white" />
            ) : (
              <FontAwesomeIcon icon={faEye} size={20} color="white" />
            )}
          </Pressable>
        ) : (
          IconRight && <IconRight />
        )}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: SIZES.margin,
  },
  inputLabel: {
    ...FONTS.l4,
    color: 'white',
    marginBottom: 10,
  },
  inputFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.gray700,
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.font,
    gap: 10,
  },
  inputField: {
    height: 55,
    flex: 1,
    maxWidth: '100%',
    width: '100%',
    ...FONTS.l3,
    color: 'white',
  },
});
