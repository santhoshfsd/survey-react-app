const express = require('express');

// represent running express application
// listen for incoming request
const app = express();

app.get('/', (req, res) => {
    res.send({ bye: 'buddy' })
})


const PORT = process.env.PORT || 5050

app.listen(PORT, () => {
    console.log("App Started")
})
