import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {linking} from '../linking';
import Home from './Home';
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';

const Root = createNativeStackNavigator();

const AppNav = () => {
  return (
    <NavigationContainer linking={linking}>
      <Root.Navigator screenOptions={{headerShown: false}}>
        <Root.Screen name="LogIn" component={LogIn} />
        <Root.Screen name="SignUp" component={SignUp} />
        <Root.Screen name="Home" component={Home} />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
