export const linking = {
  prefixes: ['rnoauth2v1://'],
  config: {
    initialRouteName: 'LogIn',
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
