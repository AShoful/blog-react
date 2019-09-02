import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import config from "../config"
import PostController from './controllers/PostController';
const Post = new PostController();
import UserController from './controllers/UserController';
const User = new UserController();

const app = express();

//dataBase


mongoose.Promise = global.Promise;
mongoose.set('debug', config.IS_PRODUCTION);
mongoose.set('useCreateIndex', true)
mongoose.connection
    .on('error', error => console.log(error))
    .on('close', () => console.log('Database connection closed.'))
    .once('open', () => {
        const info = mongoose.connections[0];
        console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
        
    });
mongoose.connect(config.MONGO_URL, { useNewUrlParser: true });



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/posts', Post.index);
app.post('/posts', Post.create);
app.get('/posts/:id', Post.read);
app.delete('/posts/:id', Post.delete);
app.patch('/posts/:id', Post.update);

app.get('/login', User.index);
app.post('/register', User.create);
app.post('/login', User.read)



// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.render('error', {
        message: error.message,
        error: !config.IS_PRODUCTION ? error : {}
    });
});

app.listen(config.PORT, () =>
    console.log(`Example index listening on port ${config.PORT}! Process.env.NODE_ENV: ${process.env.NODE_ENV}`)
);
