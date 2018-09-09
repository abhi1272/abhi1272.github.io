const mongoose = require('mongoose');

const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

let productShema = new Schema({
    name:String,
    desc:String,
    price:Number,
    quantity:Number,
    category:String,
    uniqueId:{type:String,unique:true},
    createdDttm:{type:Date,default:Date.now()},
    ModifiedDttm:{type:Date,default:Date.now()},
    rating:{type:Number,default:0}
})

module.exports = mongoose.model('Product',productShema)


