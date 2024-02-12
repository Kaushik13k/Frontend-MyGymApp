// App.tsx
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LandingPage from './src/screens/LandingScreen/LandingPage';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LandingPage />
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
