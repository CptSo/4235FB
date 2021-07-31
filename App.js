import React from 'react'

import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import index from './screens/RestaurantView/index';
import RestaurantView from './screens/RestaurantView';
import Createuser from './screens/Createuser';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase';

const Stack = createStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Index" component={index} />
        <Stack.Screen name="Create Reservation" component={Createuser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const viewHotel = () => {
  return (
    <ScrollView style={StyleSheet.container}>
      <HotelView />
    </ScrollView>
  )
}

export default App