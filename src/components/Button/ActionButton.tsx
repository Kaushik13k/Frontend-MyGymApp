import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ActionButtonStyle';

interface Props {
  buttonText: string;
}

const ActionButton: React.FC<Props> = ({buttonText, buttonRef, navigation}) => {
  console.log(buttonRef);
  console.log(navigation);
  return (
    <TouchableOpacity
      style={styles.buttonAuth}
      onPress={() => {
        navigation.navigate(buttonRef);
      }}>
      <Text style={styles.buttonAuthText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
