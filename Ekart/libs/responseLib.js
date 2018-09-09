
let generate = (err,message,status,data) => {

    let response = {
        error:err,
        message:message,
        status:status,
        data
    }
    return response
}


module.exports = {
    generate:generate
}

