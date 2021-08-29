const express = require ('express');
const mongoose = require ('mongoose');
const swaggerUI = require ('swagger-ui-express');
const swaggerDocs = require ('./swagger.json');
const routes = require('./routes');
const app = express();
const cors = require('cors');



mongoose.connect('mongodb+srv://newuser:3H-HSHHPe-xTxX9@cluster0.fgwkn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',  {
//    useNewUrlParser: true,
//    useCreateIndex: true
});

// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://newuser:3H-HSHHPe-xTxX9@cluster0.fgwkn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });




app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen('5000', () => {
    console.log('Rodando na porta 5000');
});