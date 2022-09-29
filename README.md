# React Native Apps with Facebook and Google Login

We’re going to build an app that users can log into with their Facebook or Google account. Actually, we’re going to build two things:

In this tutorial I will build the following:

- `server` with Node.js
  It’s going to handle user authentication via Facebook and Google OAuth and redirect the user back to the mobile app using a special URL that will look like `OAuthLogin://login?user=...`

- `client` with React Native
  It’s going to show login buttons and once clicked send the user to the backend to have them log in with their Facebook or Google accounts.

## Reference

- [Logging Into React Native Apps with Facebook or Google](https://rationalappdev.com/logging-into-react-native-apps-with-facebook-or-google/)
