const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Product name must be Provided']
    },
    price:{
        type: Number,
        required: [true, 'Product price must be provided']
    },
    featured:{
        type: Boolean,
        default: false
    },
    rating:{
        type:Number,
        min: 0,
        max: 5
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    company:{
        type: String,
        // enum:['ikea','liddy','caressa','marcos']
        enum:{
        values:['ikea','liddy','caressa','marcos'],
        message: '{VALUE} is not supported'
        }
    },
})

     
module.exports = mongoose.model('Product', productsSchema)


