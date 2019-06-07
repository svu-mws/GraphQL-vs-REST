const express = require("express");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const schema = require("./graphql");


const app = express();

const uri = "mongodb://127.0.0.1/rest_graphql";

mongoose
    .connect(
        uri,
        {
            useCreateIndex: true,
            useNewUrlParser: true
        }
    )
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// REST API
const UserController = require('./Controllers/UserController');
app.use('users', UserController);

const CommentController = require('./Controllers/CommentController');
app.use('comments', CommentController);


//GraphQL
app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressGraphQL({
        schema,
        graphiql: true
    })
);

module.exports = app;
