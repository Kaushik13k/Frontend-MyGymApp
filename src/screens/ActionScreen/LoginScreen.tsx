import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import ActionButton from '../../components/Button/ActionButton';
import styles from './CommonActionScreenStyles';
import Logo from '../../components/Logo/Logo';

const {width, height} = Dimensions.get('window');

const LoginScreen = () => {
  const [loginFormTranslateY] = useState(new Animated.Value(height));
  const [borderBoxTranslateY] = useState(new Animated.Value(0));
  const [rememberMe, setRememberMe] = useState(false);
  const [loginDisabled, setLoginDisabled] = useState(false);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(loginFormTranslateY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(borderBoxTranslateY, {
        toValue: -height * 0.25,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
    setLoginDisabled(!rememberMe);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[{transform: [{translateY: borderBoxTranslateY}]}]}>
        <Logo size="Medium" />
      </Animated.View>
      <Animated.View
        style={[
          styles.content,
          {transform: [{translateY: loginFormTranslateY}]},
        ]}>
        <View style={styles.buttonsContainer}>
          <ActionButton buttonText="Login" />
          <ActionButton buttonText="Signup" />
        </View>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Username" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={[styles.checkbox, rememberMe && styles.checked]}
              onPress={toggleRememberMe}
            />
            <Text style={styles.checkboxLabel}>
              Remember Me <Text style={styles.asterisk}>*</Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.button, !rememberMe && styles.disabledButton]}
          disabled={!rememberMe}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default LoginScreen;