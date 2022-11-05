import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {linking} from '../linking';

import Home from '../screens/Home';
import Settings from '../screens/Settings';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <NavigationContainer linking={linking}>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
