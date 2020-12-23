const router = require('express').Router();
const Portfolio = require('../models/Portfolio');

router.get('/', async (req, res) => {
    try{
        const portfolio = await Portfolio.find()

        res.json({
            success: true,
            data: portfolio
        })
    }catch(err){
        res.json({
            success:false,
            message: err
        })
    }
});

router.post('/', async (req, res) => {
    const portfolio = new Portfolio({
        title: req.body.title,
        description: req.body.description
    });

    try{
        const savedPortfolio = await portfolio.save()
        res.json({
            success: true,
            data: savedPortfolio
        })
    }catch(err){
        res.json({
            success: false,
            message: err
        })
    }
})

module.exports = router
