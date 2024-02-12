import {View, Text} from 'react-native';
import React from 'react';
import styles from './LogoStyle';

const LogoStyle = () => {
  return (
    <View style={styles.headerLogo}>
      <View style={styles.logoIcon} />
      <View>
        <Text style={styles.logoText}>MY</Text>
        <Text style={styles.logoText}>WORKOUT</Text>
      </View>
    </View>
  );
};

export default LogoStyle;
