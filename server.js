const express = require("express");
const dotenv = require('dotenv');

const path = require("path");
const app = express();

dotenv.config();

app.use(express.static(path.join('./', "build")));

// This route serves the React app
app.get('/', (req, res) => res.sendFile(path.resolve('./', "build", "index.html")));

app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`));