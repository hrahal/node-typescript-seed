import * as express from "express"
import {Express} from "express";
import * as path from "path";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";

const usersRouter = require('./controllers/users');

const app: Express = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);

module.exports = app;
