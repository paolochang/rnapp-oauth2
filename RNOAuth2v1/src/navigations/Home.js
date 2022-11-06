import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Feed from '../screens/Feed';
import Settings from '../screens/Settings';

const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default Home;
