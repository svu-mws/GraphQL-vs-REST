const mongooseLib = require("mongoose");

const config = require("./backend/config");

const Users = require("./seeders/users.seeder");
const Comments = require("./seeders/comments.seeder");


mongooseLib.Promise = global.Promise;


module.exports = {
    mongoose: mongooseLib,
    mongoURL: config.mongoURL,
    seedersList: {
        Users,
        Comments,
    }
};
