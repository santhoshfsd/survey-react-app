const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')

// represent running express application
// listen for incoming request
const app = express();

// generic register provider
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        // console.log('access -', accessToken)
        // console.log('refresh -', refreshToken)
        // console.log('profile -', profile)
    })
);

app.get('/', (req, res) => {
    res.send({ bye: 'buddy' })
})


app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

app.get(
    '/auth/google/callback',
    passport.authenticate('google')
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("App Started")
})
