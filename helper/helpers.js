// const models = require('./../models')
function generateFullname(firstName, lastName){
    return `${firstName} ${lastName}`
}

module.exports = {
    generateFullname: generateFullname
}