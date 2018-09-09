const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const fs = require('fs')

const appConfig = require('./config/appConfig.js');
const notFound = require('./middleware/notFound');
const routeLogger = require('./middleware/routeLogger');

let app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(routeLogger.logIp)

app.get('/',(req,res)=>{
    console.log('hello world');
    res.send('hello world');
})

// bootstrap routes file

let routesPath = './routes'
fs.readdirSync(routesPath).forEach(function(file){

	if(file.indexOf('.js') > -1){
		console.log("includes the following file")
		console.log(routesPath + '/' + file)
		let route = require(routesPath+ '/' + file)
        route(app)
	}

})




app.use(notFound.notFound);

// bootstrap model files

let modelPath = './models'
fs.readdirSync(modelPath).forEach(function(file){
	if(file.indexOf('.js') >-1) require(modelPath + '/' +file)
})	




app.listen(appConfig.port,()=>{
    console.log(`app listen at ${appConfig.port}`)
    let db = mongoose.connect(appConfig.uri.uri,()=>{
        console.log(`mongoDb connected successfully`)
    })
});


mongoose.connection.on('error',function(err){
    if(err){
        console.log('database connection error');
        console.log(err)
    }
})

mongoose.connection.on('open',function(err){
    if(err){
        console.log('some error occured in database conection')
        comsole.log(err)
    }
    else{
        console.log('mongodb connected')
    }
})











