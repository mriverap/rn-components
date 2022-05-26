import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Animation101Screen from '../screens/Animation101Screen';
import Animation102Screen from '../screens/Animation102Screen';

const Stack = createStackNavigator();

import React from 'react';

const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Animation101" component={Animation101Screen} />
      <Stack.Screen name="Animation102" component={Animation102Screen} />
    </Stack.Navigator>
  );
};

export default Navigator;
