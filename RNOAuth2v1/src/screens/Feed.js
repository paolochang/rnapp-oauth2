import {View, Text} from 'react-native';
import React from 'react';

const Feed = ({route}) => {
  const params = route.params || {};
  const {feedId} = params;
  return (
    <View>
      <Text>Feed</Text>
      <Text>{feedId ? feedId : 'not exist'}</Text>
    </View>
  );
};

export default Feed;
