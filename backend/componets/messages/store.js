const Model = require('./model');

function create(message = Object()){
    const myMessage =  new Model(message);
    return myMessage.save();
}
function getAll(){
    return Model.find({});
}
module.exports ={
    create,
    getAll
}