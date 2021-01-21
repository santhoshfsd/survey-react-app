// keys.js 

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod')
} else {
    console.log("dev config loaded");
    module.exports = require('./dev')
}