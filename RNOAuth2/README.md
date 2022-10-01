# RNOAuth2 with Google and Facebook Login

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
$ rm -rf ~/Library/Developer/Xcode/DerivedData
$ npm install --legacy-peer-deps && cd ios && pod update && cd ..
$ npm start -- --reset-cache
```

## Troubleshoot

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
