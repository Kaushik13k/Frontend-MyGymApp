import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faUser,
  faDumbbell,
  // faCog,
} from '@fortawesome/free-solid-svg-icons';

import HomeScreen from './HomeScreen/HomeScreen';
import ProfileScreen from './ProfileScreen/ProfileScreen';
import WorkoutScreen from './WorkoutScreen/WorkoutScreen';

const Tab = createBottomTabNavigator();

const iconMap = {
  Home: faHome,
  Profile: faUser,
  Workouts: faDumbbell,
  // Settings: faCog,
};

const iconStyle = {
  highLightColor: '#ffcc02',
  iconColor: 'white',
  backgroundColor: 'black',
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          const iconName = iconMap[route.name];
          return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: iconStyle.highLightColor,
        tabBarStyle: {
          backgroundColor: iconStyle.backgroundColor,
          borderTopWidth: 5,
          borderTopColor: '#ffcc02',
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Workouts" component={WorkoutScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
