define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/product/create",
    "title": "Create Product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Created Successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t name:String,\n                         desc:String,\n                         price:Number,\n                         quantity:Number,\n                         category:String,\n                         uniqueId:{type:String,unique:true},\n                         createdDttm:{type:Date,default:Date.now()},\n                         ModifiedDttm:{type:Date,default:Date.now()},\n                         rating:{type:Number,default:0}\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"some error occured\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/productRoute.js",
    "groupTitle": "create",
    "name": "PostApiV1ProductCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/product/delete/:id",
    "title": "Get all Products",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Successfully Deleted\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t name:String,\n                         desc:String,\n                         price:Number,\n                         quantity:Number,\n                         category:String,\n                         uniqueId:{type:String,unique:true},\n                         createdDttm:{type:Date,default:Date.now()},\n                         ModifiedDttm:{type:Date,default:Date.now()},\n                         rating:{type:Number,default:0}\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"product not found\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/productRoute.js",
    "groupTitle": "delete",
    "name": "PostApiV1ProductDeleteId"
  },
  {
    "type": "get",
    "url": "/api/v1/product/all",
    "title": "Get all Products",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Product Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t name:String,\n                         desc:String,\n                         price:Number,\n                         quantity:Number,\n                         category:String,\n                         uniqueId:{type:String,unique:true},\n                         createdDttm:{type:Date,default:Date.now()},\n                         ModifiedDttm:{type:Date,default:Date.now()},\n                         rating:{type:Number,default:0}\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"product not found\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/productRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductAll"
  },
  {
    "type": "get",
    "url": "/api/v1/product/view/:id",
    "title": "Get all Products",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t name:String,\n                         desc:String,\n                         price:Number,\n                         quantity:Number,\n                         category:String,\n                         uniqueId:{type:String,unique:true},\n                         createdDttm:{type:Date,default:Date.now()},\n                         ModifiedDttm:{type:Date,default:Date.now()},\n                         rating:{type:Number,default:0}\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"product not found\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/productRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductViewId"
  },
  {
    "type": "put",
    "url": "/api/v1/product/edit/:id",
    "title": "Get all Products",
    "version": "0.0.1",
    "group": "update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Successfully Edited\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t name:String,\n                         desc:String,\n                         price:Number,\n                         quantity:Number,\n                         category:String,\n                         uniqueId:{type:String,unique:true},\n                         createdDttm:{type:Date,default:Date.now()},\n                         ModifiedDttm:{type:Date,default:Date.now()},\n                         rating:{type:Number,default:0}\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"product not found\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/productRoute.js",
    "groupTitle": "update",
    "name": "PutApiV1ProductEditId"
  }
] });
