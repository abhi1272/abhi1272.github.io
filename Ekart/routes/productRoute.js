
const productController = require('./../controller/productController')

const appConfig = require('./../config/appConfig')
const auth = require('./../middleware/auth')

let productRouter = (app) => {

    let baseUrl = appConfig.apiVersion + '/product';

    app.get(baseUrl + '/all',auth.isAuthenticated,productController.getAllProduct)


	/**
	 * @api {get} /api/v1/product/all Get all Products
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Product Details Found",
	    "status": 200,
	    "data": [
					{
						 name:String,
                         desc:String,
                         price:Number,
                         quantity:Number,
                         category:String,
                         uniqueId:{type:String,unique:true},
                         createdDttm:{type:Date,default:Date.now()},
                         ModifiedDttm:{type:Date,default:Date.now()},
                         rating:{type:Number,default:0}
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
     
    app.post(baseUrl + '/create', auth.isAuthinticated, productController.createProduct);

    
	/**
	 * @api {post} /api/v1/product/create Create Product
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Created Successfully",
	    "status": 200,
	    "data": [
					{
						 name:String,
                         desc:String,
                         price:Number,
                         quantity:Number,
                         category:String,
                         uniqueId:{type:String,unique:true},
                         createdDttm:{type:Date,default:Date.now()},
                         ModifiedDttm:{type:Date,default:Date.now()},
                         rating:{type:Number,default:0}
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "some error occured",
	    "status": 500,
	    "data": null
	   }
	 */ 


    app.get(baseUrl + '/view' + '/:id', productController.getSingleProduct)

    
	/**
	 * @api {get} /api/v1/product/view/:id Get all Products
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Found",
	    "status": 200,
	    "data": [
					{
						 name:String,
                         desc:String,
                         price:Number,
                         quantity:Number,
                         category:String,
                         uniqueId:{type:String,unique:true},
                         createdDttm:{type:Date,default:Date.now()},
                         ModifiedDttm:{type:Date,default:Date.now()},
                         rating:{type:Number,default:0}
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

    app.put(baseUrl + '/edit' + '/:id', productController.editProduct)

    
	/**
	 * @api {put} /api/v1/product/edit/:id Get all Products
	 * @apiVersion 0.0.1
	 * @apiGroup update
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Successfully Edited",
	    "status": 200,
	    "data": [
					{
						 name:String,
                         desc:String,
                         price:Number,
                         quantity:Number,
                         category:String,
                         uniqueId:{type:String,unique:true},
                         createdDttm:{type:Date,default:Date.now()},
                         ModifiedDttm:{type:Date,default:Date.now()},
                         rating:{type:Number,default:0}
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

    app.post(baseUrl + '/delete/:id', productController.deleteProduct)

    
	/**
	 * @api {post} /api/v1/product/delete/:id Get all Products
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Successfully Deleted",
	    "status": 200,
	    "data": [
					{
						 name:String,
                         desc:String,
                         price:Number,
                         quantity:Number,
                         category:String,
                         uniqueId:{type:String,unique:true},
                         createdDttm:{type:Date,default:Date.now()},
                         ModifiedDttm:{type:Date,default:Date.now()},
                         rating:{type:Number,default:0}
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

module.exports = productRouter