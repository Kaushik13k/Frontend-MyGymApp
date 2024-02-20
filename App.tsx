// App.tsx
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LandingPage from './src/screens/LandingScreen/LandingPage';
import LoginScreen from './src/screens/ActionScreen/LoginScreen';
import SignupScreen from './src/screens/ActionScreen/SignupScreen';

import {ScreenEnum} from './src/utils/enums/ScreenEnum';

export type RootStackParamList = {
  [ScreenEnum.LANDING]: undefined;
  [ScreenEnum.LOGIN]: undefined;
  [ScreenEnum.SIGNUP]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={ScreenEnum.LANDING}>
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
