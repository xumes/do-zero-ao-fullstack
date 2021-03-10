const router = require('express').Router();

const jwt = require('jsonwebtoken')

const secret_base64 = process.env.JWT_SECRET
const secret = Buffer.from(secret_base64, 'base64')

const { update } = require('../models/Portfolio');
const Portfolio = require('../models/Portfolio');

// Create
router.post('/', async (req, res) => {
    const portfolio = new Portfolio({
        title: req.body.title,
        description: req.body.description,
        longDescription: req.body.longDescription,
        image: req.body.image,
        technologies: req.body.technologies
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
});

// Read
router.get('/', async (req, res) => {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        return res.sendStatus(401)
    }
    console.log("AuthHeader", authHeader)

    const token = authHeader.split(' ')[1]

    const user = jwt.verify(token, secret)
    console.log(user)

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

router.get('/:slug', async (req, res) => {
    try{
        const portfolio = await Portfolio.findOne({
            slug: req.params.slug
        })

        res.json({
            success: true,
            data: portfolio
        })
    }catch(err){
        res.json({
            success: false,
            message: err
        })
    }
});

//Upate
router.patch('/:slug', async (req, res) => {
    try{
        const updatedPortfolio = await Portfolio.updateOne({
            slug: req.params.slug
        },
        {
            $set: {
                title: req.body.title,
                description: req.body.description,
                longDescription: req.body.longDescription,
                image: req.body.image,
                technologies: req.body.technologies
            }
        })

        res.json({
            success: true,
            updated: updatedPortfolio.nModified
        })
    } catch(err){
        res.json({
            success: false,
            message: err
        })
    }
})

//Delete
router.delete('/:slug', async (req, res) => {
    try{
        const deletedPortfolio = await Portfolio.deleteOne({
            slug: req.params.slug
        });

        res.json({
            success: true,
            deleted: deletedPortfolio.deletedCount
        })
    } catch(err) {
        res.json({
            success: false,
            message: err
        })
    }
})


module.exports = router
