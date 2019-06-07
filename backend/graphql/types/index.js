const {mergeTypes} = require("merge-graphql-schemas");
const Comment = require("./Comment/");
const User = require("./User/");
const typeDefs = [Comment, User];
module.exports = mergeTypes(typeDefs, {all: true});
