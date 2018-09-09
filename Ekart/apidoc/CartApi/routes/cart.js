const appConfig = require('./../config/appConfig')
const cartController = require('./../controller/cartController')

let cartRouter = (app) =>{

    let baseUrl = appConfig.apiVersion+'/cart'

    app.post(baseUrl+'/add/:id',cartController.addProductToCart)

    /**
	 * @api {get} /api/v1/cart/add/:id Add Product to cart
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "cartProduct added",
	    "status": 200,
	    "data": [
					{
						 name:String,
                         price:Number,
                         uniqueId:String,
                         quantitiy:Number,
                         createdTime:{type:Date,default:Date.now()},
                         modifiedTime:{type:Date,default:Date.now()},
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "product not found",
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(baseUrl+'/all',cartController.showAllProduct)

    
	/**
	 * @api {get} /api/v1/cart/all Get all cartProducts
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All cartProduct Details Found",
	    "status": 200,
	    "data": [
					{
						 name:String,
                         price:Number,
                         uniqueId:String,
                         quantitiy:Number,
                         createdTime:{type:Date,default:Date.now()},
                         modifiedTime:{type:Date,default:Date.now()},
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "product not found",
	    "status": 500,
	    "data": null
	   }
	 */

    app.put(baseUrl+'/update/:id',cartController.editCartProduct)

      
	/**
	 * @api {get} /api/v1/cart/update/:id Update Product
	 * @apiVersion 0.0.1
	 * @apiGroup update
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "cartProduct Updated",
	    "status": 200,
	    "data": [
					{
						 name:String,
                         price:Number,
                         uniqueId:String,
                         quantitiy:Number,
                         createdTime:{type:Date,default:Date.now()},
                         modifiedTime:{type:Date,default:Date.now()},
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "product not found",
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(baseUrl+'/delete/:id',cartController.removeCartProduct)

    
      
	/**
	 * @api {get} /api/v1/cart/delete/:id Delete Product
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "cartProduct Deleted",
	    "status": 200,
	    "data": [
					{
						 name:String,
                         price:Number,
                         uniqueId:String,
                         quantitiy:Number,
                         createdTime:{type:Date,default:Date.now()},
                         modifiedTime:{type:Date,default:Date.now()},
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "product not found",
	    "status": 500,
	    "data": null
	   }
	 */
    
}


module.exports = cartRouter