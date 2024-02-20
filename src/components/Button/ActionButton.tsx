import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ActionButtonStyle';

interface Props {
  buttonText: string;
  buttonRef: string;
  navigation: any;
}

const ActionButton: React.FC<Props> = ({buttonText, buttonRef, navigation}) => {
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
