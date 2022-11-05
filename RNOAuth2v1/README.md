# RNOAuth2 with Google and Facebook Login

## Before Luanch Android

Make sure emulator is running

```
$ adb devices
```

## Full Clean of a React Native Project

```sh
$ watchman watch-del-all &&
$ rm -rf yarn.lock package-lock.json node_modules &&
$ rm -rf android/app/build &&
$ rm -rf ios/Pods && rm ios/Podfile.lock &&
$ sudo rm -rf ~/Library/Developer/Xcode/DerivedData
$ npm install --legacy-peer-deps && npx pod-install
$ cd android && ./gradlew clean && cd ..
$ npm start -- --reset-cache
$ npx react-native start -- --reset-cache
$ npx react-native run-ios -- --reset-cache
$ npx react-native run-android -- --reset-cache
```

## Launch and Test Mobile Client

```sh
$ cd RNOAuth2v1
$ npm install
$ npx react-native start
$ # Test with android simulator
$ npx uri-scheme open rnoauth2v1://home/1 --android
$ npx uri-scheme open rnoauth2v1://settings/1 --android
$ # Test with ios simulator
$ npx uri-scheme open rnoauth2v1://home/1 --ios
$ npx uri-scheme open rnoauth2v1://settings/1 --ios
```

## Troubleshoot

### Error: Failed to initialize react-native-reanimated library

> Error: Failed to initialize react-native-reanimated library, make sure you followed installation steps here: https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/
>
> 1. Make sure reanimated's babel plugin is installed in your babel.config.js (you should have 'react-native-reanimated/plugin' listed there - also see the above link for details)
> 2. Make sure you reset build cache after updating the config, run: yarn start --reset-cache, js engine: hermes
>    ERROR Invariant Violation: Failed to call into JavaScript module method AppRegistry.runApplication(). Module has not been registered as callable. Registered callable JavaScript modules (n = 10): Systrace, JSTimers, HeapCapture, SamplingProfiler, RCTLog, RCTDeviceEventEmitter, RCTNativeAppEventEmitter, GlobalPerformanceLogger, JSDevSupportModule, HMRClient.
>    A frequent cause of the error is that the application entry file path is incorrect. This can also happen when the JS bundle is corrupt or there is an early initialization error when loading React Native., js engine: hermes
>    ERROR Invariant Violation: Failed to call into JavaScript module method AppRegistry.runApplication(). Module has not been registered as callable. Registered callable JavaScript modules (n = 10): Systrace, JSTimers, HeapCapture, SamplingProfiler, RCTLog, RCTDeviceEventEmitter, RCTNativeAppEventEmitter, GlobalPerformanceLogger, JSDevSupportModule, HMRClient.
>    A frequent cause of the error is that the application entry file path is incorrect. This can also happen when the JS bundle is corrupt or there is an early initialization error when loading React Native., js engine: hermes

- Add Reanimated's Babel plugin to your babel.config.js:

  ```js
  module.exports = {
      presets: [
        ...
      ],
      plugins: [
        ...
        'react-native-reanimated/plugin',
      ],
    };
  ```

### CLANG_CXX_LANGUAGE_STANDARD has different values

> [!] Can't merge user_target_xcconfig for pod targets: ["RNReanimated", "hermes-engine"]. Singular build setting CLANG_CXX_LANGUAGE_STANDARD has different values.

react-native-reanimated version 3 uses c++17

just run `yarn add react-native-reanimated@last` and select `version 3.0.0-rc.2`

Just set the CXX n the podspec.

`node_modules/react-native-reanimated/RNReanimated.podspec`

Change to:

`"CLANG_CXX_LANGUAGE_STANDARD" => "c++17",`

### Tried to synchronously call anonymous function {create} from a different thread

```js
const AppStack = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation={false} // <- add this line
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
```

```bash
$ npx react-native start --reset-cache
```
