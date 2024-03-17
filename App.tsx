import 'core-js/stable/atob';
import {jwtDecode} from 'jwt-decode';
import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LandingPage from './src/screens/LandingScreen/LandingPage';
import LoginScreen from './src/screens/ActionScreen/LoginScreen';
import SignupScreen from './src/screens/ActionScreen/SignupScreen';
import {ScreenEnum} from './src/utils/enums/ScreenEnum';
import BottomTabNavigator from './src/screens/BottomTabNavigator';

export type RootStackParamList = {
  [ScreenEnum.LANDING]: undefined;
  [ScreenEnum.LOGIN]: undefined;
  [ScreenEnum.SIGNUP]: undefined;
  [ScreenEnum.HOME]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          const ObjectData = JSON.parse(userData);
          const decoded = jwtDecode(ObjectData.token);
          if (decoded.exp && new Date(decoded.exp * 1000) > new Date()) {
            // * 1000 to convert to millisecond from 1970-01-01
            setIsLoggedIn(true);
          } else {
            await AsyncStorage.removeItem('userData');
            Alert.alert(
              'Logged Out',
              'You have been logged out as the token is expired.',
            );
          }
        }

        if (userData) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={isLoggedIn ? ScreenEnum.HOME : ScreenEnum.LANDING}>
          <Stack.Screen
            name={ScreenEnum.LANDING}
            component={LandingPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ScreenEnum.LOGIN}
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ScreenEnum.SIGNUP}
            component={SignupScreen}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name={ScreenEnum.HOME}
            component={HomeScreen}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name={ScreenEnum.HOME}
            component={BottomTabNavigator}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
