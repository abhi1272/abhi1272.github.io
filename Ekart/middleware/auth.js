let logger = require('./../libs/loggerLib')
let response = require('./../libs/responseLib')


let isAuthinticated = (req,res,next) =>{

    if(req.params.authToken || req.query.authToken || req.header('authToken')){
        if(req.params.authToken === 'Admin' || req.query.authToken === 'Admin' || 
        req.header('authTokem') === 'Admin'){
            req.user = {fullName:'Admin',userId:'Admin'}
            next();
        }
        else{
            logger.captureError('Incorrect Auth token','Authintication  middleware',10)
            let apiResponse =  response.generate(true,'Incorrect Auth token',403,null)
            res.send(apiResponse)
        }
    }else{
        logger.captureError('Authenticatation token is missing','Authenticatation Middleware',5)
			let apiresponse = response.generate(true,'Authenticatation Token is missing',400,null)
			res.send(apiresponse)
    }
}

module.exports = {
    isAuthinticated:isAuthinticated
}