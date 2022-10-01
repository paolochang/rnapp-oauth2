const config = {
  screens: {
    AppStack: {
      screens: {
        Home: {
          path: 'home/:id',
          parse: {
            user: id => `${id}`,
          },
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
      },
    },
  },
};

const linking = {
  prefixes: ['rnoauth2://'],
  config,
};

export default linking;
