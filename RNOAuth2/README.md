# RNOAuth2 with Google and Facebook Login

## Before Luanch Android

Make sure emulator is running

```
$ adb devices
```

## Launch and Test Mobile Client

```sh
$ cd RNOAuth2
$ npm install
$ npx react-native start
$ npx uri-scheme open "rnoauth2://settings" --ios
$ npx uri-scheme open "rnoauth2://home/123" --ios
```

## Full Clean of a React Native Project

```bash
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

## Troubleshoot

### Invariant Violation: Failed to call into JavaScript module method AppRegistry.runApplication()

> ERROR Error: Requiring unknown module "undefined". If you are sure the module exists, try restarting Metro. You may also want to run `yarn` or `npm install`., js engine: hermes
> ERROR Invariant Violation: Failed to call into JavaScript module method AppRegistry.runApplication(). Module has not been registered as callable. Registered callable JavaScript modules (n = 10): Systrace, JSTimers, HeapCapture, SamplingProfiler, RCTLog, RCTDeviceEventEmitter, RCTNativeAppEventEmitter, GlobalPerformanceLogger, JSDevSupportModule, HMRClient.
> A frequent cause of the error is that the application entry file path is incorrect. This can also happen when the JS bundle is corrupt or there is an early initialization error when loading React Native., js engine: hermes

1. downgrade `react-native-gesture-handler` from `^2.7.0` to `^2.6.1`
2. clean and rebuild the project

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
