import express from 'express';
import mongoose from 'mongoose';

import Router from '../router/router.js'

const app = express();
app.use(express.json())


mongoose
    .connect('mongodb+srv://kutjinalex:CTC1DK4lPwqjvgQV@cluster0.dxhypzb.mongodb.net/currency')
    .then(() => console.log("Database is ok"))
    .catch((err) => console.log("Database is not ok", err))


app.use('', Router);

app.listen(8011, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log("Server is running on port 8011");
  });