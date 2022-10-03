# React Native: Deep Linking

## Rebuild App after Configuration

```
$ npx react-native run-android
$ npx react-native run-ios
```

## Test DeepLinking

```
$ npx uri-scheme open peoplesapp://home --android
$ npx uri-scheme open peoplesapp://details/1 --android
```

```
$ npx uri-scheme open peoplesapp://home --ios
$ npx uri-scheme open peoplesapp://details/1 --ios
```
