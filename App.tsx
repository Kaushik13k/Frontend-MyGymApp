// App.tsx
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// import LandingPage from './src/screens/LandingScreen/LandingPage';
import LoginScreen from './src/screens/ActionScreen/LoginScreen';
// import SignupScreen from './src/screens/ActionScreen/SignupScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <LandingPage /> */}
      <LoginScreen />
      {/* <SignupScreen /> */}
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
