var connect = require('connect');
var serveStatic = require('serve-static');
var dotenv = require('dotenv');
var fs = require('fs');

dotenv.config();

app = connect()
    .use(serveStatic(__dirname + '/build'))
    .use((req, res) => {
        res.setHeader('Content-Type', 'text/html');
        res.end(fs.readFileSync(__dirname + '/build/index.html'));
    })
    .listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));


