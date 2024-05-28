var connect = require('connect');
var serveStatic = require('serve-static');
var dotenv = require('dotenv');

dotenv.config();

connect()
    .use(serveStatic(__dirname + '/build'))
    .listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));