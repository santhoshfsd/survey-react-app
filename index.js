const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');
const keys = require('./config/keys');

// const authRoutes = require('./routes/auth.routes')
// represent running express application
// listen for incoming request
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth.routes')(app);

app.get('/', (req, res) => {
    res.send({ bye: 'buddy' })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("App Started")
})
