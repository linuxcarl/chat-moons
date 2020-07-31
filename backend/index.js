const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const { api, db } = require('./config');
const mongoDb = require('./store/mongo');

const url = `mongodb+srv://${db.dbUser}:${db.dbPassword}@${db.dbHost}/${db.dbName}`;
mongoDb(url);

const app = express();
const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require('./utils/middleware/errorHandlers');

//routes
const messages = require('./componets/messages/network');

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

app.use('/messages', messages);

// middlewares by errors
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(api.port, () => {
  console.log(`API running in http://localhost:${api.port}`);
});
