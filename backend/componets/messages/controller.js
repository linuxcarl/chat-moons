const store = require('./store');
const { socket } = require('../../socket');

async function addMessage(FormData = Object()) {
  FormData.date = new Date();
  const message = await store.create(FormData);
  socket.io.emit('message', message);
}

async function getMessages() {
  return await store.getAll();
}

module.exports = {
  addMessage,
  getMessages,
};
