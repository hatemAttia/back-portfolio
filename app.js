
const express = require("express");
const app = express();
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var adminRoutes = require("./routes/mail");
app.use('/mail', adminRoutes);


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});