const express = require("express");
const expressGraphQL = require("express-graphql");
const bodyParser = require("body-parser");
const cors = require("cors");
const schema = require("./graphql");
require("./DB_Connection");


const app = express();

// REST API
const UserController = require('./Controllers/UserController');
app.use('/users', UserController);

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
