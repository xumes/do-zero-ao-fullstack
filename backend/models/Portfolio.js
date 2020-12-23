const mongoose = require('mongoose');

const { Schema } = mongoose;

const portfolioSchema = new Schema( {
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
} );

module.exports = mongoose.model('portfolio', portfolioSchema);
