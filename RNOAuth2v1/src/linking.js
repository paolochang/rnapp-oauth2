export const linking = {
  prefixes: ['rnoauth2v1://'],
  config: {
    initialRouteName: 'SignUp',
    screens: {
      LogIn: {
        path: 'login',
      },
      SignUp: {
        path: 'signup',
      },
      Home: {
        path: '',
        screens: {
          Feed: {
            path: 'feed',
          },
          Settings: {
            path: 'settings',
          },
        },
      },
    },
  },
};
