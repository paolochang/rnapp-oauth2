import passport from "passport";
import FacebookStrategy from "passport-facebook";
import GoogleStrategy from "passport-google-oauth20";
import { facebook, google } from "../config";

export const initializePassport = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
};

/**
 * Transform Facebook profile because Facebook and Google
 * profile objects look different and we want to transform them
 * into user objects that have the same set of attributes
 */
const transformGoogleProfile = (profile) => ({
  name: profile.displayName,
  avatar: profile.image.url,
});

const transformFacebookProfile = (profile) => ({
  name: profile.name,
  avatar: profile.picture.data.url,
});

// Register Google Passport strategy
passport.use(
  new GoogleStrategy(google, async (accessToken, refreshToken, profile, done) =>
    done(null, transformGoogleProfile(profile._json))
  )
);

// Register Facebook Passport strategy
passport.use(
  new FacebookStrategy(
    facebook,
    // Gets called when user authorizes access to their profile
    async (accessToken, refreshToken, profile, done) =>
      // Return done callback and pass transformed user object
      done(null, transformFacebookProfile(profile._json))
  )
);

// Serialize user into the sessions
passport.serializeUser((user, done) => done(null, user));

// Deserialize user from the sessions
passport.deserializeUser((user, done) => done(null, user));
