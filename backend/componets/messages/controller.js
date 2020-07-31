const store = require('./store');
async function addMessage(FormData = Object()) {
    return await store.create(FormData);
}

function getMessages() {
    return 'messages all';
}

module.exports = {
    addMessage,
    getMessages
}