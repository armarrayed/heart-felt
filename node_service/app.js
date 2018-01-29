var express = require('express');
var app = express(); 
var config = require('./config');
/**
 * The following variables are routs for the service methods.
 */
// var report = require('./routes/report.route');
// var levelRoute = require('./routes/levels.route');
// var contactsRoute = require('./routes/contacts.route');
// var generateCsv = require('./routes/excel-create.route');
// app.use('/report',report);
// app.use('/levels',levelRoute);
// app.use('/contacts',contactsRoute);
// app.use('/generate-csv',generateCsv)

var catalog = require('./routes/catalog.route');
app.use('/catalog',catalog);

var server = app.listen(config.port, function() {    
        var host = server.address().address
        var port = server.address().port    
        console.log("Example app listening at http://%s:%s", host, port);
    });
/**
 * This method will be called when the server started.
 */
app.get('/', function (req, res) {
    res.sendFile('./index.html', {root: __dirname});
});
