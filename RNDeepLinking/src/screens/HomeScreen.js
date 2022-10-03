import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
} from 'react-native';

import Separator from '../components/Separator';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        setData(res);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const renderList = ({item}) => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('Details', {personDetailsId: item.id})
        }
        style={styles.listitem}>
        <Text style={styles.text}>{item.name}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator color="blue" size="large" />
      ) : (
        <>
          <FlatList
            data={data}
            contentContainerStyle={styles.flatlistContainer}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={Separator}
            renderItem={renderList}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlistContainer: {
    paddingVertical: 20,
  },
  listitem: {
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 24,
    color: '#000',
  },
});

export default HomeScreen;
