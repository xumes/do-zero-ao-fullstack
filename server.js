const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        'success': true
    });
});

app.get('/portfolio', (req, res) => {
    // acess db
    const data = [ {
        id: 1,
        name: 'An awesome project',
        createdAt: '2020-12-01'
    },
    {
        id: 2,
        name: 'My second project',
        createdAt: '2020-01-06'
    },
    {
        id: 3,
        name: 'My other project',
        createdAt: '2021-01-25'
    },
];

    res.json({
        success: true,
        data
    });
});

const PORT = 3080;
app.listen(PORT);
