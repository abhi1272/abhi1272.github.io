let appConfig = {}

appConfig.port = 8000;
appConfig.allowedCrosOrigin = "*"
appConfig.env = "dev";
appConfig.db = {
    uri: 'mongodb://localhost:27017/ekartDb'
}

appConfig.apiVersion = '/api/v1'

module.exports = {

    port:appConfig.port,
    allowedCrosOrigin:appConfig.allowedCrosOrigin,
    env:appConfig.env,
    uri:appConfig.db,
    apiVersion:appConfig.apiVersion
    
}

