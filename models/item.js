const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    title :{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        default: 'Indonesia'
    },
    City: {
        type: String,
        required: true
    },
    isPopular: {
        type: Boolean
    },
    description: {
        type: String,
        required: true
    },
    imageId: [{
        type: ObjectId,
        ref: 'Image'
    }],
    featureId: [{
        type: ObjectId,
        ref: 'Feature'
    }],
    activityId: [{
        type: ObjectId,
        ref: 'Feature'
    }]
})

module.exports = mongoose.model('Item', itemSchema)