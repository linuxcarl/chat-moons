const store = require('./store');
async function addMessage(FormData = Object()) {
    FormData.date = new Date();
    return await store.create(FormData);
}

async function getMessages() {
    return await store.getAll();
}

module.exports = {
    addMessage,
    getMessages
}