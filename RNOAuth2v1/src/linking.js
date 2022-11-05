export const linking = {
  prefixes: ['rnoauth2v1://'],
  config: {
    initialRouteName: 'Home',
    screens: {
      Home: {
        path: 'home/:homeId',
      },
      Settings: {
        path: 'settings/:settingsId',
      },
    },
  },
};
