const mongoose = require('mongoose');

let Schema  = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

let cartProductSchema = Schema({

    name:String,
    price:Number,
    uniqueId:String,
    quantitiy:Number,
    createdTime:{type:Date,default:Date.now()},
    modifiedTime:{type:Date,default:Date.now()},

})

module.exports = mongoose.model('cartProduct',cartProductSchema)


