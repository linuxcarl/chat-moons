const Model = require('./model');

function create(message){
    const myMessage =  new Model(message);
    myMessage.save();
}
module.exports ={
    create
}