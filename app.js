const express = require('express');
const app = express();
require('dotenv').config();

// middleware

app.use(express.json());

// routes

app.get('/', (req, res)=>{
  res.send("HELLO TEST _ ATAA")
})

const port = process.env.PORT || 5000;

const start = async () => {
  app.listen(port, () =>
    console.log(`Server is listening on port ${port}...`)
  );
};

start();
