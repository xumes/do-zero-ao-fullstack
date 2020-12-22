const router = require('express').Router();

router.get('/', (req, res) => {
    // acess db
    const data = [ {
        id: 1,
        name: 'Another awesome project !!!',
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

module.exports = router
