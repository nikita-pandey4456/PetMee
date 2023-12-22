// const mongoose = require('mongoose');



 
// const dotenv = require('dotenv');

// const morgan = require ('morgan');



// // load env vars

// dotenv.config({path:'./config/config.env'});

const express = require("express");
const server = express();
server.use(express.json())

// route imports
const user = require("./routes/userRoutes");
server.use("/api/v1",user);



module.exports = server;

// //middleware

// const logger = (req, res, next) => {

//     console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    
//     next();
    
// }

// app.use(logger);



// const connectDB = require('./config/db');
// //connectDB();



// const PORT = process.env.PORT||5000;

// app.listen(PORT, console.log(`Server running on ${PORT}`));


/*
const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: 'config/config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});


*/