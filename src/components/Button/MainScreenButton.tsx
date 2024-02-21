import {TouchableOpacity, Text, Animated} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './MainScreenButtonStyles';
import {useNavigation} from '@react-navigation/native';

interface MainScreenButtonProps {
  navigationPage: string;
}

const MainScreenButton = ({navigationPage}: MainScreenButtonProps) => {
  const navigation = useNavigation();

  const [buttonOpacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(buttonOpacity, {
      toValue: 1,
      duration: 1000,
      delay: 1000,
      useNativeDriver: true,
    }).start();
  }, [buttonOpacity]);

  return (
    <Animated.View style={[styles.buttonContainer, {opacity: buttonOpacity}]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate(navigationPage as never);
        }}>
        <Text style={styles.buttonText}>Let's get started!</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default MainScreenButton;
