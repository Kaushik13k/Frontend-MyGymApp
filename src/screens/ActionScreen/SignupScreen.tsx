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
import ActionButton from '../../components/Button/ActionButton';
import styles from './CommonActionScreenStyles';
import Logo from '../../components/Logo/Logo';
import {useNavigation} from '@react-navigation/native';
import {ScreenEnum} from '../../utils/enums/ScreenEnum';
import {Signup} from '../../services/Signup';
import Toast from 'react-native-toast-message';
import {
  handleEmailChange,
  handlePasswordChange,
  handleUsernameChange,
} from '../../utils/validations';

const {width, height} = Dimensions.get('window');

const SignupScreen = () => {
  const navigation = useNavigation();
  const [loginFormTranslateY] = useState(new Animated.Value(height));
  const [borderBoxTranslateY] = useState(new Animated.Value(0));
  const [rememberMe, setRememberMe] = useState(false);
  const [loginDisabled, setLoginDisabled] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailId, setEmailId] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const onEmailChange = (text: string) => {
    setEmailId(text);
    const isValid = handleEmailChange(text);
    setEmailError(!isValid);
  };

  const onPasswordChange = (text: string) => {
    setPassword(text);
    const isValid = handlePasswordChange(text);
    setPasswordError(!isValid);
  };

  const onUsernameChange = (text: string) => {
    setUsername(text);
    const isValid = handleUsernameChange(text);
    setUsernameError(!isValid);
  };

  console.log('username:', username);
  console.log('password:', password);
  console.log('confirmPassword:', confirmPassword);
  console.log('emailId:', emailId);

  const handleConfirmPasswordChange = (text: string) => {
    setConfirmPassword(text);
    setPasswordsMatch(text === password);
    if (text !== password) {
      Toast.show({
        type: 'error',
        position: 'top',
        topOffset: 100,
        text1: 'Password Error',
        text2: 'Passwords do not match',
      });
    }
  };

  const handleSignup = async () => {
    try {
      console.log('Signup button pressed');
      if (password === confirmPassword) {
        setPasswordsMatch(true);
        const signup = await Signup(username, password, emailId);
        if (signup.username) {
          console.log('Signup successful');
          Alert.alert('Success', `Signup Successful ${username}`);
          navigation.navigate(ScreenEnum.LOGIN);
        }
      } else {
        setPasswordsMatch(false);
        Alert.alert('Error', 'Password and Confirm Password do not match');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
        <Text style={styles.title}>Signup</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, usernameError && styles.error]}
            value={username}
            placeholder="Username"
            onChangeText={onUsernameChange}
          />
          <TextInput
            style={[
              styles.input,
              passwordError && !passwordsMatch && styles.error,
            ]}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={onPasswordChange}
          />
          <TextInput
            style={[styles.input, !passwordsMatch && styles.error]}
            value={confirmPassword}
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={handleConfirmPasswordChange}
          />
          <TextInput
            style={[styles.input, emailError && styles.error]}
            value={emailId}
            placeholder="Email-Id"
            onChangeText={onEmailChange}
          />
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={[styles.checkbox, rememberMe && styles.checked]}
              onPress={toggleRememberMe}
            />
            <Text style={styles.checkboxLabel}>
              I agree to the terms. <Text style={styles.asterisk}>*</Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.button, !rememberMe && styles.disabledButton]}
          disabled={!rememberMe}
          onPress={handleSignup}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
        <Toast />
      </Animated.View>
    </View>
  );
};

export default SignupScreen;
