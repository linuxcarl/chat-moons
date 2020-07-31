const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet =  require('helmet');
const { api } = require('./config');
const app = express();

app.use(cors);
app.use(bodyParser.json());
app.use(helmet);

app.listen(api.port, () =>{
    console.log(`API running in http://localhost:${api.port}`);
})
