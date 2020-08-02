const store = require('./store');
const { socket } = require('../../socket');

async function addMessage(FormData = Object()) {
  FormData.date = new Date();
  const message = await store.create(FormData);
  socket.io.emit('messages', {user:message.user, message:message.message});
  return message;
}

async function getMessages() {
  const messages = await store.getAll();
  return messages;
}

module.exports = {
  addMessage,
  getMessages,
};
