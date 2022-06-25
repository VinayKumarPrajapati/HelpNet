const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const morgan = require('morgan');

const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
//const helpRouter = require("./routes/helperRoutes");
const errorHandler = require('./controllers/error');

mongoose
  .connect('mongodb://localhost:27017/helperverse')
  .then(() => {
    console.log('Connected to database');
  })
  .catch(err => console.log(err));
