const express = require('express');
require('./services/passport')

// const authRoutes = require('./routes/auth.routes')
// represent running express application
// listen for incoming request

const app = express();

require('./routes/auth.routes')(app);

app.get('/', (req, res) => {
    res.send({ bye: 'buddy' })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("App Started")
})
