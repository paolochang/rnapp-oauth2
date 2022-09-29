import express from "express";
import passport from "passport";

const router = express.Router();

// Set up Facebook auth routes
router.get("/auth/facebook", passport.authenticate("facebook"));

router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/auth/facebook" }),
  // Redirect user back to the mobile app using Linking with a custom protocol OAuthLogin
  (req, res) =>
    res.redirect("RNOAuth2://login?user=" + JSON.stringify(req.user))
);

// Set up Google auth routes
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth/google" }),
  (req, res) =>
    res.redirect("RNOAuth2://login?user=" + JSON.stringify(req.user))
);

export default router;
