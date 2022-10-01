import {SafeAreaView, Text} from 'react-native';
import React from 'react';

const HomeScreen = ({route}) => {
  const {id} = route.params;

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Text>{id}</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
