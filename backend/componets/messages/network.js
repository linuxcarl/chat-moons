const express = require('express');
const controller = require('./controller');
const responses = require('../../utils/responses/');
const router = express.Router();

const validationHandler = require('../../utils/middleware/validationHandler');
const {createMessageSchema} = require('../../utils/schemas/messages');
router.get('/', async (req, res, next) => {
  try {
    const messages = await controller.getMessages();
    responses.success(req, res, messages, 200);
  } catch (error) {
    next(error);
  }
});
router.post(
  '/',
  validationHandler(createMessageSchema),
  async (req, res, next) => {
    const data = req.body;
    try {
      const createdMessage = await controller.addMessage(data);
      responses.success(req, res, createdMessage, 201);
    } catch (error) {
      next(error);
    }
  }
);
module.exports = router;
