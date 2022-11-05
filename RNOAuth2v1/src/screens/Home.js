import {View, Text} from 'react-native';
import React from 'react';

const Home = ({route}) => {
  const params = route.params || {};
  const {homeId} = params;
  return (
    <View>
      <Text>Home</Text>
      <Text>{homeId ? homeId : 'not exist'}</Text>
    </View>
  );
};

export default Home;
