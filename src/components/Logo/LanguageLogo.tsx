import {View, Text} from 'react-native';
import React from 'react';
import styles from './LanguageLogoStyle';

const LanguageLogo = () => {
  return (
    <View style={styles.languageContainer}>
      <View style={styles.languageBorder}>
        <Text style={styles.languageText}>EN</Text>
      </View>
    </View>
  );
};

export default LanguageLogo;
