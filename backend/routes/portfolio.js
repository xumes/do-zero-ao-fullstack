const router = require('express').Router();

const jwt = require('jsonwebtoken')

const secret = `-----BEGIN RSA PUBLIC KEY-----
MIIBigKCAYEAnZig4cjMvEO6+IFl0EDS8QJGegtOQxiSpoN1mL4wHWfLVtTpR9LP
MGMSFL0y8DIu4j9xyhpRDmJN5HRvoNBwAlgtLNJQEGSNX2AfnlY5hkahZZXYVfpq
VGnMu/pLPxygtXLtvUGTYHTexV0wuQdZtB6aI8Lr84lzZwMIoo5ZZFsekl2ZTOHN
ZykKBf2jnGFp8VafxMBDkll2XjyB5mphGhG7N+vLmfKcB6t8jembO0RLmqLJYU0x
nzsMyQwRz7fmDDvAe4DU6OHMrifpOGFnmkxmX0mQ2DldVjeSLNe8dScHv9/JcoXk
y7ISpI5YACA41AwgY4+g8Jw5LiIHSfKRQfeLkP2nEHmtH4Kcj+RCsGrDuU3xgZin
y5P9VhjRZIOE3kO50Jip3iOpcnvFhCN09XaP29V+apPDghQX6GxMFY2VyDTTcfD/
T/Al3aVaM97fvM4SfjBdm1Fu0+fPWKiwCTPqFGjIGnkhACL3453IKxvhPaD6lOXn
w04qPtmsMzRDAgMBAAE=
-----END RSA PUBLIC KEY-----`

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
