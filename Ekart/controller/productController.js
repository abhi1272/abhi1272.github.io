const express = require('express')
const mongoose = require('mongoose')

const ProductModel = require('./../models/product')
const check = require('./../libs/check')
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib')

// Get all products 

let getAllProduct = (req, res) => {

    ProductModel.find()
        .lean()
        .exec((err, result) => {
            if (err) {
                logger.captureError('error occured','productController : getAllProduct',10)
                res.send(err)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true,'product not found',500,null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false,'All Product Details Found',200,result)
                res.send(apiResponse)
            }
        })
}

// get single product view 

let getSingleProduct = (req, res) => {

    ProductModel.find({ 'uniqueId': req.params.id })
        .exec((err, result) => {
            if (err) {
                logger.captureError('error occured','productController : getSingleProduct',10)
                res.send(err)
            } else if (check.isEmpty(result)) {
                logger.captureInfo('product not found','productController : getSingleProduct',5)
                let apiResponse = response.generate(true,'product not found',500,null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false,'product  found',200,result)
                res.send(apiResponse)
            }
        })
}


// Create product 

let createProduct = (req, res) => {

    let today = Date.now()
    console.log(req.body.name)

    let product = new ProductModel({

        name: req.body.name,
        desc: req.body.desc,
        price: req.body.price,
        quantity: req.body.quantity,
        category: req.body.category,
        uniqueId: req.body.uniqueId,
        createdDttm: today,
        ModifiedDttm: today,
        rating: req.body.rating
    })

    product.save((err, result) => {
        if (err) {
            logger.captureError('error occured','productController : createProduct',10)
            res.send(err)
        }
        else {
            let apiResponse = response.generate(false,'product added',200,result)
            res.send(apiResponse)
        }
    })
}


let editProduct = (req, res) => {

     let options = req.body
     console.log(req.body)
     ProductModel.update({'uniqueId':req.params.id},options,(err,result)=>{
         if(err){
            logger.captureError('error occured','productController : editProduct',10)
             res.send(err)
         }else if(check.isEmpty(result)){
            let apiResponse = response.generate(true,'product not found',500,null)
            res.send(apiResponse)
         }else{
            let apiResponse = response.generate(false,'product updated successfully',200,result)
            res.send(apiResponse)
         }
     })   

}

let deleteProduct = (req,res) =>{

    console.log(req.params.id)
    ProductModel.deleteOne({'uniqueId':req.params.id},(err,result)=>{
        if(err){
            logger.captureError('error occured','productController : deleteProduct',10)
            res.send(err)
        }else if(check.isEmpty(result)){
            let apiResponse = response.generate(true,'product not found',500,null)
            res.send(apiResponse)
        }else{
            let apiResponse = response.generate(false,`product ${req.params.id} deleted found`,500,null)
            res.send(apiResponse)
        }
    })
    
}


module.exports = {
    getSingleProduct: getSingleProduct,
    getAllProduct: getAllProduct,
    createProduct: createProduct,
    editProduct: editProduct,
    deleteProduct:deleteProduct
}