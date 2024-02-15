import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ActionButtonStyle';

interface Props {
  buttonText: string;
}

const ActionButton: React.FC<Props> = ({buttonText}) => {
  return (
    <TouchableOpacity style={styles.buttonAuth}>
      <Text style={styles.buttonAuthText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
