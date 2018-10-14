const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const notes = require('./routes/api/notes');
//initialize app 
const app = express();

//bodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Routes
app.use('/api/notes', notes);

//start server 
const port = 5000;
app.listen(port, () => console.log(`Server stated on port ${port}`));
