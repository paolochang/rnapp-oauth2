import {View, Text} from 'react-native';
import React from 'react';

const Settings = ({route}) => {
  const params = route.params || {};
  const {settingsId} = params;
  return (
    <View>
      <Text>Settings</Text>
      <Text>{settingsId ? settingsId : 'not exist'}</Text>
    </View>
  );
};

export default Settings;
