import React from 'react';
import {StyleSheet, View} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Separator;
