import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScreenEnum} from '../../utils/enums/ScreenEnum';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      // Remove user data from AsyncStorage
      await AsyncStorage.removeItem('userData');
      // Navigate back to the login screen
      navigation.navigate(ScreenEnum.LOGIN);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
