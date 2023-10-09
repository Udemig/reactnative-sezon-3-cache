import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';



const CustomButton = ({buttonTitle, onPress, buttonType}) => {
  const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: buttonType.backgroundColor,
      paddingHorizontal: buttonType.paddingHorizontal,
      paddingVertical: buttonType.paddingVertical,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: buttonType.borderRadius,
    },
    buttonTitle: {
      color: buttonType.color,
      fontSize: buttonType.fontSize,
      fontWeight: buttonType.fontWeight,
    },
  });

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonTitle}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
