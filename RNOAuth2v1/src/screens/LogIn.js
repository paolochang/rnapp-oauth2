import React, {useCallback} from 'react';
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const LogIn = () => {
  const connectGoogle = useCallback(async () => {
    console.log(`[${Platform.OS}] LogIn / connectGoogle`);
  }, []);

  const connectFacebook = useCallback(async () => {
    console.log(`[${Platform.OS}] LogIn / connectFacebook`);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>LogIn</Text>
      <TouchableOpacity style={styles.button} onPress={connectGoogle}>
        <Text style={styles.text}>Connect with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={connectFacebook}>
        <Text style={styles.text}>Connect with Facebook</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: windowWidth / 2,
    marginVertical: 5,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#3f50b5',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: '#ffffff',
  },
});

export default LogIn;
