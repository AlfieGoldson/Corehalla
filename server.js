const express = require('express');

const PORT = process.env.PORT || 80;

const app = express();

app.use(express.static(__dirname + '/dist/'));

app.get(/.*/, (req, res) => {
    res.sendfile(__dirname + '/dist/index.html');
})

app.listen(PORT, () => {
    console.log(`Server Listening on Port ${PORT}`);
})

// Discord Bot
// require('./src/bots/discord-bot');
// require('./src/bots/discord-manager');
// require('./src/bots/queue-crawler');

// Keep Awake
var http = require('http');
setInterval(function() {
    http.get('http://corehalla2.herokuapp.com');
}, 300000);