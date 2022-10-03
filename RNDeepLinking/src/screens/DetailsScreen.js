import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

const DetailsScreen = ({route}) => {
  const params = route.params || {};
  const {personDetailsId, personId} = params;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (personId) {
      fetch(`https://jsonplaceholder.typicode.com/users/${personId}`)
        .then(res => res.json())
        .then(res => {
          const fetchedDetails = [];

          Object.keys(res).forEach(key => {
            fetchedDetails.push({key, value: `${res[key]}`});
          });
          setData(fetchedDetails);
          setIsLoading(false);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      fetch(`https://jsonplaceholder.typicode.com/users/${personDetailsId}`)
        .then(res => res.json())
        .then(res => {
          const fetchedDetails = [];

          Object.keys(res).forEach(key => {
            fetchedDetails.push({key, value: `${res[key]}`});
          });

          setData(fetchedDetails);
          setIsLoading(false);
        })
        .catch(error => {
          console.log(error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator color="blue" size="large" />
      ) : (
        <View style={styles.view}>
          {data.map(person => (
            <Text
              style={styles.text}
              key={person.key}>{`${person.key}: ${person.value}`}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  test: {
    fontSize: 24,
    paddingBottom: 2,
  },
});

export default DetailsScreen;
