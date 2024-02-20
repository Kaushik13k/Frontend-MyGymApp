import {TouchableOpacity, Text, Animated} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './MainScreenButtonStyles';

const MainScreenButton = ({navigation}) => {
  const [buttonOpacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(buttonOpacity, {
      toValue: 1,
      duration: 1000,
      delay: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.buttonContainer, {opacity: buttonOpacity}]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('LoginScreen');
        }}>
        <Text style={styles.buttonText}>Let's get started!</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default MainScreenButton;
