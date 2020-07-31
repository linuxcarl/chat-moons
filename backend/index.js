const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet =  require('helmet');
const { api } = require('./config');
const app = express();

//routes
const messages =  require('./componets/messages/network');

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

app.use('/messages', messages);

app.listen(api.port, () =>{
    console.log(`API running in http://localhost:${api.port}`);
})
