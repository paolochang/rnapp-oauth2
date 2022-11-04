import React, {useCallback} from 'react';
import {
  Alert,
  Dimensions,
  Linking,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const googleUrl = 'http://localhost:5000/auth/google';
const facebookUrl = 'http://localhost:5000/auth/facebook';

const LoginScreen = () => {
  const connectGoogle = useCallback(async () => {
    console.log(`[${Platform.OS}] LoginScreen / connectGoogle`);
    const supported = await Linking.canOpenURL(googleUrl);
    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(googleUrl);
    } else {
      Alert.alert(`Don't know how to open this URL: ${googleUrl}`);
    }
    // window.open('http://localhost:5000/auth/facebook', '_self');
  }, []);

  const connectFacebook = useCallback(async () => {
    console.log(`[${Platform.OS}] LoginScreen / connectFacebook`);
    const supported = await Linking.canOpenURL(facebookUrl);
    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(facebookUrl);
    } else {
      Alert.alert(`Don't know how to open this URL: ${facebookUrl}`);
    }
    // window.open('http://localhost:5000/auth/facebook', '_self');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>LoginScreen</Text>
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

export default LoginScreen;
