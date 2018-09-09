const express = require('express')


const cartProductModel = require('./../models/cartProductModel')
const ProductModel = require('./../models/product')
const logger = require('./../libs/loggerLib')
const check = require('./../libs/check')
const response = require('./../libs/responseLib')


let showAllProduct = (req, res) => {


    cartProductModel.find()
        .exec((err, result) => {

            if (err) {
                logger.captureError('some error occured', 'cartController : showAllProduct', 10)
                let apiResponse = response.generate(true, 'some error occured', 400, err)
                res.send(apiResponse)
            }
                else if (check.isEmpty(result)) {
                    let apiResponse = response.generate(true, 'product not found', 500, null)
                    res.send(apiResponse)
                } else {
                    res.send(result)
                }
        })
    }

let addProductToCart = (req,res) =>{

    ProductModel.find({ 'uniqueId': req.params.id })
        .exec((err,result)=>{

        if (err) {
            logger.captureError('some error occured', 'cartController : addProductToCart', 10)
            let apiResponse = response.generate(true, 'some error occured', 400, err)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            let apiResponse = response.generate(true, 'product not found', 500, null)
            res.send(apiResponse)
        } else {
            console.log(req.body.quantitiy)

            let cartProduct = cartProductModel({
                name: result[0].name,
                price: result[0].price,
                uniqueId: result[0].uniqueId,
                quantitiy: req.body.quantitiy


            })

            cartProduct.save((err, result) => {
                if (err) {
                    logger.captureError('some error occured', 'cartController : addProductToCart', 10)
                    let apiResponse = response.generate(true, 'some error occured', 400, err)
                    res.send(apiResponse)
                } else {
                    let apiResponse = response.generate(true, 'product saved', 200, result)
                    res.send(apiResponse)
                    console.log(result)
                }
            })

        }
    })

}


let editCartProduct  = (req,res) =>{

    let options = req.body
    cartProductModel.update({'uniqueId':req.params.id},options,(err,result)=>{
        if(err){
            logger.captureError('some error occured', 'cartController : addProductToCart', 10)
            let apiResponse = response.generate(true, 'some error occured', 400, err)
            res.send(apiResponse)
        }else if(check.isEmpty(result)){
            let apiResponse = response.generate(true, 'product not found', 500, null)
            res.send(apiResponse)
        }else{
            let apiResponse = response.generate(false, 'product updated', 200, result)
            res.send(apiResponse)
            console.log(result)
        }
        
    })

}

let removeCartProduct = (req,res) =>{

    cartProductModel.remove({'uniqueId':req.params.id},(err,result)=>{
        if(err){
            logger.captureError('some error occured', 'cartController : addProductToCart', 10)
            let apiResponse = response.generate(true, 'some error occured', 400, err)
            res.send(apiResponse)
        }else if(check.isEmpty(result)){
            let apiResponse = response.generate(true, 'product not found', 500, null)
            res.send(apiResponse)
        }else{
            let apiResponse = response.generate(false, 'product removed', 200, result)
            res.send(apiResponse)
            console.log(result)
        }

    })

}



module.exports = {
    addProductToCart: addProductToCart,
    showAllProduct:showAllProduct,
    editCartProduct:editCartProduct,
    removeCartProduct:removeCartProduct
}