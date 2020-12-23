const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const api = require('./backend/routes');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        'success': true
    });
});

app.use('/api', api);

const PORT = process.env.PORT;
app.listen(PORT);
