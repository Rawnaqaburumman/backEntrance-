const express = require('express');

const cors = require('cors');

const axios = require('axios');

require('dotenv').config();

const server = express();

server.use(cors());

server.use(express.json());

const port = process.env.PORT
const mongoose = require("mongoose");
mongoose.connect(process.env.API_DATABASE, { useNewUrlParser: true });
const {getFruit,addFav,getFav}= require('./controller/fruit.controller')
//============================================================================================

server.get('/', (req, res) => {
  res.send('Hello World!')
})


server.get('/fruit',getFruit)
server.post('/myfruite', addFav)
server.get('/myfruite',getFav)




server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})