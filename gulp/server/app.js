var path = require("path");
const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '../../../dist/fragments/index.html'));
});

app.use('/js', express.static(__dirname + '../../../dist/js/'));
app.use('/fragments', express.static(__dirname + '../../../dist/fragments/'));
app.use('/less', express.static(__dirname + '../../../dist/less/'));

app.listen(3000, () => console.log('app listening on port 3000!'));