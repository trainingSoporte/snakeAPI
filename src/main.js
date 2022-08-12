const express = require('express');
const cors = require('cors');
const {User} = require('./users/users.entity.raw')

const userRoutes = require('./users/users.routes');
const loginRoutes = require('./login/login.routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/v1/users',userRoutes);
app.use('/v1/login',loginRoutes);

module.exports = {app, User};