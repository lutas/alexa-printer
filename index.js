
const express = require('express');
const bodyParser = require('body-parser');

const config = {
    serverPort: 80
};

let app = express();
app.use(bodyParser.json());

app.post('/', function(req, res) {

    const data = express.json();
    
    const text = data.text;
    console.log('Printing', text);

    res.header('Content-Type', 'application/json');
    res.status(200).send('Printing');
});

app.listen(config.serverPort, function() {
    console.log('Started application on port', config.serverPort);
});