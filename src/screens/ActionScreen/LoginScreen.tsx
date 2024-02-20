import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Dimensions,
  Alert,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

import ActionButton from '../../components/Button/ActionButton';
import styles from './CommonActionScreenStyles';
import Logo from '../../components/Logo/Logo';
import {ScreenEnum} from '../../utils/enums/ScreenEnum';

const {width, height} = Dimensions.get('window');

const LoginScreen = () => {
  const navigation = useNavigation();

  const [loginFormTranslateY] = useState(new Animated.Value(height));
  const [borderBoxTranslateY] = useState(new Animated.Value(0));
  const [rememberMe, setRememberMe] = useState(false);
  const [loginDisabled, setLoginDisabled] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
  const url = '{}/entry_point';
  const headers = {
    'Content-Type': 'application/json',
    'Operation-name': 'Token',
  };
  const data = {
    query: `
    query ($username: String!) { getToken(username: $username) }
    `,
    variables: {
      username: username,
    },
    operation_name: 'Token',
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(url, data, {headers});
      if (response && response.data) {
        const userData = response.data.response.getToken;
        const {token, username} = userData;

        Alert.alert('Login Passed', `Welcome ${username}`);
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error: any) {
      console.error('Error:', error.message);

      // Display a user-friendly error message
      Alert.alert('Login Failed', 'Invalid username or password.');
    }
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
          <ActionButton
            buttonText="Login"
            buttonRef={ScreenEnum.LOGIN}
            navigation={navigation}
          />
          <ActionButton
            buttonText="Signup"
            buttonRef={ScreenEnum.SIGNUP}
            navigation={navigation}
          />
        </View>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={username}
            placeholder="Username"
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
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
          disabled={!rememberMe}
          onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default LoginScreen;
