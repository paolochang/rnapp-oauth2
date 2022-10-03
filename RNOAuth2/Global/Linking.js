const config = {
  screens: {
    AppStack: {
      screens: {
        Home: {
          path: 'home/:id',
        },
        Settings: {
          path: 'settings',
        },
      },
    },
    AuthStack: {
      screens: {
        LogIn: {
          path: 'login',
        },
        SignUp: {
          path: 'signup',
        },
      },
    },
  },
};

const linking = {
  prefixes: ['rnoauth2://'],
  config,
};

export default linking;
